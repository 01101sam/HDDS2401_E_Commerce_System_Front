import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import {AdminOrderProvider} from 'src/context/AdminOrderContext';
import BlankCard from 'src/components/shared/BlankCard';
import {CardContent} from '@mui/material';
import AdminOrderList from "src/views/apps/admin/orders/index.tsx";

const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: 'Admin',
    },
    {
        title: 'Orders',
    },
];


const AdminOrderListing = () => {

    return (
        <AdminOrderProvider>
            <PageContainer title="Manage Orders">
                <Breadcrumb title="Orders" items={BCrumb}/>
                <BlankCard>
                    <CardContent>
                        <AdminOrderList/>
                    </CardContent>
                </BlankCard>
            </PageContainer>
        </AdminOrderProvider>
    );
};
export default AdminOrderListing;
