import { ReactNode } from "react";

type EditorialPanelProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function EditorialPanel({ title, children, className = "" }: EditorialPanelProps) {
  return (
    <div className={`rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-10 shadow-2xl shadow-black/30 ${className}`}>
      <h2 className="font-serif text-3xl font-semibold text-white">{title}</h2>
      <div className="mt-6 text-gray-300">{children}</div>
    </div>
  );
}
