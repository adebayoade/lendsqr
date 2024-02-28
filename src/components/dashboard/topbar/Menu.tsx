import { ArrowDown, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className="flex items-center gap-7">
      <Link href={'#'}>Docs</Link>
      <Link href={'#'}>
        <Image alt="bell icon" width={26} height={26} src={'/assets/icons/bell.png'} />
      </Link>
      <button className="flex gap-2 items-center">
        <Image width={48} height={48} alt="profile picture" src={'/assets/images/avatar.png'} />
        <span>Adedeji</span>
        <Image width={7} height={4} alt="chevron icon" src={'/assets/icons/chevron-down.svg'} />
      </button>
    </div>
  );
}
