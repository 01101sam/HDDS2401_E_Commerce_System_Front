import {
    IconHome,
    IconPoint,
    IconApps,
    IconClipboard,
    IconFileDescription,
    IconBorderAll,
    IconZoomCode,
    IconRotate,
    IconUserPlus,
    IconLogin,
    IconAlertCircle,
    IconSettings,
    IconAppWindow,
} from '@tabler/icons-react';
import {uniqueId} from 'lodash';

const MenuItems = [
    {
        id: uniqueId(),
        title: 'Shop',
        icon: IconPoint,
        href: '/apps/ecommerce/shop',
    },
    {
        id: uniqueId(),
        title: 'Orders',
        icon: IconPoint,
        href: '/apps/invoice/list',
    },
    {
        id: uniqueId(),
        title: 'Cart',
        icon: IconPoint,
        href: '/apps/ecommerce/eco-checkout',
    },

    {
        id: uniqueId(),
        title: 'Admin',
        icon: IconApps,
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

    {
        id: uniqueId(),
        title: 'Pages',
        icon: IconClipboard,
        href: '/ui-components/',
        children: [
            // {
            //   id: uniqueId(),
            //   title: 'Treeview',
            //   icon: IconPoint,
            //   href: '/pages/treeview',
            // },
            // {
            //   id: uniqueId(),
            //   title: 'Pricing',
            //   icon: IconPoint,
            //   href: '/pages/pricing',
            // },
            {
                id: uniqueId(),
                title: 'Account Setting',
                icon: IconPoint,
                href: '/pages/account-settings',
            },
            {
                id: uniqueId(),
                title: 'Landingpage',
                icon: IconPoint,
                href: '/landingpage',
            },
            {
                id: uniqueId(),
                title: 'FAQ',
                icon: IconPoint,
                href: '/pages/faq',
            },
            // {
            //   id: uniqueId(),
            //   title: 'Widgets',
            //   icon: IconPoint,
            //   href: '/widgets/cards',
            //   children: [
            //     {
            //       id: uniqueId(),
            //       title: 'Cards',
            //       icon: IconPoint,
            //       href: '/widgets/cards',
            //     },
            //     {
            //       id: uniqueId(),
            //       title: 'Banners',
            //       icon: IconPoint,
            //       href: '/widgets/banners',
            //     },
            //     {
            //       id: uniqueId(),
            //       title: 'Charts',
            //       icon: IconPoint,
            //       href: '/widgets/charts',
            //     },
            //   ],
            // },
            {
                id: uniqueId(),
                title: 'Ui',
                icon: IconPoint,
                href: '/ui-components/alert',
                children: [
                    {
                        id: uniqueId(),
                        title: 'Alert',
                        icon: IconPoint,
                        href: '/ui-components/alert',
                    },
                    {
                        id: uniqueId(),
                        title: 'Accordion',
                        icon: IconPoint,
                        href: '/ui-components/accordion',
                    },
                    {
                        id: uniqueId(),
                        title: 'Avatar',
                        icon: IconPoint,
                        href: '/ui-components/avatar',
                    },
                    {
                        id: uniqueId(),
                        title: 'Chip',
                        icon: IconPoint,
                        href: '/ui-components/chip',
                    },
                    {
                        id: uniqueId(),
                        title: 'Dialog',
                        icon: IconPoint,
                        href: '/ui-components/dialog',
                    },
                    {
                        id: uniqueId(),
                        title: 'List',
                        icon: IconPoint,
                        href: '/ui-components/list',
                    },
                    {
                        id: uniqueId(),
                        title: 'Popover',
                        icon: IconPoint,
                        href: '/ui-components/popover',
                    },
                    {
                        id: uniqueId(),
                        title: 'Rating',
                        icon: IconPoint,
                        href: '/ui-components/rating',
                    },
                    {
                        id: uniqueId(),
                        title: 'Tabs',
                        icon: IconPoint,
                        href: '/ui-components/tabs',
                    },
                    {
                        id: uniqueId(),
                        title: 'Tooltip',
                        icon: IconPoint,
                        href: '/ui-components/tooltip',
                    },
                    {
                        id: uniqueId(),
                        title: 'Transfer List',
                        icon: IconPoint,
                        href: '/ui-components/transfer-list',
                    },
                    {
                        id: uniqueId(),
                        title: 'Typography',
                        icon: IconPoint,
                        href: '/typography',
                    },
                ],
            },
            // {
            //   id: uniqueId(),
            //   title: 'Charts',
            //   icon: IconPoint,
            //   href: '/charts/',
            //   children: [
            //     {
            //       id: uniqueId(),
            //       title: 'Line',
            //       icon: IconPoint,
            //       href: '/charts/line-chart',
            //     },
            //     {
            //       id: uniqueId(),
            //       title: 'Gredient',
            //       icon: IconPoint,
            //       href: '/charts/gredient-chart',
            //     },
            //     {
            //       id: uniqueId(),
            //       title: 'Area',
            //       icon: IconPoint,
            //       href: '/charts/area-chart',
            //     },
            //     {
            //       id: uniqueId(),
            //       title: 'Candlestick',
            //       icon: IconPoint,
            //       href: '/charts/candlestick-chart',
            //     },
            //     {
            //       id: uniqueId(),
            //       title: 'Column',
            //       icon: IconPoint,
            //       href: '/charts/column-chart',
            //     },
            //     {
            //       id: uniqueId(),
            //       title: 'Doughtnut & Pie',
            //       icon: IconPoint,
            //       href: '/charts/doughnut-pie-chart',
            //     },
            //     {
            //       id: uniqueId(),
            //       title: 'RadialBar & Radar',
            //       icon: IconPoint,
            //       href: '/charts/radialbar-chart',
            //     },
            //   ],
            // },
            {
                id: uniqueId(),
                title: 'Auth',
                icon: IconPoint,
                href: '/400',
                children: [
                    {
                        id: uniqueId(),
                        title: 'Error',
                        icon: IconAlertCircle,
                        href: '/400',
                    },
                    {
                        id: uniqueId(),
                        title: 'Maintenance',
                        icon: IconSettings,
                        href: '/auth/maintenance',
                    },
                    {
                        id: uniqueId(),
                        title: 'Login',
                        icon: IconLogin,
                        href: '/auth/login',
                        children: [
                            {
                                id: uniqueId(),
                                title: 'Side Login',
                                icon: IconPoint,
                                href: '/auth/login',
                            },
                            {
                                id: uniqueId(),
                                title: 'Boxed Login',
                                icon: IconPoint,
                                href: '/auth/login2',
                            },
                        ],
                    },
                    {
                        id: uniqueId(),
                        title: 'Register',
                        icon: IconUserPlus,
                        href: '/auth/register',
                        children: [
                            {
                                id: uniqueId(),
                                title: 'Side Register',
                                icon: IconPoint,
                                href: '/auth/register',
                            },
                            {
                                id: uniqueId(),
                                title: 'Boxed Register',
                                icon: IconPoint,
                                href: '/auth/register2',
                            },
                        ],
                    },
                    {
                        id: uniqueId(),
                        title: 'Forgot Password',
                        icon: IconRotate,
                        href: '/auth/forgot-password',
                        children: [
                            {
                                id: uniqueId(),
                                title: 'Side Forgot Password',
                                icon: IconPoint,
                                href: '/auth/forgot-password',
                            },
                            {
                                id: uniqueId(),
                                title: 'Boxed Forgot Password',
                                icon: IconPoint,
                                href: '/auth/forgot-password2',
                            },
                        ],
                    },
                    // {
                    //   id: uniqueId(),
                    //   title: 'Two Steps',
                    //   icon: IconZoomCode,
                    //   href: '/auth/two-steps',
                    //   children: [
                    //     {
                    //       id: uniqueId(),
                    //       title: 'Side Two Steps',
                    //       icon: IconPoint,
                    //       href: '/auth/two-steps',
                    //     },
                    //     {
                    //       id: uniqueId(),
                    //       title: 'Boxed Two Steps',
                    //       icon: IconPoint,
                    //       href: '/auth/two-steps2',
                    //     },
                    //   ],
                    // },
                ],
            },
        ],
    },
    {
        id: uniqueId(),
        title: 'Forms',
        icon: IconFileDescription,
        href: '/form-elements/autocomplete',
        children: [
            {
                id: uniqueId(),
                title: 'Form Elements',
                icon: IconPoint,
                href: '/form-elements/autocomplete',
                children: [
                    {
                        id: uniqueId(),
                        title: 'Autocomplete',
                        icon: IconPoint,
                        href: '/form-elements/autocomplete',
                    },
                    {
                        id: uniqueId(),
                        title: 'Button',
                        icon: IconPoint,
                        href: '/form-elements/button',
                    },
                    {
                        id: uniqueId(),
                        title: 'Radio',
                        icon: IconPoint,
                        href: '/form-elements/radio',
                    },
                    {
                        id: uniqueId(),
                        title: 'Date Time',
                        icon: IconPoint,
                        href: '/form-elements/date-time',
                    },
                    {
                        id: uniqueId(),
                        title: 'Slider',
                        icon: IconPoint,
                        href: '/form-elements/slider',
                    },
                    {
                        id: uniqueId(),
                        title: 'Switch',
                        icon: IconPoint,
                        href: '/form-elements/switch',
                    },
                ],
            },
            {
                id: uniqueId(),
                title: 'Form Layout',
                icon: IconPoint,
                href: '/forms/form-layouts',
            },
            {
                id: uniqueId(),
                title: 'Form Horizontal',
                icon: IconPoint,
                href: '/forms/form-horizontal',
            },
            {
                id: uniqueId(),
                title: 'Form Vertical',
                icon: IconPoint,
                href: '/forms/form-vertical',
            },
            {
                id: uniqueId(),
                title: 'Form Custom',
                icon: IconPoint,
                href: '/forms/form-custom',
            },
            {
                id: uniqueId(),
                title: 'Form Wizard',
                icon: IconPoint,
                href: '/forms/form-wizard',
            },
            {
                id: uniqueId(),
                title: 'Form Validation',
                icon: IconPoint,
                href: '/forms/form-validation',
            },
        ],
    },
    {
        id: uniqueId(),
        title: 'Tables',
        icon: IconBorderAll,
        href: '/tables/',
        children: [
            {
                id: uniqueId(),
                title: 'Basic',
                icon: IconPoint,
                href: '/tables/basic',
            },
            {
                id: uniqueId(),
                title: 'Collapsible',
                icon: IconPoint,
                href: '/tables/collapsible',
            },
            {
                id: uniqueId(),
                title: 'Enhanced',
                icon: IconPoint,
                href: '/tables/enhanced',
            },
            {
                id: uniqueId(),
                title: 'Fixed Header',
                icon: IconPoint,
                href: '/tables/fixed-header',
            },
            {
                id: uniqueId(),
                title: 'Pagination',
                icon: IconPoint,
                href: '/tables/pagination',
            },
            {
                id: uniqueId(),
                title: 'Search',
                icon: IconPoint,
                href: '/tables/search',
            },
            {
                id: uniqueId(),
                title: 'React Table',
                icon: IconPoint,
                href: '/react-tables/basic',
                children: [
                    {
                        id: uniqueId(),
                        title: 'Basic',
                        icon: IconPoint,
                        href: '/react-tables/basic',
                    },
                    {
                        id: uniqueId(),
                        title: 'Dense',
                        icon: IconPoint,
                        href: '/react-tables/dense',
                    },
                    {
                        id: uniqueId(),
                        title: 'Filter',
                        icon: IconPoint,
                        href: '/react-tables/filter',
                    },
                    {
                        id: uniqueId(),
                        title: 'Row Selection',
                        icon: IconPoint,
                        href: '/react-tables/row-selection',
                    },
                    {
                        id: uniqueId(),
                        title: 'Pagination',
                        icon: IconPoint,
                        href: '/react-tables/pagination',
                    },
                    {
                        id: uniqueId(),
                        title: 'Sorting',
                        icon: IconPoint,
                        href: '/react-tables/sorting',
                    },
                    {
                        id: uniqueId(),
                        title: 'Column Visibility',
                        icon: IconPoint,
                        href: '/react-tables/column-visiblity',
                    },
                    {
                        id: uniqueId(),
                        title: 'Editable',
                        icon: IconPoint,
                        href: '/react-tables/editable',
                    },
                    {
                        id: uniqueId(),
                        title: 'Expanding',
                        icon: IconPoint,
                        href: '/react-tables/expanding',
                    },
                    {
                        id: uniqueId(),
                        title: 'Sticky',
                        icon: IconPoint,
                        href: '/react-tables/sticky',
                    },
                    {
                        id: uniqueId(),
                        title: 'Empty',
                        icon: IconPoint,
                        href: '/react-tables/empty',
                    },
                    {
                        id: uniqueId(),
                        title: 'Drag & Drop',
                        icon: IconPoint,
                        href: '/react-tables/drag-drop',
                    },
                ],
            },
        ],
    },
];


export default MenuItems;
