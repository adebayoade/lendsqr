'use client';

import { Icon } from '@/components/icons';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'orgName',
    header: 'ORGANIZATION',
  },
  {
    accessorKey: 'userName',
    header: 'USERNAME',
  },
  {
    accessorKey: 'email',
    header: 'EMAIL',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'PHONE NUMBER',
  },
  {
    accessorKey: 'createdAt',
    header: 'DATE JOINED',
    cell: ({ row }) => {
      return <span>{dayjs(row.getValue('createdAt')).format('MMM DD, YYYY HH:MM A')}</span>;
    },
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => {
      const status = ['active', 'blacklisted', 'inactive', 'pending'];
      const randomIndex = Math.floor(Math.random() * status.length);

      return (
        <div className="relative flex items-center justify-between gap-5 min-w-[100px]">
          {status[randomIndex].toLowerCase() === 'active' && (
            <span className="capitalize px-6 py-2 text-green-400 bg-gray-100 rounded-full">
              Active
            </span>
          )}
          {status[randomIndex].toLowerCase() === 'inactive' && (
            <span className="capitalize px-6 py-2 bg-gray-100 rounded-full">Inactive</span>
          )}
          {status[randomIndex].toLowerCase() === 'pending' && (
            <span className="capitalize px-6 py-2 text-yellow-500 bg-yellow-50 rounded-full">
              pending
            </span>
          )}
          {status[randomIndex].toLowerCase() === 'blacklisted' && (
            <span className="capitalize px-6 py-2 text-red-500 bg-red-50 rounded-full">
              blacklisted
            </span>
          )}
          <Action id={row.getValue('id')} />
        </div>
      );
    },
  },
];

const Action = ({ id }: any) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        <Icon.Filter />
      </button>

      {show && (
        <div className="absolute z-10 right-0 mt-40 bg-white p-4 rounded-xl">
          <div className="flex flex-col gap-5">
            <Link
              href={`/dashboard/users/${id}`}
              className="flex items-center gap-5 hover:text-primary"
            >
              <Icon.Visibility />
              <span>View Details</span>
            </Link>
            <Link href={'#'} className="flex items-center gap-5 hover:text-primary">
              <Icon.DeleteUser />
              <span>Blacklist User</span>
            </Link>
            <Link
              href={`#`}
              className="flex items-center gap-5 hover:text-primary"
            >
              <Icon.ActivateUser />
              <span>Activate User</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};