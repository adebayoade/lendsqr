import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <div className="flex flex-col gap-5">
        <Link href={'/login'}>Log in</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
      </div>
    </main>
  );
}
