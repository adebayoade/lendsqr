import { Icon } from '@/components/icons';
import { DataTable } from '@/components/ui/DataTable';
import { columns } from './columns';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users | Empowering the smartest lenders',
};

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    const data = await res.json();
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default async function User() {
  const data = await getData();

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-primary text-2xl font-bold">Users</h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
        <div className="card flex flex-col gap-4">
          <Icon.UsersOverlay />
          <span>USERS</span>
          <span className="text-2xl font-semibold text-primary">2,453</span>
        </div>
        <div className="card flex flex-col gap-4">
          <Icon.GroupOverlay />
          <span>ACTIVE USERS</span>
          <span className="text-2xl font-semibold text-primary">2,453</span>
        </div>
        <div className="card flex flex-col gap-4">
          <Icon.LoanOverlay />
          <span>USERS WITH LOANS</span>
          <span className="text-2xl font-semibold text-primary">12,453</span>
        </div>
        <div className="card flex flex-col gap-4">
          <Icon.CoinOverlay />
          <span>USERS WITH SAVINGS</span>
          <span className="text-2xl font-semibold text-primary">102,453</span>
        </div>
      </div>

      <div className="">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
