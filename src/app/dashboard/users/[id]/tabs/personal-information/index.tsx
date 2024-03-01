import React from 'react';

export default function PersonalInformation({ data }: any) {
  return (
    <div className="flex flex-col gap-5">
      <div className="border-b border-gray-200 py-7">
        <h2 className="font-medium text-primary mb-5">Personal Information</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">FULL NAME</span>
            <h2 className="font-medium">
              {data?.profile.firstName} {data?.profile.lastName}
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">PHONE NUMBER</span>
            <h2 className="font-medium">{data?.profile.phoneNumber}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">EMAIL ADDRESS</span>
            <h2 className="font-medium">{data?.email}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">BVN</span>
            <h2 className="font-medium">12348583535</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">GENDER</span>
            <h2 className="font-medium">{data?.profile.gender}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">MARITAL STATUS</span>
            <h2 className="font-medium">Single</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">CHILDREN</span>
            <h2 className="font-medium">None</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Type of residence</span>
            <h2 className="font-medium">Parent&apos;s Apartment</h2>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-7">
        <h2 className="font-medium text-primary mb-5">Education and Employment</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">level of education</span>
            <h2 className="font-medium">{data?.education.level}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">employment status</span>
            <h2 className="font-medium">{data?.education.employmentStatus}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">sector of employment</span>
            <h2 className="font-medium">{data?.education.sector}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Duration of employment</span>
            <h2 className="font-medium">{data?.education.duration}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Office Email</span>
            <h2 className="font-medium">{data?.education.officeEmail}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Monthly income</span>
            <h2 className="font-medium">{`₦${data?.education.monthlyIncome[0]} - ₦${data?.education.monthlyIncome[1]}`}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">loan repayment</span>
            <h2 className="font-medium">{data?.education.loanRepayment}</h2>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-7">
        <h2 className="font-medium text-primary mb-5">Socials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Twitter</span>
            <h2 className="font-medium">{data?.socials.twitter}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Facebook</span>
            <h2 className="font-medium">{data?.socials.facebook}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Instagram</span>
            <h2 className="font-medium">{data?.socials.instagram}</h2>
          </div>
        </div>
      </div>

      <div className="py-7">
        <h2 className="font-medium text-primary mb-5">Guarantor</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">full Name</span>
            <h2 className="font-medium">
              {data?.guarantor.firstName} {data?.guarantor.lastName}
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Phone Number</span>
            <h2 className="font-medium">{data?.guarantor.phoneNumber}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Email Address</span>
            <h2 className="font-medium">{data?.email}</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 uppercase">Relationship</span>
            <h2 className="font-medium">Sister</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
