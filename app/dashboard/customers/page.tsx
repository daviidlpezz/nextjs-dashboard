import Table from '@/app/ui/customers/table';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await fetchFilteredCustomers('');
  return <CustomersTable customers={customers} />;
}
