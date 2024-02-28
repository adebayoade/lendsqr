import Image from 'next/image';
import { Icon } from '../icons';

export function NotFound() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image src={'/assets/images/illustration.png'} width={400} height={400} alt="not found" />
      <h2 className='text-4xl text-primary font-semibold'>404</h2>
      <span>Page not found!</span>
    </div>
  );
}
