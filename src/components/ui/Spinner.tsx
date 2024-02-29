import Image from 'next/image';

export default function Spinner() {
  return (
    <div className="spinner h-screen w-screen flex items-center justify-center">
      <Image width={250} height={100} alt="loading" src="/images/spinner-transparent.gif" />
    </div>
  );
}
