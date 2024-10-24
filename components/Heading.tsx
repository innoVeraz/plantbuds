type Props = {
  children: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "light" | "dark";
  size?: string;
  fontFamily?: "geist" | "sergio"; // Specifika alternativ för dina fonter
};

export default function Heading({
  children,
  level = 1,
  variant,
  size,
  fontFamily,
}: Props) {
  const Tag = `h${level}` as React.ElementType;

  const textColor = variant === "light" ? "text-textLight" : "text-foreground";

  // Välj rätt font baserat på fontFamily-argumentet
  const selectedFont =
    fontFamily === "geist"
      ? "var(--font-geist-sans)"
      : fontFamily === "sergio"
      ? "var(--font-sergio)"
      : "";

  return (
    <Tag
      className={`${size} ${textColor}`}
      style={{ fontFamily: selectedFont }} // Applicera font-variabeln här
    >
      {children}
    </Tag>
  );
}
