import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import {OrderProvider} from 'src/context/OrderContext';
import BlankCard from 'src/components/shared/BlankCard';
import {CardContent, TextField} from '@mui/material';
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
                        <button onClick={handleButtonClick}>Add</button>
                        {categories.length > 0 ? (
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {categories.map((item: any) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <button onClick={() => deleteCategory(item.name)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : <p>No category found</p>}
                    </CardContent>
                </BlankCard>
            </PageContainer>
        </OrderProvider>
    );
};
export default CategoriesListing;
