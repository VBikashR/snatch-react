export interface RangeDate {
  from: Date | null;
  to: Date | null;
}

export interface CalanderProps {
  onSelect: (selectedDate: RangeDate) => void;
  /** allow selection of past dates*/
  pastDateSelection?: boolean;
}
