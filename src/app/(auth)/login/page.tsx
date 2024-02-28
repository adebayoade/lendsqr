import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';
import LoginForm from './components/LoginForm';

export const metadata: Metadata = {
  title: 'Login | Empowering the smartest lenders',
};

export default function Login() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-primary text-[40px] font-extrabold">Welcome!</h1>
        <span className="text-xl text-primary">Enter details to login.</span>
        <LoginForm />
      </div>
    </>
  );
}
