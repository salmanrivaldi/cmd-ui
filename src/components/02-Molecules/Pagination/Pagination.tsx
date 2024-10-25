import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxButtons = 6; // Maksimal 6 tombol halaman

    if (totalPages <= maxButtons) {
      // Jika total halaman lebih sedikit dari atau sama dengan 6, tampilkan semuanya
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${
              currentPage === i ? "text-white bg-slate-800" : "text-slate-500 bg-white"
            } border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Tampilkan dengan titik-titik
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        startPage = 1;
        endPage = 4;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 3;
        endPage = totalPages;
      }

      if (startPage > 1) {
        pageNumbers.push(
          <button
            key={1}
            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${
              currentPage === 1 ? "text-white bg-slate-800" : "text-slate-500 bg-white"
            } border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease`}
            onClick={() => onPageChange(1)}
          >
            1
          </button>
        );

        if (startPage > 2) {
          pageNumbers.push(
            <span
              key="start-dots"
              className="px-3 py-1"
            >
              ...
            </span>
          );
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${
              currentPage === i ? "text-white bg-slate-800" : "text-slate-500 bg-white"
            } border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push(
            <span
              key="end-dots"
              className="px-3 py-1"
            >
              ...
            </span>
          );
        }

        pageNumbers.push(
          <button
            key={totalPages}
            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${
              currentPage === totalPages ? "text-white bg-slate-800" : "text-slate-500 bg-white"
            } border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease`}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-between items-center px-4 py-3">
      <div className="text-sm text-slate-500">
        Showing <b>{currentPage}</b> of <b>{totalPages}</b>
      </div>
      <div className="flex space-x-1">
        <button
          className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {renderPageNumbers()}
        <button
          className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
