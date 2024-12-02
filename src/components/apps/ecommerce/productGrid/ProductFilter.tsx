// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'src/store/Store';
import {Box, Button, Divider, List, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import {filterProducts, filterReset,} from 'src/store/apps/eCommerce/ECommerceSlice';
import {IconCircles} from '@tabler/icons-react';
import {ProductFilterType} from 'src/types/apps/eCommerce';
import axios from "src/utils/axios.ts";

const filterCategory: ProductFilterType[] = [
    {
        id: 1,
        filterbyTitle: 'Category',
    },
    {
        id: 2,
        name: 'All',
        sort: 'All',
        icon: IconCircles,
    },
];

const ProductFilter = () => {
    const dispatch = useDispatch();
    const active = useSelector((state) => state.ecommerceReducer.filters);
    const customizer = useSelector((state) => state.customizer);
    const br = `${customizer.borderRadius}px`;
    const [category, setCategory] = React.useState(filterCategory);

    useEffect(() => {
        const fetchCategory = async () => {
            const categoryList = await axios.get('/api/categories');

            const newCategory = categoryList.data.map((item: any) => {
                return {
                    id: item.id,
                    name: item.name
                };
            });

            const newFilterCategory = [
                ...filterCategory,
                ...newCategory,
                {
                    id: 6,
                    devider: true,
                },
            ];

            setCategory(newFilterCategory);
        }

        fetchCategory();
    }, []);

    return (
        <>
            <List>
                {/* ------------------------------------------- */}
                {/* Category filter */}
                {/* ------------------------------------------- */}
                {category.map((filter) => {
                    if (filter.filterbyTitle) {
                        return (
                            <Typography variant="subtitle2" fontWeight={600} px={3} mt={2} pb={2} key={filter.id}>
                                {filter.filterbyTitle}
                            </Typography>
                        );
                    } else if (filter.devider) {
                        return <Divider key={filter.id}/>;
                    }

                    return (
                        <ListItemButton
                            sx={{mb: 1, mx: 3, borderRadius: br}}
                            selected={active.category === filter.name}
                            onClick={() => dispatch(filterProducts({category: filter.name}))}
                            key={filter.id}
                        >
                            {filter.icon ? (
                                <ListItemIcon sx={{minWidth: '30px'}}>
                                    <filter.icon stroke="1.5" size="19"/>
                                </ListItemIcon>
                            ) : null}
                            <ListItemText>{filter.name}</ListItemText>
                        </ListItemButton>
                    );
                })}

                {/* ------------------------------------------- */}
                {/* Reset */}
                {/* ------------------------------------------- */}
                <Box p={3}>
                    <Button variant="contained" onClick={() => dispatch(filterReset())} fullWidth>
                        Reset Filters
                    </Button>
                </Box>
            </List>
        </>
    );
};

export default ProductFilter;
