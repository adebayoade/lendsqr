import Auth from '@/components/layouts/Auth';
import './auth.scss';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <Auth>{children}</Auth>;
}
