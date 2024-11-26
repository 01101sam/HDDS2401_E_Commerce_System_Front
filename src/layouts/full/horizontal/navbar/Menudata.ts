import {
    IconPoint,
    IconShoppingCart,
    IconFileText,
    IconBuildingStore,
    IconUserSquareRounded,
} from '@tabler/icons-react';
import {uniqueId} from 'lodash';

const MenuItems = [
    {
        id: uniqueId(),
        title: 'Shop',
        icon: IconBuildingStore,
        href: '/apps/ecommerce/shop',
    },
    {
        id: uniqueId(),
        title: 'Orders',
        icon: IconFileText,
        href: '/apps/invoice/list',
    },
    {
        id: uniqueId(),
        title: 'Cart',
        icon: IconShoppingCart,
        href: '/apps/ecommerce/eco-checkout',
    },

    {
        id: uniqueId(),
        title: 'Admin',
        icon: IconUserSquareRounded,
        href: '/admin/',
        children: [
            {
                id: uniqueId(),
                title: 'Users',
                icon: IconPoint,
                href: '/admin/users',
                children: [
                    {
                        id: uniqueId(),
                        title: 'Detail',
                        icon: IconPoint,
                        href: '/admin/users/detail/1',
                    },
                    {
                        id: uniqueId(),
                        title: 'Edit',
                        icon: IconPoint,
                        href: '/admin/users/edit/1',
                    },
                ],
            },
            {
                id: uniqueId(),
                title: 'Orders',
                icon: IconPoint,
                href: '/admin/orders',
                children: [
                    {
                        id: uniqueId(),
                        title: 'List',
                        icon: IconPoint,
                        href: '/apps/invoice/list',
                    },
                    {
                        id: uniqueId(),
                        title: 'Detail',
                        icon: IconPoint,
                        href: '/apps/invoice/detail/PineappleInc.',
                    },
                    {
                        id: uniqueId(),
                        title: 'Edit',
                        icon: IconPoint,
                        href: '/apps/invoice/edit/PineappleInc.',
                    },
                ]
            },
            {
                id: uniqueId(),
                title: 'Shipping',
                icon: IconPoint,
                href: '/admin/shipping',
                children: [
                    {
                        id: uniqueId(),
                        title: 'Detail',
                        icon: IconPoint,
                        href: '/admin/shipping/detail/1',
                    },
                    {
                        id: uniqueId(),
                        title: 'Edit',
                        icon: IconPoint,
                        href: '/admin/shipping/edit/1',
                    },
                ]
            },
            {
                id: uniqueId(),
                title: 'Categories',
                icon: IconPoint,
                href: '/admin/category',
            },
            {
                id: uniqueId(),
                title: 'Products',
                icon: IconPoint,
                href: '/admin/products',
                children: [
                    {
                        id: uniqueId(),
                        title: 'List',
                        icon: IconPoint,
                        href: '/apps/ecommerce/eco-product-list',
                    },
                    {
                        id: uniqueId(),
                        title: 'Add Product',
                        icon: IconPoint,
                        href: '/apps/ecommerce/add-product',
                    },
                    {
                        id: uniqueId(),
                        title: 'Edit Product',
                        icon: IconPoint,
                        href: '/apps/ecommerce/edit-product',
                    },
                ]
            },

        ],
    },
];
export default MenuItems;
