import "./Button.styles.scss";

interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  className?: string;
  disabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className = "",
  disabled = false,
  handleClick = (): void => {},
}) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
