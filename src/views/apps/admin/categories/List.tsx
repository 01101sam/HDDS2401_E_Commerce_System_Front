import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import {OrderProvider} from 'src/context/OrderContext';
import BlankCard from 'src/components/shared/BlankCard';
import {CardContent, TextField, Button, TableRow, TableCell, Typography, TableHead  , Table , TableBody} from '@mui/material';
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
        title: 'Categories',
    },
];

const fetchCategories = async () => {
    try {
        const response = await axios.get("/api/categories");
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }

    return [];
}

const CategoriesListing = () => {
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        fetchCategories().then((data) => setCategories(data));
    }, []);

    async function deleteCategory(name: string) {
        try {
            await axios.delete(`/api/categories/${name}`);
            setCategories((prev) => prev.filter((category: any) => category.name !== name));
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    }

    async function createCategory(name: string) {
        try {
            await axios.post(`/api/categories`, {name});
            const cat = await fetchCategories();
            setCategories(cat);
        } catch (error) {
            console.error('Error creating category:', error);
        }
    }

    const handleInputChange = (event: any) => {
        setCategoryName(event.target.value);
    };

    const handleButtonClick = () => {
        createCategory(categoryName);
        setCategoryName(''); // Optionally clear the input after creating the category
    };

    return (
        <OrderProvider>
            <PageContainer title="Categories">
                <Breadcrumb title="Categories" items={BCrumb}/>
                <BlankCard>
                    <CardContent>
                        <TextField
                            id="Add Categories"
                            type="text"
                            size="small"
                            variant="outlined"
                            placeholder="Add Category"
                            value={categoryName}
                            onChange={handleInputChange}
                        />
                        <Button variant="contained" onClick={handleButtonClick} >
                            ADD
                        </Button>
                        {categories.length > 0 ? (
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
                                                Name
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
                                        {categories.map((item: any) => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <Typography variant="h6" fontSize="14px">
                                                        {item.id}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography variant="h6" fontSize="14px">
                                                        {item.name}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Typography fontSize="14px">
                                                        <Button variant="contained" onClick={() => deleteCategory(item.name)} fullWidth>
                                                            Delete
                                                        </Button>
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            ) : <p>No category found</p>}
                    </CardContent>
                </BlankCard>
            </PageContainer>
        </OrderProvider>
    );
};
export default CategoriesListing;
