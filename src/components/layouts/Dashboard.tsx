import Sidebar from '../dashboard/sidebar';
import Topbar from '../dashboard/topbar';
import Logo from '../icons/Logo';

export default function Dashboard({ children }: any) {
  return (
    <div className="h-full">
      <Topbar />
      <div className="grid grid-cols-1 xl:grid-cols-[283px_1fr] h-screen gap-16">
        <Sidebar />
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}
