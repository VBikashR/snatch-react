import React, { useState } from "react";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// Libs
import { format } from "date-fns";
// Types
import { RangeDate } from "../Calander/Calander.types";
import { CalanderProps } from "../Calander/Calander.types";
import { DropdownProps } from "../Dropdown/Dropdown";
// Components
import Calander from "../Calander/Calander";
import Dropdown from "../Dropdown/Dropdown";

export type DatepickerProps = Omit<CalanderProps, "onSelect"> & {
  /** callback for datepicker*/
  onSelect?: (dateRange: RangeDate) => void;
  /**position of the dropdown menu*/
  alignment?: "left" | "center" | "right";
  //* date format - use date-fns (https://date-fns.org/v2.16.1/docs/format) */
  dateFormat?: string;
};

const Datepicker: React.FC<DatepickerProps> = ({
  alignment = "left",
  onSelect,
  selectDateInRange,
  numberOfMonths,
  pastDateSelection,
  dateFormat = "MM/dd/y",
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState<RangeDate>({
    from: null,
    to: null,
  });

  // As per business need, also react jsx do not accept date format
  const formattedDateRange = selectDateInRange
    ? selectedDate.from && selectedDate.to
      ? `${format(selectedDate.from, dateFormat)} - ${format(
          selectedDate.to,
          dateFormat
        )}`
      : "Pick a date"
    : selectedDate.from
    ? `${format(selectedDate.from, dateFormat)}`
    : "Pick a date";

  const handleDateRangeSelect = (selectedRange: RangeDate) => {
    setSelectedDate((prev) => selectedRange);
  };

  return (
    <Dropdown
      triggerInfo={formattedDateRange}
      afterIcon={<FontAwesomeIcon icon={faCalendar} />}
      alignment={alignment}
      onClickInside={() => {}}
      variant={"tag"}
      {...props}
    >
      <Calander
        onSelect={handleDateRangeSelect}
        selectDateInRange={selectDateInRange}
        numberOfMonths={numberOfMonths}
        pastDateSelection={pastDateSelection}
      />
    </Dropdown>
  );
};

export default Datepicker;
