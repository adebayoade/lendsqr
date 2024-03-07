import Drawer from 'react-modern-drawer';
import { useState } from 'react';
import 'react-modern-drawer/dist/index.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Icon } from '@/components/icons';
import { GlobeIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import {
  BusinessesMenuNavigation,
  CustomersMenuNavigation,
  SettingsMenuNavigation,
} from '../constant';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import 'react-modern-drawer/dist/index.css';

export default function MobileDrawer() {
  const currentRoute = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <div className="flex gap-5 items-center">
        <button style={{ marginBottom: '0.5rem' }} onClick={toggleDrawer}>
          <Icon.HamburgerMenu />
        </button>
        <Link href={'/dashboard'}>
          <Image src="/assets/images/logo.png" alt="lendsqr logo" width={150} height={90} />
        </Link>
      </div>

      <Drawer
        lockBackgroundScroll
        zIndex={100}
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="text-[#8790a6] xl:hidden mobile-menu text-sm shadow overflow-auto"
      >
        <div
          style={{ overflow: 'auto', height: '92%', paddingTop: '1.25rem' }}
          className="flex flex-col gap-4 px-3"
        >
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex gap-2 text-primary">
                <span>
                  <Icon.BriefCase />
                </span>
                <span>Switch Organization</span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col text-left items-start gap-2">
                <button className="hover:text-primary flex gap-3 items-center text-sm">
                  <GlobeIcon size={15} />
                  <span>Organization 1</span>
                </button>
                <button className="hover:text-primary flex gap-3 items-center text-sm">
                  <GlobeIcon size={15} />
                  <span>Organization 2</span>
                </button>
                <button className="hover:text-primary flex gap-3 items-center text-sm">
                  <GlobeIcon size={15} />
                  <span>Organization 3</span>
                </button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col gap-2">
            <Link
              href={'/dashboard'}
              className={`
      ${
        currentRoute === '/dashboard' ? 'active-link' : 'non-active-link'
      } flex gap-3 items-center hover:bg-white
  `}
            >
              <div className="flex gap-3 items-center">
                <Icon.Home />
                <span>Dashboard</span>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">CUSTOMERS</span>
            {CustomersMenuNavigation.map(({ route, title, icon }) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                key={title}
                href={route}
                className={`
      ${currentRoute === route ? 'active-link' : 'non-active-link'} link`}
              >
                <div className="flex gap-3 items-center">
                  <span>{icon}</span>
                  <span>{title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">BUSINESSES</span>
            {BusinessesMenuNavigation.map(({ route, title, icon }) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                key={title}
                href={route}
                className={`
                    ${currentRoute === route ? 'active-link' : 'non-active-link'} link`}
              >
                <div className="flex gap-3 items-center">
                  <span>{icon}</span>
                  <span>{title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">SETTINGS</span>
            {SettingsMenuNavigation.map(({ route, title, icon }) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                key={title}
                href={route}
                className={`
                    ${currentRoute === route ? 'active-link' : 'non-active-link'} link`}
              >
                <div className="flex gap-3 items-center">
                  <span>{icon}</span>
                  <span>{title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 border-t flex flex-col pt-5 gap-5 hover:text-primary">
            <Link href={'#'} className="flex gap-3 items-center">
              <Icon.SignOut />
              <span>Logout</span>
            </Link>

            <span className="text-xs font-medium">v1.2.0</span>
          </div>
        </div>
      </Drawer>
    </>
  );
}
