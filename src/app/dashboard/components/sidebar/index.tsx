'use client';

import { Icon } from '@/components/icons';
import { ChevronDown, GlobeIcon, LogOutIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BusinessesMenuNavigation,
  CustomersMenuNavigation,
  SettingsMenuNavigation,
} from '../../constant';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

export default function Sidebar() {
  const currentRoute = usePathname();

  return (
    <div className="sidebar w-[283px] h-max overflow-y-auto pt-5 shadow bg-white">
      <div className="flex flex-col gap-5">
        <Accordion type="single" collapsible className="w-full px-5 text-[#8790a6]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-primary">
              <span>
                <Icon.BriefCase />
              </span>
              <span>Switch Organization</span>
            </AccordionTrigger>
            <AccordionContent className="mt-2 flex flex-col text-left items-start gap-5 text-base">
              <button className="hover:text-primary flex gap-3 items-center">
                <GlobeIcon size={17} />
                <span>Organization 1</span>
              </button>
              <button className="hover:text-primary flex gap-3 items-center">
                <GlobeIcon size={17} />
                <span>Organization 2</span>
              </button>
              <button className="hover:text-primary flex gap-3 items-center">
                <GlobeIcon size={17} />
                <span>Organization 3</span>
              </button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

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
          <span className="px-6 text-xs font-medium mb-4 text-gray-500">CUSTOMERS</span>

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
          <span className="px-6 text-xs font-medium mb-4 text-gray-500">BUSINESSES</span>
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
          <span className="px-6 text-xs font-medium mb-4 text-gray-500">SETTINGS</span>
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

          <span className="text-xs font-medium">v1.2.0</span>
        </div>
      </div>
    </div>
  );
}
