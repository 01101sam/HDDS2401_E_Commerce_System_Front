import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import {OrderProvider} from 'src/context/OrderContext';
import BlankCard from 'src/components/shared/BlankCard';
import {CardContent, TableBody, Table, Box, TableHead, TableRow, TableCell, Typography, Button} from '@mui/material';
import {useEffect, useState} from "react";
import axios from "src/utils/axios.ts";


const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: 'Admin',
    },
    {
        title: 'Users',
    },
];

const fetchUsers = async () => {
    try {
        const response = await axios.get("/api/users");
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }

    return [];
}

const UserListing = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then((data) => setUsers(data));
    }, []);

    async function deleteUser(id: string) {
        try {
            await axios.delete(`/api/users/${id}`);
            setUsers((prevUsers) => prevUsers.filter((user: any) => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    return (
        <OrderProvider>
            <PageContainer title="Users">
                <Breadcrumb title="Users" items={BCrumb}/>
                <BlankCard>
                    <CardContent>
                        <Box sx={{overflowX: "auto"}}>
                            {users.length > 0 ? (
                                <Table sx={{whiteSpace: {xs: "nowrap", md: "unset"}}}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant="h6" fontSize="14px">
                                                    Name
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="h6" fontSize="14px">
                                                    Email
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="h6" fontSize="14px">
                                                    Roles
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="h6" fontSize="14px">
                                                    Actions
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {users.map((user: any) => (
                                            <TableRow key={user.id}>
                                                <TableCell>
                                                    <Typography variant="h6" fontSize="14px">
                                                        {user.first_name + (user.last_name ? ' ' + user.last_name : '')}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" fontSize="14px">
                                                        {user.email}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography fontSize="14px">{user.roles.join(", ")}</Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography fontSize="14px">
                                                        <Button variant="contained" onClick={() => deleteUser(user.id)} fullWidth>
                                                            Delete
                                                        </Button>
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            ) : <p>No users found</p>}
                        </Box>
                    </CardContent>
                </BlankCard>
            </PageContainer>
        </OrderProvider>
    );
};
export default UserListing;
