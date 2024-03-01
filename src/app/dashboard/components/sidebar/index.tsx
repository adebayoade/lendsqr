'use client';

import { Icon } from '@/components/icons';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BusinessesMenuNavigation,
  CustomersMenuNavigation,
  SettingsMenuNavigation,
} from '../../constant';

export default function Sidebar() {
  const currentRoute = usePathname();

  return (
    <div className="sidebar w-[283px] h-screen overflow-y-auto py-10 shadow bg-white">
      <div className="flex flex-col gap-5">
        <button
          className={`non-active-link text-primary flex items-center gap-3
    `}
        >
          <Icon.BriefCase />
          <span>Switch Organization</span>
          <ChevronDown />
        </button>

        <div className="flex flex-col">
          <span className="px-6 text-sm mb-4 text-gray-500">CUSTOMERS</span>

          {CustomersMenuNavigation.map(({ route, title, icon }: any) => (
            <Link
              key={title}
              href={route}
              className={`
      ${currentRoute === route ? 'active-link' : 'non-active-link'} flex gap-3 items-center
  `}
            >
              <span>{icon}</span>
              <span>{title}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <span className="px-6 text-sm mb-4 text-gray-500">BUSINESSES</span>
          {BusinessesMenuNavigation.map(({ route, title, icon }: any) => (
            <Link
              key={title}
              href={route}
              className={`
      ${currentRoute === route ? 'active-link' : 'non-active-link'} flex gap-3 items-center
  `}
            >
              <span>{icon}</span>
              <span>{title}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <span className="px-6 text-sm mb-4 text-gray-500">SETTINGS</span>
          {SettingsMenuNavigation.map(({ route, title, icon }: any) => (
            <Link
              key={title}
              href={route}
              className={`
      ${currentRoute === route ? 'active-link' : 'non-active-link'} flex gap-3 items-center
  `}
            >
              <span>{icon}</span>
              <span>{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
