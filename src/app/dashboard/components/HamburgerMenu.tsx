'use client';

import { Icon } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  BusinessesMenuNavigation,
  CustomersMenuNavigation,
  SettingsMenuNavigation,
} from '../constant';
import Link from 'next/link';
import Search from './topbar/Search';
import Menu from './topbar/Menu';
import Image from 'next/image';

export default function HamburgerMenu() {
  const currentRoute = usePathname();

  return (
    <>
      <div className="xl:hidden">
        <div className="flex items-center justify-between gap-5 px-2 py-2">
          <div className="flex items-center gap-5">
            <DropdownMenu>
              <DropdownMenuTrigger className='mb-2'>
                <Icon.HamburgerMenu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="overflow-auto h-[700px] mt-4 rounded-none border-0 text-[#8790a6] xl:hidden">
                <DropdownMenuLabel>
                  <button
                    className={`flex items-center gap-3
    `}
                  >
                    <Icon.BriefCase />
                    <span>Switch Organization</span>
                    <ChevronDown />
                  </button>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>CUSTOMERS</DropdownMenuLabel>
                {CustomersMenuNavigation.map(({ route, title, icon }: any) => (
                  <Link
                    key={title}
                    href={route}
                    className={`
      ${currentRoute === route ? '' : ''}
  `}
                  >
                    <DropdownMenuItem className="flex gap-3 items-center">
                      <span>{icon}</span>
                      <span>{title}</span>
                    </DropdownMenuItem>
                  </Link>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>BUSINESSES</DropdownMenuLabel>
                {BusinessesMenuNavigation.map(({ route, title, icon }: any) => (
                  <Link
                    key={title}
                    href={route}
                    className={`
      ${currentRoute === route ? '' : ''}
  `}
                  >
                    <DropdownMenuItem className="flex gap-3 items-center">
                      <span>{icon}</span>
                      <span>{title}</span>
                    </DropdownMenuItem>
                  </Link>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>SETTINGS</DropdownMenuLabel>
                {SettingsMenuNavigation.map(({ route, title, icon }: any) => (
                  <Link
                    key={title}
                    href={route}
                    className={`
      ${currentRoute === route ? '' : ''}
  `}
                  >
                    <DropdownMenuItem className="flex gap-3 items-center">
                      <span>{icon}</span>
                      <span>{title}</span>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Image src="/assets/images/logo.png" alt="lendsqr logo" width={150} height={90} />
          </div>

          <Menu />
        </div>
      </div>
    </>
  );
}
