import Logo from '@/components/icons/Logo';
import React from 'react';
import Search from './Search';
import Menu from './Menu';

export default function Topbar() {
  return (
    <div className="flex justify-between gap-5 px-5 py-7 shadow items-center">
      <div className="flex gap-32 items-center">
        <Logo />
        <Search />
      </div>

      <Menu />
    </div>
  );
}
