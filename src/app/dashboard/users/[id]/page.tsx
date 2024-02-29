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
import Tabs from './tabs';

const getData = async (id: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);
    const data = await res.json();
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default async function User({ params }: any) {
  const data = await getData(params.id);
  console.log(data);

  return <Tabs data={data} />;
}
