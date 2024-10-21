type Props = {
  children: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "light" | "dark";
  size?: string; // Ny prop för anpassad storlek
};

export default function Heading({ children, level = 1, variant, size }: Props) {
  const Tag = `h${level}` as React.ElementType;

  const textColor = variant === "light" ? "text-textLight" : "text-foreground";

  return (
    <div className="relative p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-sergio)]">
      <Tag className={`${size} ${textColor} flex`}>{children}</Tag>
    </div>
  );
}
