import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import InvoiceList from 'src/components/apps/invoice/Invoice-list/index';
import { InvoiceProvider } from 'src/context/InvoiceContext/index';
import BlankCard from 'src/components/shared/BlankCard';
import { CardContent } from '@mui/material';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Informatiom List',
  },
];

const InvoiceListing = () => {
  return (
    <InvoiceProvider>
      <PageContainer title="Informatiom List" description="this is Informatiom List">
        <Breadcrumb title="Informatiom List" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <InvoiceList />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </InvoiceProvider>
  );
};
export default InvoiceListing;
