'use client';

import { Icon } from '@/components/icons';
import { ChevronDown, LogOutIcon } from 'lucide-react';
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
    <div className="sidebar w-[283px] h-max overflow-y-auto pt-5 shadow bg-white">
      <div className="flex flex-col gap-5">
        <button
          className={`non-active-link flex items-center px-5 gap-3
    `}
        >
          <Icon.BriefCase />
          <span>Switch Organization</span>
          <ChevronDown />
        </button>

        <Link
          href={'/dashboard'}
          className={`
      ${currentRoute === '/dashboard' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
  `}
        >
          <Icon.Home />
          <span>Dashboard</span>
        </Link>

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

        <div className="mt-12 border-t flex flex-col gap-10 p-5 text-primary">
          <Link href={'#'} className="flex gap-3 items-center">
            <Icon.SignOut />
            <span>Logout</span>
          </Link>

          <span className="text-sm">v1.2.0</span>
        </div>
      </div>
    </div>
  );
}
