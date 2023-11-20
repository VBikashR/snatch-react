export interface AlertProps {
  /** Control the alert color*/
  variant?: "default" | "destructive";
  /** Display the border around the alert*/
  border?: boolean;
  children: React.ReactNode;
}
