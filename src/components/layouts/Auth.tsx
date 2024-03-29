import Link from 'next/link';
import Logo from '../ui/Logo';
import Image from 'next/image';

export default function Auth({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth grid grid-cols-12">
      <div className="h-screen hidden xl:block xl:col-span-6 bg-[#FCFCFC]">
        <div className="pt-20 ml-20">
          <Link href={'/'}>
            <Logo />
          </Link>

          <Image
            className="pt-52"
            src={'/assets/images/illustration.png'}
            alt="illustration"
            width={700}
            height={337}
          />
        </div>
      </div>

      <div className="col-span-12 xl:col-span-6">
        <div className="h-full">
          <section className="relative px-3 flex w-full h-full flex-col justify-center justify-items-center">
            <div className="xl:hidden absolute top-0 mt-5">
              <Link href={'/'}>
                <Image src="/assets/images/logo.png" alt="lendsqr logo" width={150} height={90} />
              </Link>
            </div>
            <div className="w-full px-5 lg:px-20 py-10 mt-20">{children}</div>
          </section>
        </div>
      </div>
    </div>
  );
}
