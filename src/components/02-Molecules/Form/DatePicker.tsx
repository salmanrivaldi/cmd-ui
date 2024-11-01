import React, { useState, useRef, useEffect } from "react";
import {
	format,
	addMonths,
	subMonths,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	isSameMonth,
	isSameDay,
	isToday,
	setYear,
	setMonth,
} from "date-fns";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { id } from "date-fns/locale";

interface DatePickerProps {
	selected?: Date;
	onChange: (date: Date) => void;
	className?: string;
}

type View = "days" | "months" | "years";

const DatePicker = ({
	selected,
	onChange,
	className = "",
}: DatePickerProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [view, setView] = useState<View>("days");
	const datePickerRef = useRef<HTMLDivElement>(null);

	const yearStart = Math.floor(currentMonth.getFullYear() / 10) * 10 - 1;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				datePickerRef.current &&
				!datePickerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
				setView("days");
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const nextMonth = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	const previousMonth = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const nextYear = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentMonth(
			new Date(currentMonth.getFullYear() + 1, currentMonth.getMonth())
		);
	};

	const previousYear = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentMonth(
			new Date(currentMonth.getFullYear() - 1, currentMonth.getMonth())
		);
	};

	const nextDecade = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentMonth(
			new Date(currentMonth.getFullYear() + 10, currentMonth.getMonth())
		);
	};

	const previousDecade = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentMonth(
			new Date(currentMonth.getFullYear() - 10, currentMonth.getMonth())
		);
	};

	const getDaysInMonth = () => {
		const start = startOfMonth(currentMonth);
		const end = endOfMonth(currentMonth);
		return eachDayOfInterval({ start, end });
	};

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"Mei",
		"Jun",
		"Jul",
		"Agu",
		"Sep",
		"Okt",
		"Nov",
		"Des",
	];

	const handleMonthSelect = (e: React.MouseEvent, monthIndex: number) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentMonth(setMonth(currentMonth, monthIndex));
		setView("days");
	};

	const handleYearSelect = (e: React.MouseEvent, year: number) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentMonth(setYear(currentMonth, year));
		setView("months");
	};

	const handleViewChange = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setView(
			view === "days" ? "months" : view === "months" ? "years" : "years"
		);
	};

	const days = getDaysInMonth();
	const displayValue = selected
		? format(selected, "dd MMMM yyyy", { locale: id })
		: "";

	const renderHeader = () => {
		let title: string;
		let onPrevious: (e: React.MouseEvent) => void;
		let onNext: (e: React.MouseEvent) => void;

		switch (view) {
			case "months":
				title = currentMonth.getFullYear().toString();
				onPrevious = previousYear;
				onNext = nextYear;
				break;
			case "years":
				title = `${yearStart + 1}-${yearStart + 10}`;
				onPrevious = previousDecade;
				onNext = nextDecade;
				break;
			default:
				title = format(currentMonth, "MMMM yyyy", { locale: id });
				onPrevious = previousMonth;
				onNext = nextMonth;
		}

		return (
			<div className="flex items-center justify-between mb-4">
				<button
					type="button"
					onClick={onPrevious}
					className="p-1 hover:bg-gray-100 rounded-full"
				>
					<ChevronLeft className="w-5 h-5" />
				</button>
				<button
					type="button"
					onClick={handleViewChange}
					className="font-semibold hover:bg-gray-100 px-2 py-1"
				>
					{title}
				</button>
				<button
					type="button"
					onClick={onNext}
					className="p-1 hover:bg-gray-100 rounded-full"
				>
					<ChevronRight className="w-5 h-5" />
				</button>
			</div>
		);
	};

	const renderMonths = () => (
		<div className="grid grid-cols-4 gap-2">
			{months.map((month, index) => {
				const isCurrentMonth = currentMonth.getMonth() === index;
				return (
					<button
						type="button"
						key={month}
						onClick={(e) => handleMonthSelect(e, index)}
						className={`
              p-2  text-sm
              ${isCurrentMonth ? "bg-blue-500 text-white" : "hover:bg-gray-100"}
            `}
					>
						{month}
					</button>
				);
			})}
		</div>
	);

	const renderYears = () => (
		<div className="grid grid-cols-3 gap-2">
			{Array.from({ length: 12 }, (_, i) => yearStart + i).map((year) => {
				const isCurrentYear = currentMonth.getFullYear() === year;
				return (
					<button
						type="button"
						key={year}
						onClick={(e) => handleYearSelect(e, year)}
						className={`
              p-2 text-sm
              ${isCurrentYear ? "bg-blue-500 text-white" : "hover:bg-gray-100"}
              ${
					year === yearStart || year === yearStart + 11
						? "text-gray-400"
						: ""
				}
            `}
					>
						{year}
					</button>
				);
			})}
		</div>
	);

	const renderDays = () => (
		<>
			<div className="grid grid-cols-7 gap-1 mb-2">
				{["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map(
					(day) => (
						<div
							key={day}
							className="text-center text-sm font-medium text-gray-500"
						>
							{day}
						</div>
					)
				)}
			</div>

			<div className="grid grid-cols-7 gap-1">
				{Array.from({
					length: new Date(
						currentMonth.getFullYear(),
						currentMonth.getMonth(),
						1
					).getDay(),
				}).map((_, index) => (
					<div key={`empty-${index}`} className="h-8" />
				))}

				{days.map((day) => {
					const isSelected = selected
						? isSameDay(day, selected)
						: false;
					const isCurrentMonth = isSameMonth(day, currentMonth);
					const isCurrentDay = isToday(day);

					return (
						<button
							type="button"
							key={day.toString()}
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								onChange(day);
								setIsOpen(false);
								setView("days");
							}}
							className={`
                h-8 w-8 flex items-center justify-center text-sm
                ${!isCurrentMonth && "text-gray-300"}
                ${isSelected && "bg-blue-500 text-white hover:bg-blue-600"}
                ${!isSelected && isCurrentMonth && "hover:bg-gray-100"}
                ${
					isCurrentDay &&
					!isSelected &&
					"border border-blue-500 text-blue-500"
				}
              `}
						>
							{format(day, "d")}
						</button>
					);
				})}
			</div>
		</>
	);

	return (
		<div className={`relative ${className}`} ref={datePickerRef}>
			<div
				className="flex items-center border p-2 bg-white cursor-pointer"
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					setIsOpen(!isOpen);
				}}
			>
				<Calendar className="w-5 h-5 text-gray-500 mr-2 hover:text-blue-500 transition-all duration-300" />
				<input
					type="text"
					readOnly
					className="outline-none w-full text-sm"
					placeholder="Pilih tanggal"
					value={displayValue}
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
					}}
				/>
			</div>

			{isOpen && (
				<div className="absolute mt-2 bg-white shadow-lg p-4 w-72 border z-50">
					{renderHeader()}
					{view === "days" && renderDays()}
					{view === "months" && renderMonths()}
					{view === "years" && renderYears()}
				</div>
			)}
		</div>
	);
};

export default DatePicker;
