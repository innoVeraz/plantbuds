import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return (
    <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl color-[#332B1F] font-extrabold">{children}</h1>
    </div>
  );
}
