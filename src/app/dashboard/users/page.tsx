import { Icon } from '@/components/icons';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Users | Empowering the smartest lenders',
};

export default function User() {
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
    </div>
  );
}
