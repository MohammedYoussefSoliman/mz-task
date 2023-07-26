export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event?: React.ChangeEvent<any>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: ButtonVariant;
  rounded?: boolean;
};
