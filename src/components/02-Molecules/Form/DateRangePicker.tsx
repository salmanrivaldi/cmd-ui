"use client";

import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import Label from "@/components/01-Atoms/Form/Label";

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (startDateRef.current && endDateRef.current) {
      $(startDateRef.current).daterangepicker(
        {
          singleDatePicker: true,
          autoApply: true,
          showDropdowns: true,
          locale: { format: "MM-DD-YYYY" },
          startDate: "01-01-2024",
        },
        (start: moment.Moment) => {
          setStartDate(start.format("MM-DD-YYYY"));
        }
      );

      $(endDateRef.current).daterangepicker(
        {
          singleDatePicker: true,
          autoApply: true,
          showDropdowns: true,
          locale: { format: "MM-DD-YYYY" },
          startDate: "01-15-2024",
        },
        (end: moment.Moment) => {
          setEndDate(end.format("MM-DD-YYYY"));
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-2">
      <Label>Pilih tanggal</Label>
      <div className="flex">
        <input
          ref={startDateRef}
          id="startDate"
          className="px-3 h-[38px] w-[45%] text-gray-600 text-sm border border-gray-300 transition-all outline-none focus:border-blue-500"
          placeholder="Tanggal"
          value={startDate}
          readOnly
        />
        <div className="bg-gray-100 w-[10%] border border-b border-t border-gray-300 flex items-center justify-center">
          <span className="text-[10px] font-bold">&rarr;</span>
        </div>
        <input
          ref={endDateRef}
          id="endDate"
          className="px-3 h-[38px] w-[45%] text-gray-600 text-sm border border-gray-300 transition-all outline-none focus:border-blue-500"
          placeholder="Tanggal"
          value={endDate}
          readOnly
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
