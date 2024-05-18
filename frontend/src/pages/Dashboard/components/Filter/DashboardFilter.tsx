import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt, FaFilter } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import "./DashboardFilter.css";

const DateSelectionComponent: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [view, setView] = useState<string | null>("12 months");
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const handleViewChange = (view: string | null) => {
    setView(view);
    setShowDatePicker(view === null);
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div className="date-selection-container">
      <div className="button-group">
        {["12 months", "30 days", "7 days", "24 hours"].map((label) => (
          <button
            key={label}
            className={`button ${view === label ? "active" : ""}`}
            onClick={() => handleViewChange(label)}
          >
            {label}
          </button>
        ))}
        <button
          className={`icon-button ${showDatePicker ? "active" : ""}`}
          onClick={() => handleViewChange(null)}
          aria-label="Select date range"
          title="Select date range"
        >
          <FaCalendarAlt />
        </button>
        <button
          className="icon-button"
          aria-label="Apply filter"
          title="Apply filter"
        >
          <FaFilter />
        </button>
      </div>
      {showDatePicker && (
        <div className="date-picker-popup">
          <DatePicker
            selected={startDate}
            onChange={(update: [Date | null, Date | null]) => {
              const [start, end] = update;
              setStartDate(start);
              setEndDate(end);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            placeholderText="Select date range"
          />
        </div>
      )}
    </div>
  );
};

export default DateSelectionComponent;
