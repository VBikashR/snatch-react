import { isPast, isSameDay } from "date-fns";

export const isPastDateExcludingToday = (date: Date) => {
  const currentDate = new Date();
  if (isPast(date)) {
    if (isSameDay(date, currentDate)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
