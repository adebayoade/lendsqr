'use client';

import { Icon } from '@/components/icons';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const currentRoute = usePathname();

  return (
    <div className="w-[283px] h-screen overflow-y-auto py-10 shadow bg-white">
      <div className="flex flex-col gap-5">
        <button
          className={`non-active-link text-primary flex items-center gap-3
    `}
        >
          <Icon.BriefCase />
          <span>Switch Organization</span>
          <ChevronDown />
        </button>
        <div className="flex flex-col">
          <span className="px-6 text-sm mb-4 text-gray-500">CUSTOMERS</span>
          <Link
            href={'/dashboard'}
            className={`
        ${currentRoute === '/dashboard' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.Home />
            <span>Dashboard</span>
          </Link>
          <Link
            href={'/dashboard/users'}
            className={`
        ${currentRoute === '/dashboard/users' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.UserFriends />
            <span>Users</span>
          </Link>
          <Link
            href={'/dashboard/guarantors'}
            className={`
        ${currentRoute === '/dashboard/guarantors' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.Users />
            <span>Guarantors</span>
          </Link>
          <Link
            href={'/dashboard/loans'}
            className={`
        ${currentRoute === '/dashboard/loans' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.Loans />
            <span>Loans</span>
          </Link>
          <Link
            href={'/dashboard/loans'}
            className={`
        ${currentRoute === '/dashboard/loans' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.HandShake />
            <span>Decision Models</span>
          </Link>
          <Link
            href={'/dashboard/savings'}
            className={`
        ${currentRoute === '/dashboard/savings' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.Piggy />
            <span>Savings</span>
          </Link>
          <Link
            href={'/dashboard/loan-request'}
            className={`
        ${currentRoute === '/dashboard/loan-request' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.LoanRequest />
            <span>Loan Request</span>
          </Link>
          <Link
            href={'/dashboard/whitelist'}
            className={`
        ${currentRoute === '/dashboard/whitelist' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.UserCheck />
            <span>Whitelist</span>
          </Link>
          <Link
            href={'/dashboard/karma'}
            className={`
        ${currentRoute === '/dashboard/karma' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.UserTimes />
            <span>Karma</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="px-6 text-sm mb-4 text-gray-500">BUSINESSES</span>
          <Link
            href={'/dashboard/organization'}
            className={`
        ${currentRoute === '/dashboard/organization' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.Home />
            <span>Organization</span>
          </Link>
          <Link
            href={'/dashboard/loan-products'}
            className={`
        ${
          currentRoute === '/dashboard/loan-products' ? 'active-link' : 'non-active-link'
        } flex gap-3 items-center
    `}
          >
            <Icon.UserFriends />
            <span>Loan Products</span>
          </Link>
          <Link
            href={'/dashboard/savings-products'}
            className={`
        ${
          currentRoute === '/dashboard/savings-products' ? 'active-link' : 'non-active-link'
        } flex gap-3 items-center
    `}
          >
            <Icon.Users />
            <span>Savings Products</span>
          </Link>
          <Link
            href={'/dashboard/fees-and-charges'}
            className={`
        ${
          currentRoute === '/dashboard/fees-and-charges' ? 'active-link' : 'non-active-link'
        } flex gap-3 items-center
    `}
          >
            <Icon.Loans />
            <span>Fees and Charges</span>
          </Link>
          <Link
            href={'/dashboard/transactions'}
            className={`
        ${currentRoute === '/dashboard/transactions' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.HandShake />
            <span>Transactions</span>
          </Link>
          <Link
            href={'/dashboard/services'}
            className={`
        ${currentRoute === '/dashboard/services' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.Piggy />
            <span>Services</span>
          </Link>
          <Link
            href={'/dashboard/service-account'}
            className={`
        ${
          currentRoute === '/dashboard/service-account' ? 'active-link' : 'non-active-link'
        } flex gap-3 items-center
    `}
          >
            <Icon.LoanRequest />
            <span>Service Account</span>
          </Link>
          <Link
            href={'/dashboard/settlements'}
            className={`
        ${currentRoute === '/dashboard/settlements' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.UserCheck />
            <span>Settlements</span>
          </Link>
          <Link
            href={'/dashboard/reports'}
            className={`
        ${currentRoute === '/dashboard/reports' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.UserTimes />
            <span>Reports</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="px-6 text-sm mb-4 text-gray-500">SETTINGS</span>
          <Link
            href={'/dashboard/preferences'}
            className={`
        ${currentRoute === '/dashboard/preferences' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.Home />
            <span>Preferences</span>
          </Link>
          <Link
            href={'/dashboard/fees-and-pricing'}
            className={`
        ${
          currentRoute === '/dashboard/fees-and-pricing' ? 'active-link' : 'non-active-link'
        } flex gap-3 items-center
    `}
          >
            <Icon.UserFriends />
            <span>Fees and Pricing</span>
          </Link>
          <Link
            href={'/dashboard/audit-logs'}
            className={`
        ${currentRoute === '/dashboard/audit-logs' ? 'active-link' : 'non-active-link'} flex gap-3 items-center
    `}
          >
            <Icon.Users />
            <span>Audit Logs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
