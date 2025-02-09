'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  icon: ReactNode;
  text: string;
  href: string;
}

export default function NavLink({ icon, text, href }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 text-[18px] font-medium transition-colors relative
        ${isActive 
          ? 'text-primary after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-primary' 
          : 'text-text hover:text-primary after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform'
        }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}