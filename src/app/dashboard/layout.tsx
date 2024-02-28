import Dashboard from '@/components/layouts/Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard | Lendsqr | Empowering the smartest lenders',
};

export default function DashboardLayout({ children }: any) {
  return <Dashboard>{children}</Dashboard>;
}
