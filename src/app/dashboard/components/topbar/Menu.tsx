import { Icon } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { LogOutIcon, SettingsIcon, SlidersHorizontal, SlidersHorizontalIcon } from 'lucide-react';

export default function Menu() {
  return (
    <div className="flex items-center gap-4 xl:gap-7">
      <Link className="hidden xl:block text-primary hover:underline" href={'/dashboard/docs'}>
        Docs
      </Link>
      <Link href={'/dashboard/notifications'}>
        <Icon.Bell />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-none flex gap-2 items-center">
          <Image width={48} height={48} alt="profile picture" src={'/assets/images/avatar.png'} />
          <span className="font-medium text-primary">Adebayo</span>
          <Icon.ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4 pr-11 rounded-none border-none text-sm text-[#8790a6] mt-1 xl:mt-6">
          <div className="flex flex-col gap-5">
            <Link href={`#`} className="flex items-center gap-3 hover:text-primary">
              <Icon.Visibility />
              <span>View Profile</span>
            </Link>
            <Link href={'#'} className="flex items-center gap-3 hover:text-primary">
              {/* <Icon.Preferences /> */}
              <SlidersHorizontalIcon size={15} />
              <span>Preferences</span>
            </Link>
            <Link href={'#'} className="flex items-center gap-3 hover:text-primary">
              {/* <Icon.SignOut /> */}
              <LogOutIcon size={15} />
              <span>Log out</span>
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
