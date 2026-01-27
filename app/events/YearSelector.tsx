import type React from "react";

interface YearSelectorProps {
  years: string[];
  selectedYear: string;
  onYearSelect: (year: string) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({
  years,
  selectedYear,
  onYearSelect,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {years.map((year) => (
        <button
          key={year}
          className={`text-left px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors duration-200 ${
            selectedYear === year
              ? "bg-gray-300 dark:bg-neutral-600 font-bold"
              : ""
          }`}
          onClick={() => onYearSelect(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

export default YearSelector;
