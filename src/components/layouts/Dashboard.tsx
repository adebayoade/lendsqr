import Sidebar from '../../app/dashboard/components/sidebar';
import Topbar from '../../app/dashboard/components/topbar';
import Logo from '../ui/Logo';

export default function Dashboard({ children }: any) {
  return (
    <div className="">
      <Topbar />
      <div className="grid grid-cols-1 xl:grid-cols-[283px_1fr] bg-[#FBFBFB] h-screen">
        <div className="hidden xl:block">
          <Sidebar />
        </div>

        <div className="px-5 lg:px-12 mt-16 pb-10">{children}</div>
      </div>
    </div>
  );
}
