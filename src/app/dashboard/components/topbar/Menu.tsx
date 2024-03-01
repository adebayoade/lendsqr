import { Icon } from '@/components/icons';
import { ArrowDown, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className="flex items-center gap-4 xl:gap-7">
      <Link className="hidden xl:block" href={'#'}>
        Docs
      </Link>
      <Link href={'#'}>
        <Icon.Bell />
      </Link>
      <button className="flex gap-2 items-center">
        <Image width={48} height={48} alt="profile picture" src={'/assets/images/avatar.png'} />
        <span>Adedeji</span>
        <Icon.ChevronDown />
      </button>
    </div>
  );
}
