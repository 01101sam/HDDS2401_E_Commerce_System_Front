import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import OrderList from 'src/components/apps/orders/list/index';
import { OrderProvider } from 'src/context/OrderContext';
import BlankCard from 'src/components/shared/BlankCard';
import { CardContent } from '@mui/material';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Orders',
  },
];

const InvoiceListing = () => {
  return (
    <OrderProvider>
      <PageContainer title="Orders">
        <Breadcrumb title="Orders" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <OrderList />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </OrderProvider>
  );
};
export default InvoiceListing;
