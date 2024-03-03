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
import { ChevronDown, GlobeIcon } from 'lucide-react';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

export default function HamburgerMenu() {
  const currentRoute = usePathname();

  return (
    <>
      <div className="mobile-hamburger xl:hidden shadow-2xl">
        <div className="flex items-center justify-between gap-5 px-2 py-2">
          <div className="flex items-center gap-5">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:outline-none mb-2">
                <Icon.HamburgerMenu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="overflow-y-scroll max-h-[700px] mt-4 py-5 rounded-none border-0 text-[#8790a6] xl:hidden mobile-menu">
                <Accordion type="single" collapsible className="w-full text-sm px-2 text-[#8790a6]">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='flex gap-2 text-primary'>
                      <span>
                        <Icon.BriefCase />
                      </span>
                      <span>Switch Organization</span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col text-left items-start gap-5">
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
      ${
        currentRoute === '/dashboard' ? 'active-link' : 'non-active-link'
      } flex gap-3 items-center hover:bg-white
  `}
                >
                  <DropdownMenuItem className="flex gap-3 items-center">
                    <Icon.Home />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs font-medium">CUSTOMERS</DropdownMenuLabel>
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
                <DropdownMenuLabel className="text-xs font-medium">BUSINESSES</DropdownMenuLabel>
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
                <DropdownMenuLabel className="text-xs font-medium">SETTINGS</DropdownMenuLabel>
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
            <Link href={'/dashboard'}>
              <Image src="/assets/images/logo.png" alt="lendsqr logo" width={150} height={90} />
            </Link>
          </div>

          <Menu />
        </div>
      </div>
    </>
  );
}
