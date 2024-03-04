import Sidebar from '../../app/dashboard/components/sidebar';
import Topbar from '../../app/dashboard/components/topbar';

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard">
      <Topbar />
      <div className="grid grid-cols-1 xl:grid-cols-[283px_1fr] bg-[#FBFBFB]">
        <div className="hidden xl:block">
          <Sidebar />
        </div>

        <div className="px-5 lg:px-12 mt-12 pb-10 h-screen">{children}</div>
      </div>
    </div>
  );
}
