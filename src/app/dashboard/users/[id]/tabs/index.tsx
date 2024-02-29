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
                <span className="text-xl text-primary font-medium">
                  {data?.profile.firstName} {data?.profile.lastName}
                </span>
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
                <span className="text-xl text-primary font-medium">
                  {data?.profile.firstName} {data?.profile.lastName}
                </span>
                <svg
                  width="56"
                  height="16"
                  viewBox="0 0 56 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z"
                    fill="#E9B200"
                  />
                  <g clipPath="url(#clip0_5530_0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.9844 0.959992C27.8519 0.966867 27.7369 1.05437 27.6956 1.18062L26.0894 5.99998H20.9451V6.0006C20.8069 6.0006 20.6844 6.08935 20.642 6.2206C20.5988 6.35185 20.6451 6.49561 20.7557 6.5781L24.9344 9.63379L23.3282 14.6213V14.6207C23.2851 14.7532 23.3326 14.8976 23.4451 14.9788C23.5576 15.0607 23.7094 15.0601 23.8213 14.9782L28 11.9225L32.1788 14.9782C32.2906 15.0601 32.4425 15.0607 32.555 14.9788C32.6675 14.8976 32.715 14.7532 32.6719 14.6207L31.0656 9.63316L35.2444 6.57748V6.5781C35.355 6.49561 35.4012 6.35185 35.3581 6.2206C35.3156 6.08935 35.1931 6.0006 35.055 6.0006H29.9107L28.3044 1.18124V1.18062C28.2601 1.04374 28.1288 0.953112 27.9844 0.959992H27.9844ZM28 2.29374L29.3756 6.41998V6.4206C29.4181 6.55185 29.5413 6.64122 29.68 6.6406H34.0738L30.4987 9.255V9.25563C30.3875 9.33688 30.3406 9.48062 30.3831 9.61251L31.7587 13.8807L28.1893 11.2712H28.1887C28.0762 11.1887 27.9237 11.1887 27.8112 11.2712L24.2417 13.8807L25.6174 9.61251H25.6167C25.6592 9.48063 25.6124 9.33687 25.5011 9.25563L21.9261 6.64123H26.3198V6.6406C26.4586 6.64123 26.5817 6.55185 26.6242 6.4206L27.9998 2.29436L28 2.29374Z"
                      fill="#E9B200"
                    />
                  </g>
                  <g clipPath="url(#clip1_5530_0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M47.9844 0.959992C47.8519 0.966867 47.7369 1.05437 47.6956 1.18062L46.0894 5.99998H40.9451V6.0006C40.8069 6.0006 40.6844 6.08935 40.642 6.2206C40.5988 6.35185 40.6451 6.49561 40.7557 6.5781L44.9344 9.63379L43.3282 14.6213V14.6207C43.2851 14.7532 43.3326 14.8976 43.4451 14.9788C43.5576 15.0607 43.7094 15.0601 43.8213 14.9782L48 11.9225L52.1788 14.9782C52.2906 15.0601 52.4425 15.0607 52.555 14.9788C52.6675 14.8976 52.715 14.7532 52.6719 14.6207L51.0656 9.63316L55.2444 6.57748V6.5781C55.355 6.49561 55.4012 6.35185 55.3581 6.2206C55.3156 6.08935 55.1931 6.0006 55.055 6.0006H49.9107L48.3044 1.18124V1.18062C48.2601 1.04374 48.1288 0.953112 47.9844 0.959992H47.9844ZM48 2.29374L49.3756 6.41998V6.4206C49.4181 6.55185 49.5413 6.64122 49.68 6.6406H54.0738L50.4987 9.255V9.25563C50.3875 9.33688 50.3406 9.48062 50.3831 9.61251L51.7587 13.8807L48.1893 11.2712H48.1887C48.0762 11.1887 47.9237 11.1887 47.8112 11.2712L44.2417 13.8807L45.6174 9.61251H45.6167C45.6592 9.48063 45.6124 9.33687 45.5011 9.25563L41.9261 6.64123H46.3198V6.6406C46.4586 6.64123 46.5817 6.55185 46.6242 6.4206L47.9998 2.29436L48 2.29374Z"
                      fill="#E9B200"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5530_0">
                      <rect width="16" height="16" fill="white" transform="translate(20)" />
                    </clipPath>
                    <clipPath id="clip1_5530_0">
                      <rect width="16" height="16" fill="white" transform="translate(40)" />
                    </clipPath>
                  </defs>
                </svg>
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
