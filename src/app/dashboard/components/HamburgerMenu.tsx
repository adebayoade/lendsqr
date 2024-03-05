'use client';

import MobileDrawer from './MobileDrawer';
import Menu from './topbar/Menu';

export default function HamburgerMenu() {
  return (
    <>
      <div className="mobile-hamburger xl:hidden shadow-2xl">
        <div className="flex items-center justify-between gap-5 px-4 py-2">
          <MobileDrawer />
          <Menu />
        </div>
      </div>
    </>
  );
}
