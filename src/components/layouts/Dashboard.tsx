import Sidebar from '../dashboard/sidebar';
import Topbar from '../dashboard/topbar';
import Logo from '../ui/Logo';

export default function Dashboard({ children }: any) {
  return (
    <div className="h-screen overflow-y-auto">
      <Topbar />
      <div className="grid grid-cols-1 xl:grid-cols-[283px_1fr] bg-[#FBFBFB]">
        <div className="hidden xl:block">
          <Sidebar />
        </div>

        <div className="px-12 mt-16">{children}</div>
      </div>
    </div>
  );
}
