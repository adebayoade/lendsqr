'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Icon } from '@/components/icons';
import PersonalInformation from './personal-information';
import Documents from './documents';
import BankDetails from './bank-details';
import Loans from './loans';
import Savings from './savings';
import AppAndSystem from './app-and-system';

export default function Tabs({ data }: any) {
  const [currentTab, setCurrentTab] = useState(1);
  const tabs = [
    {
      name: 'General Details',
      id: 1,
    },
    {
      name: 'Documents',
      id: 2,
    },
    {
      name: 'Bank Details',
      id: 3,
    },
    {
      name: 'Loans',
      id: 4,
    },
    {
      name: 'Savings',
      id: 5,
    },
    {
      name: 'App and System',
      id: 6,
    },
  ];

  const displayTab = () => {
    switch (currentTab) {
      case 1:
        return <PersonalInformation data={data} />;
      case 2:
        return <Documents />;
      case 3:
        return <BankDetails />;
      case 4:
        return <Loans />;
      case 5:
        return <Savings />;
      case 6:
        return <AppAndSystem />;
    }
  };

  return (
    <div className="flex flex-col gap-7">
      <Link className="flex items-center gap-5 hover:text-primary" href={'/dashboard/users'}>
        <Icon.ArrowLeft />
        <span>Back to Users</span>
      </Link>

      <div className="mt-5 flex flex-col xl:flex-row justify-between gap-5">
        <h1 className="text-primary text-2xl font-bold">Users Details</h1>
        <div className="flex flex-col xl:flex-row gap-5">
          <Button size={'sm'} variant={'destructive'}>
            BLACKLIST USER
          </Button>
          <Button size={'sm'} variant="ghost">
            ACTIVATE USER
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <div className="card relative">
          <div className="xl:hidden text-center flex flex-col mb-10 items-center gap-10">
            <div className="flex flex-col xl:flex-row items-center gap-5">
              {data?.profile?.avatar ? (
                <Image
                  className="rounded-full"
                  src={data?.profile?.avatar}
                  alt=""
                  width={100}
                  height={100}
                />
              ) : (
                <Icon.Avatar />
              )}
              <div className="flex flex-col items-center gap-2">
                <span className="text-xl text-primary font-medium">
                  {data?.profile.firstName} {data?.profile.lastName}
                </span>
                <Icon.Stars />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm text-primary font-medium">User&apos;s Tiers</span>
              <span className="text-gray-400">LSQFf587G90</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xl text-primary font-medium">₦200,000.00</span>
              <span className="text-primary">9912345678/Providus Bank</span>
            </div>
          </div>
          <div className="hidden xl:flex mb-10 items-center gap-10">
            <div className="flex items-center gap-5">
              {data?.profile?.avatar ? (
                <Image
                  className="rounded-full"
                  src={data?.profile?.avatar}
                  alt=""
                  width={100}
                  height={100}
                />
              ) : (
                <Icon.Avatar />
              )}
              <div className="flex flex-col gap-2">
                <span className="text-xl text-primary font-medium">
                  {data?.profile.firstName} {data?.profile.lastName}
                </span>
                <Icon.Stars />
              </div>
            </div>
            <Icon.Pipe />
            <div className="flex flex-col gap-2">
              <span className="text-sm text-primary font-medium">User&apos;s Tiers</span>
              <span className="text-gray-400">LSQFf587G90</span>
            </div>
            <Icon.Pipe />
            <div className="flex flex-col gap-2">
              <span className="text-xl text-primary font-medium">₦200,000.00</span>
              <span className="text-primary">9912345678/Providus Bank</span>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:absolute bottom-0 gap-5 xl:gap-32">
            {tabs.map(tab => (
              <button
                className={`${
                  currentTab === tab.id &&
                  'border-b-2 border-secondary text-secondary pointer-events-none'
                } pb-2`}
                onClick={() => setCurrentTab(tab.id)}
                key={tab.id}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="card">{displayTab()}</div>
      </div>
    </div>
  );
}
