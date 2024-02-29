'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <form className="max-w-[700px] w-full flex flex-col gap-7 mt-10">
      <div className="input-wrapper flex flex-col gap-2">
        <input type="email" placeholder="Email" name="email" />
      </div>

      <div className="relative">
        <input
          className="w-full"
          type={show ? 'text' : 'password'}
          placeholder="Password"
          name="password"
        />

        <button
          className="cursor-pointer w-[30px] absolute right-0 top-4 mr-5 text-secondary font-bold text-sm"
          onClick={handleClick}
        >
          {show ? <span>SHOW</span> : <span>HIDE</span>}
        </button>
      </div>
      <Link href={'#'} className="text-secondary text-sm font-bold">
        FORGOT PASSWORD?
      </Link>

      <Button size={'lg'} variant="secondary" className="text-white">
        LOG IN
      </Button>
    </form>
  );
}
