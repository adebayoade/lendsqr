import { Button } from '@/components/ui/button';
import Tabs from './tabs';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/icons';
import Link from 'next/link';

const getData = async (id: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);
    const data = await res.json();
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const generateMetadata = async ({ params }: any) => {
  const data = await getData(params.id);
  return {
    title: `${data?.profile.firstName} ${data?.profile.lastName} | Lendsqr`,
  };
};

export default async function User({ params }: any) {
  const data = await getData(params.id);

  if (data === 'Not found') {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-7">
      <Link className="flex items-center gap-5 hover:text-primary" href={'/dashboard/users'}>
        <Icon.ArrowLeft />
        <span>Back to Users</span>
      </Link>

      <div className="mt-5 flex flex-col xl:flex-row justify-between gap-5">
        <h1 className="text-primary text-2xl font-semibold">Users Details</h1>
        <div className="flex flex-col xl:flex-row gap-5">
          <Button size={'sm'} variant={'destructive'}>
            BLACKLIST USER
          </Button>
          <Button size={'sm'} variant="ghost">
            ACTIVATE USER
          </Button>
        </div>
      </div>

      <Tabs data={data} />
    </div>
  );
}
