interface StandarCardProps {
  children: React.ReactNode;
  title: string;
}

export default function StandarCard({ children, title }: StandarCardProps) {
  return (
    <div className="bg-white">
      <div className="bg-[#4C7C9E] text-white px-7 py-3 text-sm">{title}</div>
      <div className="p-7">{children}</div>
    </div>
  );
}
