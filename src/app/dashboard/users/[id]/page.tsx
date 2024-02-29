import Tabs from './tabs';
import { notFound } from 'next/navigation';

const getData = async (id: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);
    const data = await res.json();
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default async function User({ params }: any) {
  const data = await getData(params.id);

  if (data === 'Not found') {
    return notFound();
  }
  return <Tabs data={data} />;
}
