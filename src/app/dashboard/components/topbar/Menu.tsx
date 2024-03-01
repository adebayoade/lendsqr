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
        <DropdownMenuTrigger className="flex gap-2 items-center">
          <Image width={48} height={48} alt="profile picture" src={'/assets/images/avatar.png'} />
          <span className="font-medium text-primary">Adedeji</span>
          <Icon.ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4 pr-11 rounded-none border-none text-sm text-[#8790a6] mt-6">
          <div className="flex flex-col gap-5">
            <Link href={`#`} className="flex items-center gap-3 hover:text-primary">
              <Icon.Visibility />
              <span>View Profile</span>
            </Link>
            <Link href={'#'} className="flex items-center gap-3 hover:text-primary">
              <Icon.Preferences />
              <span>Preferences</span>
            </Link>
            <Link href={'#'} className="flex items-center gap-3 hover:text-primary">
              <Icon.Preferences />
              <span>Log out</span>
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
