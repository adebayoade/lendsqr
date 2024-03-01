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
      <div className="mobile-hamburger xl:hidden">
        <div className="flex items-center justify-between gap-5 px-2 py-2">
          <div className="flex items-center gap-5">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:outline-none mb-2">
                <Icon.HamburgerMenu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="overflow-y-scroll max-h-[700px] mt-4 py-5 rounded-none border-0 text-[#8790a6] xl:hidden mobile-menu">
                <DropdownMenuLabel className="font-medium flex flex-col gap-2">
                  <button
                    className={`flex non-active-link items-center gap-3
    `}
                  >
                    <Icon.BriefCase />
                    <span>Switch Organization</span>
                    <ChevronDown />
                  </button>

                  <Link
                    href={'/dashboard'}
                    className={`
      ${
        currentRoute === '/dashboard' ? 'active-link' : 'non-active-link'
      } flex gap-3 items-center hover:bg-white
  `}
                  >
                    <Icon.Home />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuLabel>CUSTOMERS</DropdownMenuLabel>
                {CustomersMenuNavigation.map(({ route, title, icon }: any) => (
                  <Link
                    key={title}
                    href={route}
                    className={`
      ${currentRoute === route ? 'active-link' : 'non-active-link'} link`}
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
                    ${currentRoute === route ? 'active-link' : 'non-active-link'} link`}
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
                    ${currentRoute === route ? 'active-link' : 'non-active-link'} link`}
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
