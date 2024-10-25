"use client";

import React, { Fragment, useState } from "react";
import Pagination from "@/components/02-Molecules/Pagination/Pagination";
import RegularButton from "@/components/01-Atoms/Button/RegularButton";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "@/components/01-Atoms/Indicator/LoadingSpinner";

interface TableWithCollapseProps<T extends Record<string, any>> {
  rows: T[];
  limit: number;
  header: string[];
  headerMap: { [key: string]: keyof T };
  collapsibleFields: string[];
  collapsibleFieldsMap: { [key: string]: keyof T };
  searchTerm: string;
  currentPage: number;
  totalPages: number;
  isLoading?: boolean;
  onLimitChange: (newLimit: number) => void;
  onSearchTermChange: (newSearchTerm: string) => void;
  onPageChange: (newPage: number) => void;
}

const TableWithCollapse = <T extends Record<string, any>>({
  rows,
  limit,
  header,
  headerMap,
  collapsibleFields,
  collapsibleFieldsMap,
  searchTerm,
  currentPage,
  totalPages,
  isLoading,
  onLimitChange,
  onSearchTermChange,
  onPageChange,
}: TableWithCollapseProps<T>) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = Number(e.target.value);
    onLimitChange(newLimit);
    onPageChange(1);
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(e.target.value);
    onPageChange(1);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="text-sm">Show</label>
          <select
            value={limit}
            onChange={handleRowsPerPageChange}
            className="ml-2 px-3 h-[38px] text-sm border outline-none border-gray-300 focus:border-blue-500"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <label className="ml-2 text-sm">entries</label>
        </div>

        <div>
          <label className="text-sm">Search: </label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="px-3 h-[38px] text-gray-600 text-sm border border-gray-300 transition-all outline-none focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>

      {isLoading && <LoadingSpinner />}

      {!isLoading && (
        <Fragment>
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-200 bg-slate-50 text-sm font-normal">#</th>
                {header.map((heading, index) => (
                  <th
                    key={index}
                    className="p-4 border-b border-slate-200 bg-slate-50"
                  >
                    <p className="text-[13px] font-normal leading-none text-slate-500">{heading}</p>
                  </th>
                ))}
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-[13px] font-normal leading-none text-slate-500">Aksi</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <React.Fragment key={index}>
                  <tr className="hover:bg-slate-50 border-b border-slate-200">
                    <td className="p-4 py-5 flex items-center space-x-2">
                      <button
                        onClick={() => toggleRow(index)}
                        className={`flex items-center justify-center w-4 h-4 border border-indigo-600 text-lg rounded-full transition-all duration-300 ease ${
                          expandedRows.includes(index) ? "bg-indigo-600 text-white rotate-90" : "hover:bg-indigo-600 hover:text-white rotate-0"
                        }`}
                      >
                        &#x203A;
                      </button>
                      <span className="text-[13px]">{(currentPage - 1) * limit + index + 1}</span>
                    </td>
                    {header.map((heading, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="p-4 py-5"
                      >
                        <p className="text-[13px] text-slate-500">{headerMap[heading] !== undefined ? String(row[headerMap[heading]]) : ""}</p>
                      </td>
                    ))}
                    <td className="p-4 py-5 flex items-center space-x-2">
                      <RegularButton
                        type="primary"
                        size="small"
                        icon={faEdit}
                        onClick={() => null}
                      />

                      <RegularButton
                        type="danger"
                        size="small"
                        icon={faTrash}
                        onClick={() => null}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td
                      colSpan={header.length + 2}
                      className="p-0"
                    >
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedRows.includes(index) ? "max-h-[500px]" : "max-h-0"}`}
                        style={{
                          transitionProperty: "max-height",
                        }}
                      >
                        <div className="p-4 bg-slate-100">
                          <table className="w-full text-left table-auto">
                            <tbody>
                              {collapsibleFields.map(
                                (field, i) =>
                                  row[collapsibleFieldsMap[field]] !== undefined && (
                                    <tr key={i}>
                                      <td className="px-4 py-1 text-[13px] font-semibold w-52">{field}</td>
                                      <td className="py-1">:</td>
                                      <td className="px-4 py-1 text-[13px]">{String(row[collapsibleFieldsMap[field]])}</td>
                                    </tr>
                                  )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </Fragment>
      )}
    </div>
  );
};

export default TableWithCollapse;
