import type { ReactNode } from 'react';

interface DetailItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function DetailItem({ icon, title, subtitle }: DetailItemProps) {
  return (
    <div className="flex items-center mb-6">
      <div className="text-placeholder mr-3">{icon}</div>
      <div>
        <div className="text-small font-medium text-text">{title}</div>
        <div className="text-small text-placeholder">{subtitle}</div>
      </div>
    </div>
  );
}