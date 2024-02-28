import Image from 'next/image';

export default function User() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-primary text-2xl font-bold">Users</h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
        <div className="card flex flex-col gap-4">
          <Image alt="users icon" width={40} height={40} src={'/assets/icons/users-overlay.png'} />
          <span>USERS</span>
          <span className="text-2xl font-semibold text-primary">2,453</span>
        </div>
        <div className="card flex flex-col gap-4">
          <Image alt="group icon" width={40} height={40} src={'/assets/icons/group-overlay.png'} />
          <span>ACTIVE USERS</span>
          <span className="text-2xl font-semibold text-primary">2,453</span>
        </div>
        <div className="card flex flex-col gap-4">
          <Image alt="note icon" width={40} height={40} src={'/assets/icons/note-overlay.png'} />

          <span>USERS WITH LOANS</span>
          <span className="text-2xl font-semibold text-primary">12,453</span>
        </div>
        <div className="card flex flex-col gap-4">
          <Image alt="coin icon" width={40} height={40} src={'/assets/icons/coin-overlay.png'} />

          <span>USERS WITH SAVINGS</span>
          <span className="text-2xl font-semibold text-primary">102,453</span>
        </div>
      </div>
    </div>
  );
}
