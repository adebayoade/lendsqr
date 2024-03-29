import Dashboard from '@/components/layouts/Dashboard';
import { Metadata } from 'next';
import './dashboard.scss';

export const metadata: Metadata = {
  title: 'Dashboard | Lendsqr | Empowering the smartest lenders',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <Dashboard>{children}</Dashboard>;
}
