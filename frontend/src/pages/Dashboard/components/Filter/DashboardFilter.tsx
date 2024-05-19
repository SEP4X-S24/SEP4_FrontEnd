import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt, FaFilter } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import "./DashboardFilter.css";

interface FilterComponentProps {
  onViewChange: (view: string) => void;
}

const DashboardFilter: React.FC<FilterComponentProps> = ({ onViewChange }) => {
  return (
    <div className="date-selection-container">
      <div className="button-group">
        {["12 months", "30 days", "7 days"].map((label) => (
          <button
            key={label}
            className={"button"}
            onClick={() => onViewChange(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardFilter;
