import Logo from '@/components/ui/Logo';

import Search from './Search';
import Menu from './Menu';

export default function Topbar() {
  return (
    <div className="flex justify-between gap-5 px-5 py-7 shadow-xl items-center">
      <div className="flex gap-40 items-center">
        <Logo />
        <Search />
      </div>

      <Menu />
    </div>
  );
}
