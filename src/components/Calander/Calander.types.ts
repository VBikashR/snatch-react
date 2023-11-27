export interface RangeDate {
  from: Date | null;
  to: Date | null;
}

export interface CalanderProps {
  /** Event handler when the user clicks on a day cell. */
  onSelect?: (selectedDate: RangeDate) => void;
  /** allow selection of past dates. Defaults to true*/
  pastDateSelection?: boolean;
  /** allow selection of date in range. Defaults to false*/
  selectDateInRange?: boolean;
  /** The number of months to render. Default to `1`. */
  numberOfMonths?: 1 | 2;
}
