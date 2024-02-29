import Logo from '@/components/ui/Logo';

import Search from './Search';
import Menu from './Menu';
import { Icon } from '@/components/icons';
import Sidebar from '../sidebar';

export default function Topbar() {
  return (
    <>
      <div className="hidden xl:flex justify-between gap-5 px-5 py-7 shadow-2xl items-center">
        <div className="flex gap-40 items-center">
          <Logo />
          <Search />
        </div>
        <Menu />
      </div>

      <div className="xl:hidden">
        <div className="flex items-center justify-between gap-5 px-2 py-2">
          <div className='flex items-center'>
            <Icon.HamburgerMenu />
            <Logo />
          </div>

          <Menu />
        </div>
      </div>
    </>
  );
}
