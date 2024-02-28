import React from 'react';

export default function PersonalInformation() {
  return (
    <div className="flex flex-col gap-5">
      <div className="border-b border-gray-200 py-7">
        <h2 className="font-medium text-primary mb-5">Personal Information</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">FULL NAME</span>
            <h2>Grace Effiom</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">PHONE NUMBER</span>
            <h2>07060780922</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">EMAIL ADDRESS</span>
            <h2>grace@gmail.com</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">BVN</span>
            <h2>12348583535</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">GENDER</span>
            <h2>Female</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">MARITAL STATUS</span>
            <h2>Single</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">CHILDREN</span>
            <h2>None</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Type of residence</span>
            <h2>Parent&apos;s Apartment</h2>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-7">
        <h2 className="font-medium text-primary mb-5">Education and Employment</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">level of education</span>
            <h2>B.Sc</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">employment status</span>
            <h2>Employed</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">sector of employment</span>
            <h2>FinTech</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Duration of employment</span>
            <h2>2 years</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Monthly income</span>
            <h2>₦200,000.00- ₦400,000.00</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">loan repayment</span>
            <h2>40,000</h2>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-7">
        <h2 className="font-medium text-primary mb-5">Socials</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Twitter</span>
            <h2>@grace_effiom</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Facebook</span>
            <h2>Grace Effiom</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Instagram</span>
            <h2>@grace_effiom</h2>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-7">
        <h2 className="font-medium text-primary mb-5">Guarantor</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">full Name</span>
            <h2>Debby Ogana</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Phone Number</span>
            <h2>07060780922</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Email Address</span>
            <h2>debby@gmail.com</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Relationship</span>
            <h2>Sister</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
