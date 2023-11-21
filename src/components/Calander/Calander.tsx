import React, { useEffect, useState } from "react";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// Library
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
} from "date-fns";

// Types
import { RangeDate, CalanderProps } from "./Calander.types";
// Utils
import { isPastDateExcludingToday } from "../Private/Helper";
// Components
import styled from "styled-components";
import Text from "../Text/Text";
import Select from "../Select/Select";
import Seperator from "../Seperator/Seperator";
import Button from "../Button/Button";

const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
`;
const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.125rem;
`;

const StyledDay = styled.div`
  margin: 10px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: #9e9e9e;
  }
`;

const StyledWeekName = styled.div`
  margin: 10px;
  height: 30px;
  width: 30px;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #9e9e9e;
`;

const StyledWeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Calander: React.FC<CalanderProps> = ({
  onSelect,
  pastDateSelection = true,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState<RangeDate>({
    from: null,
    to: null,
  });
  const currentDate = format(new Date(), "MMM dd, yyyy");
  const [activeDate, setActiveDate] = useState<Date>(new Date()); //this need not be the 1st date of every month
  const [selectedMonth, setSelectedMonth] = useState<number>(
    activeDate?.getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    activeDate?.getFullYear()
  );

  const handleDateRange = (date: Date) => {
    // reset if both from and to have dates
    if (selectedDate.from && selectedDate.to) {
      setSelectedDate({ from: date, to: null });
    }
    // If only no date is present, update from
    else if (!selectedDate.from) {
      setSelectedDate({ from: date, to: null });
    }
    // if from is already selected, update to
    else if (selectedDate.from && !selectedDate.to) {
      if (date >= selectedDate.from) {
        setSelectedDate({ ...selectedDate, to: date });
      } else {
        setSelectedDate({ from: date, to: null });
      }
    }
  };

  // Update the select month and date
  useEffect(() => {
    setSelectedMonth(activeDate.getMonth());
    setSelectedYear(activeDate.getFullYear());
  }, [activeDate]);

  // Send the updated date
  useEffect(() => {
    onSelect(selectedDate);
  }, [selectedDate]);

  // updated activedate based on month and year dropdown
  useEffect(() => {
    handleMonthYearChange();
  }, [selectedMonth, selectedYear]);

  // return boolean when a date is within the range selection
  const dateInRange = (date: Date) => {
    const { from, to } = selectedDate;
    return from && to ? date >= from && date <= to : false;
  };

  const handleMonthYearChange = () => {
    // When the month or year changes, update the active date.
    const newActiveDate = new Date(selectedYear, selectedMonth, 1);
    setActiveDate(newActiveDate);
  };

  const handleSelectMonth = (
    value: any,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedMonth(parseInt(value));
    // console.log("Event:", event);
  };
  const handleSelectYear = (
    value: any,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedYear(parseInt(value));
    // console.log("Event:", event);
  };

  // The header section
  const getHeader = () => {
    return (
      <StyleHeader>
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={{ cursor: "pointer" }}
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        />
        <div style={{ display: "inline-flex", gap: "2px" }}>
          <Select value={selectedMonth} onChange={handleSelectMonth}>
            {Array.from({ length: 12 }).map((_, index) => (
              <option key={index} value={index}>
                {format(new Date(selectedYear, index, 1), "MMMM")}
              </option>
            ))}
          </Select>

          <Select value={selectedYear} onChange={handleSelectYear}>
            {Array.from({ length: 10 }).map((_, index) => (
              <option key={index} value={selectedYear - 5 + index}>
                {selectedYear - 5 + index}
              </option>
            ))}
          </Select>
        </div>
        <Text large>{format(activeDate, "MMMM yyyy")}</Text>
        <FontAwesomeIcon
          icon={faAngleRight}
          style={{ cursor: "pointer" }}
          onClick={() => setActiveDate(addMonths(activeDate, 1))}
        />
      </StyleHeader>
    );
  };

  const getWeekDaysNames = () => {
    //This gets the Week day name ---- sun, mon etc.
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <StyledWeekName key={day}>
          {format(addDays(weekStartDate, day), "E")}
        </StyledWeekName>
      );
    }
    return (
      <StyledWeekContainer className="weekContainer">
        {weekDays}
      </StyledWeekContainer>
    );
  };

  const generateDatesForCurrentWeek = (date: Date, activeDate: Date) => {
    // Generates the dates for a week
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = new Date(currentDate);
      const isCurrentDateSelectedFrom =
        selectedDate.from && isSameDay(cloneDate, selectedDate.from);
      const isCurrentDateSelectedTo =
        selectedDate.to && isSameDay(cloneDate, selectedDate.to);

      week.push(
        <StyledDay
          key={day}
          className={`day ${
            isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"
          } ${isCurrentDateSelectedFrom ? "selectedFrom" : ""} ${
            isCurrentDateSelectedTo ? "selectedTo" : ""
          }
                ${dateInRange(currentDate) ? "selectedRange" : ""}
                ${isPastDateExcludingToday(currentDate) && "pastDates"}
                ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
          onClick={() => {
            // Past date selection logic
            if (!isPastDateExcludingToday(cloneDate)) {
              handleDateRange(cloneDate);
            }
          }}
        >
          {format(currentDate, "d")}
        </StyledDay>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(generateDatesForCurrentWeek(currentDate, activeDate));
      currentDate = addDays(currentDate, 7);
    }

    return <StyledWeekContainer>{allWeeks}</StyledWeekContainer>;
  };

  return (
    <>
      <div {...props}>
        {getHeader()}
        {getWeekDaysNames()}
        {getDates()}
        <Seperator />
        <StyledFooter>
          <Button
            variant="ghost"
            onClick={() => {
              setActiveDate(new Date());
            }}
            text={currentDate}
          />
        </StyledFooter>
      </div>
    </>
  );
};

export default Calander;
