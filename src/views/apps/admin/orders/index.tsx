import {useContext, useState} from "react";
import {AdminOrderContext} from "src/context/AdminOrderContext";
import {
    Box, Button,
    Chip,
    Grid,
    InputAdornment,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import {IconListDetails, IconSearch, IconShoppingBag, IconSortAscending, IconTruck,} from "@tabler/icons-react";
import {Order} from "src/types/apps/order.ts";

enum ShippingCarrier {
    assign_pending = "Assign Pending",
    manual = "Manual",
    sf_express = "SF Express",
    dhl = "DHL",
    kerry_logistics = "Kerry Logistics",
    mechk = "Morning Express",
}

function AdminOrderList() {
    let {orders}: {
        orders?: Order[];
    } = useContext(AdminOrderContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    if (!orders) orders = [];

    // Handle status filter change
    const handleClick = (status: string) => {
        setActiveTab(status);
    };

    // Filter orders based on search term
    const filteredOrders = orders.filter(
        order => {
            if (activeTab === "All") return true;

            switch (order.status) {
                case "pending_payment":
                case "processing":
                    return activeTab === "Pending";
                case "delivering":
                    return activeTab === "Delivered";
                case "completed":
                    return activeTab === "Shipped";
                case "cancelled":
                    return activeTab === "Cancelled";
            }
        }
    );

    // Calculate the counts for different statuses
    const Shipped = orders.filter(
        (t: { status: string }) => t.status === "completed"
    ).length;
    const Delivered = orders.filter(
        (t: { status: string }) => t.status === "delivering"
    ).length;
    const Pending = orders.filter(
        (t: { status: string }) => ["pending_payment", "processing"].includes(t.status)
    ).length;

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={3}>
                    <Box bgcolor="primary.light" p={3} onClick={() => handleClick("All")} sx={{cursor: "pointer"}}>
                        <Stack direction="row" gap={2} alignItems="center">
                            <Box
                                width={38}
                                height={38}
                                bgcolor="primary.main"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    color="primary.contrastText"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <IconListDetails width={22}/>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>Total</Typography>
                                <Typography fontWeight={500}>
                                    {orders.length} Orders
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Box bgcolor="secondary.light" p={3} onClick={() => handleClick("Shipped")}
                         sx={{cursor: "pointer"}}>
                        <Stack direction="row" gap={2} alignItems="center">
                            <Box
                                width={38}
                                height={38}
                                bgcolor="secondary.main"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    color="primary.contrastText"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <IconShoppingBag width={22}/>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>Shipped</Typography>
                                <Typography fontWeight={500}>{Shipped} Orders</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Box bgcolor="success.light" p={3} onClick={() => handleClick("Delivered")}
                         sx={{cursor: "pointer"}}>
                        <Stack direction="row" gap={2} alignItems="center">
                            <Box
                                width={38}
                                height={38}
                                bgcolor="success.main"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    color="primary.contrastText"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <IconTruck width={22}/>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>Delivered</Typography>
                                <Typography fontWeight={500}>{Delivered} Orders</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Box bgcolor="warning.light" p={3} onClick={() => handleClick("Pending")} sx={{cursor: "pointer"}}>
                        <Stack direction="row" gap={2} alignItems="center">
                            <Box
                                width={38}
                                height={38}
                                bgcolor="warning.main"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography
                                    color="primary.contrastText"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <IconSortAscending width={22}/>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>Pending</Typography>
                                <Typography fontWeight={500}>{Pending} Orders</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>

            <Stack
                mt={3}
                justifyContent="space-between"
                direction={{xs: "column", sm: "row"}}
                spacing={{xs: 1, sm: 2, md: 4}}
            >
                <TextField
                    id="search"
                    type="text"
                    size="small"
                    variant="outlined"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconSearch size={"16"}/>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Box sx={{overflowX: "auto"}}>
                <Table sx={{whiteSpace: {xs: "nowrap", md: "unset"}}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h6" fontSize="14px">
                                    ID
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" fontSize="14px">
                                    User Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" fontSize="14px">
                                    Address
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" fontSize="14px">
                                    Shipping Carrier
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" fontSize="14px">
                                    Total Cost
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" fontSize="14px">
                                    Status
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
                        {filteredOrders.map(
                            (order: Order) => {
                                let orderStatus: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' = "default";
                                switch (order.status) {
                                    case "pending_payment":
                                        orderStatus = "warning";
                                        break;
                                    case "processing":
                                        orderStatus = "default";
                                        break;
                                    case "delivering":
                                        orderStatus = "secondary";
                                        break;
                                    case "completed":
                                        orderStatus = "success";
                                        break;
                                    case "cancelled":
                                        orderStatus = "error";
                                        break;
                                }

                                // @ts-ignore
                                return (
                                    <TableRow key={order.id}>
                                        <TableCell>
                                            <Typography variant="h6" fontSize="14px">
                                                {order.id.substring(order.id.length - 8)}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6" fontSize="14px">
                                                {order.user?.first_name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="h6" fontSize="14px">
                                                {order.address.street1}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography fontSize="14px">{ShippingCarrier[order.shipping.shipping_carrier as keyof typeof ShippingCarrier]}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography fontSize="14px">
                                                {order.total_amount}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                color={orderStatus}
                                                label={order.status}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography fontSize="14px">
                                                <Button>Delete</Button>
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                );
                            }
                        )}
                    </TableBody>
                </Table>
            </Box>

        </Box>
    );
}

export default AdminOrderList;
