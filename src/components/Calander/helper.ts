import React, { KeyboardEvent, MouseEvent, ReactNode } from "react";

type IconInteractionHandlerProps = {
  setActiveDate: (date: Date) => void;
  subMonths?: (date: Date, amount: number) => Date;
  addMonths?: (date: Date, amount: number) => Date;
  activeDate: Date;
};

export const handleIconInteraction = (
  e: KeyboardEvent | MouseEvent,
  {
    setActiveDate,
    subMonths,
    addMonths,
    activeDate,
  }: IconInteractionHandlerProps
) => {
  if (
    (e as KeyboardEvent).key === "Enter" ||
    (e as MouseEvent).type === "click"
  ) {
    e.preventDefault(); // Prevent any default behavior
    if (subMonths) {
      setActiveDate(subMonths(activeDate, 1));
    }
    if (addMonths) {
      setActiveDate(addMonths(activeDate, 1));
    }
  }
};
