import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "accent" | "warning";
  onClick?: () => void;
};

const buttonStyles = {
  primary:
    "bg-primaryButton hover:bg-primaryButton text-white rounded-2xl text-2xl",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  accent: "bg-green-500 hover:bg-green-600 text-white",
  warning: "bg-red-500 hover:bg-red-600 text-white",
};

export default function Button({ children, variant, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-5 py-3 rounded-lg font-extrabold focus:outline-none",
        buttonStyles[variant]
      )}
    >
      {children}
    </button>
  );
}
