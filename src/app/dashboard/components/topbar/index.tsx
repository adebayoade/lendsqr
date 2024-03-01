'use client';

import Search from './Search';
import Menu from './Menu';
import { Icon } from '@/components/icons';
import HamburgerMenu from '../HamburgerMenu';

export default function Topbar() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden xl:flex justify-between gap-5 px-5 py-7 shadow-2xl items-center">
        <div className="flex gap-40 items-center">
          <Icon.Logo />
          <Search />
        </div>
        <Menu />
      </div>

      {/* Mobile */}
      <HamburgerMenu />
    </>
  );
}
