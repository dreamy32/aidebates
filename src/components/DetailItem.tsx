import type { ReactNode } from 'react';

interface DetailItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function DetailItem({ icon, title, subtitle }: DetailItemProps) {
  return (
    <div className="flex items-center mb-6">
      <div className="text-[#4A6FA5] mr-3">{icon}</div>
      <div>
        <div className="text-small font-medium text-[#1D3557]">{title}</div>
        <div className="text-small text-[#4A6FA5]">{subtitle}</div>
      </div>
    </div>
  );
}