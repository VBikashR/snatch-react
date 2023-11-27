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
import styled, { css } from "styled-components";
import Text from "../Text/Text";
import Select from "../Select/Select";
import Seperator from "../Seperator/Seperator";
import Button from "../Button/Button";
import { handleIconInteraction } from "./helper";

type dayProps = {
  isSameMonth?: boolean;
  isCurrentDateSelectedFrom?: boolean | null;
  isCurrentDateSelectedTo?: boolean | null;
  dateInRange?: boolean;
  isPastDate?: boolean;
  isToday?: boolean;
};

const StyledCalanderCard = styled.div`
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  background-color: #fff;
`;

const StyledInnerCard = styled.div<CalanderProps>`
  display: ${(props) => (props.numberOfMonths === 2 ? "flex" : "block")};
  gap: 1rem;
`;

const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StyledIcon = styled.div.attrs({ tabIndex: 0, role: "button" })`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  border-radius: 0.357rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;

  &:hover {
    background-color: #e2e8f0;
  }
`;
const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const getDayStyles = ({ ...props }: dayProps & CalanderProps) => css`
  margin: 10px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #111827;
  transition-property: background-color, color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background-color: #9e9e9e;
    color: #fff;
  }

  ${!props.isSameMonth &&
  css`
    color: #d1d5db;
  `}

  ${!props.isSameMonth && props.numberOfMonths === 2
    ? css`
        opacity: 0;
        user-select: none;
      `
    : ""}

  ${props.isCurrentDateSelectedFrom &&
  css`
    color: white;
    background: #3366ff;
    border-radius: 50%;
  `}
  ${props.isCurrentDateSelectedTo &&
  css`
    color: white;
    background: #3366ff;
    border-radius: 50%;
  `}
  ${props.isToday &&
  css`
    background: #111827;
    border-radius: 50%;
    color: white;
  `}
  ${props.dateInRange &&
  css`
    color: white;
    background: #b0c3ff;
    border-radius: 50%;
  `}

  ${!props.pastDateSelection &&
  props.isPastDate &&
  css`
    color: #d1d5db;
    cursor: not-allowed;
  `}
`;
const StyledDay = styled.div<dayProps & CalanderProps>`
  ${getDayStyles}
`;

const StyledWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  color: #111827;
`;

const Calander: React.FC<CalanderProps> = ({
  onSelect,
  pastDateSelection = true,
  selectDateInRange = false,
  numberOfMonths = 1,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState<RangeDate>({
    from: null,
    to: null,
  });
  const todayDate = new Date();
  const [activeDate, setActiveDate] = useState<Date>(new Date()); //this need not be the 1st date of every month
  const [selectedMonth, setSelectedMonth] = useState<number>(
    activeDate?.getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    activeDate?.getFullYear()
  );
  const nextActiveDate = addMonths(activeDate, 1);

  useEffect(() => {
    // Call onSelect with the selectedDate if provided
    if (onSelect) {
      onSelect(selectedDate);
    }
  }, [selectedDate]);

  const handleReset = () => {
    setActiveDate(new Date());
    setSelectedDate({
      from: null,
      to: null,
    });
  };

  const handleDateRange = (date: Date) => {
    if (selectDateInRange) {
      // Handle date range selection logic
      if (selectedDate.from && selectedDate.to) {
        setSelectedDate({ from: date, to: null });
      } else if (!selectedDate.from) {
        setSelectedDate({ from: date, to: null });
      } else if (selectedDate.from && !selectedDate.to) {
        if (date >= selectedDate.from) {
          setSelectedDate({ ...selectedDate, to: date });
        } else {
          setSelectedDate({ from: date, to: null });
        }
      }
    } else {
      // Handle single date selection logic
      setSelectedDate({ from: date, to: null });
    }
  };

  // Update the select month and date
  useEffect(() => {
    setSelectedMonth(activeDate.getMonth());
    setSelectedYear(activeDate.getFullYear());
  }, [activeDate]);

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

  // select handler
  const handleSelectMonth = (
    value: any,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedMonth(parseInt(value));
  };

  // select handler
  const handleSelectYear = (
    value: any,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedYear(parseInt(value));
  };

  const handleOnDateClick = (cloneDate: Date) => {
    if (pastDateSelection) {
      handleDateRange(cloneDate);
    } else {
      if (!isPastDateExcludingToday(cloneDate)) {
        handleDateRange(cloneDate);
      }
    }
  };

  // The header section
  const getHeader = () => {
    return (
      <StyleHeader>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ display: "inline-flex", gap: "0.5rem" }}>
            {/* <Select value={selectedMonth} onChange={handleSelectMonth}>
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
            </Select> */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="calendarSelect"
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <option key={index} value={index}>
                  {format(new Date(selectedYear, index, 1), "MMMM")}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="calendarSelect"
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <option key={index} value={selectedYear - 5 + index}>
                  {selectedYear - 5 + index}
                </option>
              ))}
            </select>
          </div>
          {/* <Text small bold>
            {format(activeDate, "MMMM")}
          </Text> */}
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <StyledIcon
            onClick={(e) =>
              handleIconInteraction(e, {
                setActiveDate,
                subMonths,
                activeDate,
              })
            }
            onKeyDown={(e) =>
              handleIconInteraction(e, {
                setActiveDate,
                subMonths,
                activeDate,
              })
            }
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </StyledIcon>
          <StyledIcon
            onClick={(e) =>
              handleIconInteraction(e, {
                setActiveDate,
                addMonths,
                activeDate,
              })
            }
            onKeyDown={(e) =>
              handleIconInteraction(e, {
                setActiveDate,
                addMonths,
                activeDate,
              })
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </StyledIcon>
        </div>
      </StyleHeader>
    );
  };

  // Week day names
  const getWeekDaysNames = () => {
    //This gets the Week day name ---- sun, mon etc.
    const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
    return (
      <StyledWeek>
        {weekNames.map((day) => (
          <Text muted centerAlign small bold>
            {day}
          </Text>
        ))}
      </StyledWeek>
    );
  };

  // Main Logic that handles all date generation for a week based on date argument
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

      const isCurrentMonth = isSameMonth(currentDate, activeDate);
      const isToday = isSameDay(currentDate, new Date());
      const isInRange = dateInRange(currentDate);
      const pastDates = isPastDateExcludingToday(currentDate);

      week.push(
        <StyledDay
          key={day}
          isSameMonth={isCurrentMonth}
          isCurrentDateSelectedFrom={isCurrentDateSelectedFrom}
          isCurrentDateSelectedTo={isCurrentDateSelectedTo}
          isToday={isToday}
          dateInRange={isInRange}
          isPastDate={pastDates}
          numberOfMonths={numberOfMonths}
          pastDateSelection={pastDateSelection}
          onClick={() => handleOnDateClick(cloneDate)}
        >
          {format(currentDate, "d")}
        </StyledDay>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  // used to generate dates for a month
  const getDates = (date: Date) => {
    const startOfTheSelectedMonth = startOfMonth(date);
    const endOfTheSelectedMonth = endOfMonth(date);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(generateDatesForCurrentWeek(currentDate, date));
      currentDate = addDays(currentDate, 7);
    }

    return <StyledWeek>{allWeeks}</StyledWeek>;
  };

  return (
    <StyledCalanderCard {...props}>
      {getHeader()}
      <StyledInnerCard numberOfMonths={numberOfMonths}>
        <div>
          <Text small bold centerAlign>
            {format(activeDate, "MMMM")}
          </Text>
          {getWeekDaysNames()}
          {getDates(activeDate)}
        </div>
        {numberOfMonths === 2 && (
          <div>
            <Text small bold centerAlign>
              {format(nextActiveDate, "MMMM")}
            </Text>
            {getWeekDaysNames()}
            {getDates(nextActiveDate)}
          </div>
        )}
      </StyledInnerCard>
      <Seperator />
      <StyledFooter>
        <Button size={"small"} onClick={handleReset} variant="ghost">
          <span style={{ color: "#3366ff" }}>Reset</span>
        </Button>
        <Button
          variant="ghost"
          size={"small"}
          onClick={() => {
            setActiveDate(new Date());
          }}
        >
          <span style={{ color: "#3366ff" }}>
            {format(todayDate, "MMM dd, yyyy")}
          </span>
        </Button>
      </StyledFooter>
    </StyledCalanderCard>
  );
};

export default Calander;
