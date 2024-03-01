import Auth from '@/components/layouts/Auth';
import './auth.scss';

export default function AuthLayout({ children }: any) {
  return <Auth>{children}</Auth>;
}
