import Link from 'next/link';
import Logo from '../icons/Logo';
import Image from 'next/image';

export default function Auth({ children }: any) {
  return (
    <div className="auth grid grid-cols-12">
      <div className="wrapper__one0 h-svh hidden xl:block xl:col-span-6">
        <div className="pt-10 ml-20">
          <Link href={'/'}>
            <Logo />
          </Link>

          <Image
            className="pt-52"
            src={'/illustration.png'}
            alt="illustration"
            width={700}
            height={337}
          />
        </div>
      </div>

      <div className="wrapper__two border-l border-[#545F7D26] col-span-12 xl:col-span-6">
        <div className="h-full">
          <section className="relative px-3 flex w-full h-full flex-col justify-center justify-items-center">
            <div className="xl:hidden absolute top-0 mt-5">
              <Link href={'/'}>
                <Logo />
              </Link>
            </div>
            <div className="w-full px-5 lg:px-20 py-10 mt-20">{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
}
