'use client';

import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PersonalInformation from './tabs/personal-information';
import Documents from './tabs/documents';
import BankDetails from './tabs/bank-details';
import Loans from './tabs/loans';
import Savings from './tabs/savings';
import AppAndSystem from './tabs/app-and-system';
import { Icon } from '@/components/icons';

export default function User() {
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
        return <PersonalInformation />;
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
      <Link className="flex items-center gap-5" href={'/dashboard/users'}>
        <Icon.ArrowLeft />
        <span>Back to Users</span>
      </Link>

      <div className="flex flex-col xl:flex-row justify-between gap-5">
        <h1 className="text-primary text-2xl font-bold">Users Details</h1>
        <div className="flex gap-5">
          <Button size={'lg'} variant={'destructive'}>
            BLACKLIST USER
          </Button>
          <Button size={'lg'} variant="ghost">
            ACTIVATE USER
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <div className="card relative">
          <div className="xl:hidden text-center flex flex-col mb-10 items-center gap-10">
            <div className="flex items-center gap-5">
              <Icon.Avatar />
              <div className="flex flex-col gap-2">
                <span className="text-xl text-primary font-medium">Grace Effiom</span>
                <span className="text-gray-400">LSQFf587G90</span>I
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
              <Icon.Avatar />
              <div className="flex flex-col gap-2">
                <span className="text-xl text-primary font-medium">Grace Effiom</span>
                <span className="text-gray-400">LSQFf587G90</span>
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
                  currentTab === tab.id && 'border-b-2 border-secondary pointer-events-none'
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
