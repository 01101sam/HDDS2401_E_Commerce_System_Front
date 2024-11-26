// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, {lazy} from 'react';
import {Navigate} from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const EcommerceDash = Loadable(lazy(() => import('../views/dashboard/Ecommerce')));

/* ****Apps***** */
const Ecommerce = Loadable(lazy(() => import('../views/apps/eCommerce/Ecommerce')));
const EcommerceDetail = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceDetail')));
const EcommerceAddProduct = Loadable(
    lazy(() => import('../views/apps/eCommerce/EcommerceAddProduct')),
);
const EcommerceEditProduct = Loadable(
    lazy(() => import('../views/apps/eCommerce/EcommerceEditProduct')),
);
const EcomProductList = Loadable(lazy(() => import('../views/apps/eCommerce/EcomProductList')));
const EcomProductCheckout = Loadable(
    lazy(() => import('../views/apps/eCommerce/EcommerceCheckout')),
);

const InvoiceList = Loadable(lazy(() => import('../views/apps/invoice/List')));
const InvoiceDetail = Loadable(lazy(() => import('../views/apps/invoice/Detail')));
const InvoiceEdit = Loadable(lazy(() => import('../views/apps/invoice/Edit')));

// ui components
const MuiAlert = Loadable(lazy(() => import('../views/ui-components/MuiAlert')));
const MuiAccordion = Loadable(lazy(() => import('../views/ui-components/MuiAccordion')));
const MuiAvatar = Loadable(lazy(() => import('../views/ui-components/MuiAvatar')));
const MuiChip = Loadable(lazy(() => import('../views/ui-components/MuiChip')));
const MuiDialog = Loadable(lazy(() => import('../views/ui-components/MuiDialog')));
const MuiList = Loadable(lazy(() => import('../views/ui-components/MuiList')));
const MuiPopover = Loadable(lazy(() => import('../views/ui-components/MuiPopover')));
const MuiRating = Loadable(lazy(() => import('../views/ui-components/MuiRating')));
const MuiTabs = Loadable(lazy(() => import('../views/ui-components/MuiTabs')));
const MuiTooltip = Loadable(lazy(() => import('../views/ui-components/MuiTooltip')));
const MuiTransferList = Loadable(lazy(() => import('../views/ui-components/MuiTransferList')));
const MuiTypography = Loadable(lazy(() => import('../views/ui-components/MuiTypography')));

// form elements
const MuiAutoComplete = Loadable(
    lazy(() => import('../views/forms/form-elements/MuiAutoComplete')),
);
const MuiButton = Loadable(lazy(() => import('../views/forms/form-elements/MuiButton')));
const MuiCheckbox = Loadable(lazy(() => import('../views/forms/form-elements/MuiCheckbox')));
const MuiRadio = Loadable(lazy(() => import('../views/forms/form-elements/MuiRadio')));
const MuiSlider = Loadable(lazy(() => import('../views/forms/form-elements/MuiSlider')));
const MuiDateTime = Loadable(lazy(() => import('../views/forms/form-elements/MuiDateTime')));
const MuiSwitch = Loadable(lazy(() => import('../views/forms/form-elements/MuiSwitch')));

// forms
const FormLayouts = Loadable(lazy(() => import('../views/forms/FormLayouts')));
const FormCustom = Loadable(lazy(() => import('../views/forms/FormCustom')));
const FormHorizontal = Loadable(lazy(() => import('../views/forms/FormHorizontal')));
const FormVertical = Loadable(lazy(() => import('../views/forms/FormVertical')));
const FormWizard = Loadable(lazy(() => import('../views/forms/FormWizard')));
const FormValidation = Loadable(lazy(() => import('../views/forms/FormValidation')));
const QuillEditor = Loadable(lazy(() => import('../views/forms/quill-editor/QuillEditor')));

// pages
const AccountSetting = Loadable(
    lazy(() => import('../views/pages/account-setting/AccountSetting')),
);

// tables
const BasicTable = Loadable(lazy(() => import('../views/tables/BasicTable')));
const EnhanceTable = Loadable(lazy(() => import('../views/tables/EnhanceTable')));
const PaginationTable = Loadable(lazy(() => import('../views/tables/PaginationTable')));
const FixedHeaderTable = Loadable(lazy(() => import('../views/tables/FixedHeaderTable')));
const CollapsibleTable = Loadable(lazy(() => import('../views/tables/CollapsibleTable')));
const SearchTable = Loadable(lazy(() => import('../views/tables/SearchTable')));

//react tables
const ReactBasicTable = Loadable(lazy(() => import('../views/react-tables/basic/page')));
const ReactColumnVisibilityTable = Loadable(
    lazy(() => import('../views/react-tables/columnvisibility/page')),
);
const ReactDenseTable = Loadable(lazy(() => import('../views/react-tables/dense/page')));
const ReactDragDropTable = Loadable(lazy(() => import('../views/react-tables/drag-drop/page')));
const ReactEditableTable = Loadable(lazy(() => import('../views/react-tables/editable/page')));
const ReactEmptyTable = Loadable(lazy(() => import('../views/react-tables/empty/page')));
const ReactExpandingTable = Loadable(lazy(() => import('../views/react-tables/expanding/page')));
const ReactFilterTable = Loadable(lazy(() => import('../views/react-tables/filtering/page')));
const ReactPaginationTable = Loadable(lazy(() => import('../views/react-tables/pagination/page')));
const ReactRowSelectionTable = Loadable(
    lazy(() => import('../views/react-tables/row-selection/page')),
);
const ReactSortingTable = Loadable(lazy(() => import('../views/react-tables/sorting/page')));
const ReactStickyTable = Loadable(lazy(() => import('../views/react-tables/sticky/page')));

// authentication
const Login = Loadable(lazy(() => import('src/views/authentication/auth/Login')));
const Register = Loadable(lazy(() => import('src/views/authentication/auth/Register')));
const ForgotPassword = Loadable(lazy(() => import('src/views/authentication/auth/ForgotPassword')));

const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const Router = [
    {
        path: '/',
        element: <FullLayout/>,
        children: [
            {path: '/', element: <Ecommerce/>},

            // User Dashboard

            {path: '/apps/ecommerce/shop', element: <Ecommerce/>},
            {path: '/apps/ecommerce/eco-product-list', element: <EcomProductList/>},
            {path: '/apps/ecommerce/eco-checkout', element: <EcomProductCheckout/>},
            {path: '/apps/ecommerce/detail/:id', element: <EcommerceDetail/>},

            {path: '/apps/invoice/list', element: <InvoiceList/>},
            {path: '/apps/invoice/detail/:id', element: <InvoiceDetail/>},

            {path: '/account/settings', element: <AccountSetting/>},

            // Admin Dashboard
            {path: '/admin/dashboard', exact: true, element: <EcommerceDash/>},
            {path: '/admin/users', element: <EcommerceDash/>},

            // Manage Order
            {path: '/admin/orders', element: <EcommerceDash/>},
            {path: '/admin/shipping', element: <EcommerceDash/>},

            {path: '/apps/invoice/edit/:id', element: <InvoiceEdit/>},

            // Mange Website
            {path: '/admin/categories', element: <EcommerceDash/>},
            {path: '/admin/products', element: <EcommerceDash/>},

            {path: '/apps/ecommerce/add-product', element: <EcommerceAddProduct/>},
            {path: '/apps/ecommerce/edit-product', element: <EcommerceEditProduct/>},


            // Utils
            {path: '/ui-components/alert', element: <MuiAlert/>},
            {path: '/ui-components/accordion', element: <MuiAccordion/>},
            {path: '/ui-components/avatar', element: <MuiAvatar/>},
            {path: '/ui-components/chip', element: <MuiChip/>},
            {path: '/ui-components/dialog', element: <MuiDialog/>},
            {path: '/ui-components/list', element: <MuiList/>},
            {path: '/ui-components/popover', element: <MuiPopover/>},
            {path: '/ui-components/rating', element: <MuiRating/>},
            {path: '/ui-components/tabs', element: <MuiTabs/>},
            {path: '/ui-components/tooltip', element: <MuiTooltip/>},
            {path: '/ui-components/transfer-list', element: <MuiTransferList/>},
            {path: '/ui-components/typography', element: <MuiTypography/>},

            {path: '/tables/basic', element: <BasicTable/>},
            {path: '/tables/enhanced', element: <EnhanceTable/>},
            {path: '/tables/pagination', element: <PaginationTable/>},
            {path: '/tables/fixed-header', element: <FixedHeaderTable/>},
            {path: '/tables/collapsible', element: <CollapsibleTable/>},
            {path: '/tables/search', element: <SearchTable/>},

            {path: '/forms/form-elements/autocomplete', element: <MuiAutoComplete/>},
            {path: '/forms/form-elements/button', element: <MuiButton/>},
            {path: '/forms/form-elements/checkbox', element: <MuiCheckbox/>},
            {path: '/forms/form-elements/radio', element: <MuiRadio/>},
            {path: '/forms/form-elements/slider', element: <MuiSlider/>},
            {path: '/forms/form-elements/date-time', element: <MuiDateTime/>},
            {path: '/forms/form-elements/switch', element: <MuiSwitch/>},
            {path: '/forms/form-elements/switch', element: <MuiSwitch/>},
            {path: '/forms/form-layouts', element: <FormLayouts/>},
            {path: '/forms/form-custom', element: <FormCustom/>},
            {path: '/forms/form-wizard', element: <FormWizard/>},
            {path: '/forms/form-validation', element: <FormValidation/>},
            {path: '/forms/form-horizontal', element: <FormHorizontal/>},
            {path: '/forms/form-vertical', element: <FormVertical/>},
            {path: '/forms/quill-editor', element: <QuillEditor/>},

            {path: '/react-tables/basic', element: <ReactBasicTable/>},
            {path: '/react-tables/column-visiblity', element: <ReactColumnVisibilityTable/>},
            {path: '/react-tables/drag-drop', element: <ReactDragDropTable/>},
            {path: '/react-tables/dense', element: <ReactDenseTable/>},
            {path: '/react-tables/editable', element: <ReactEditableTable/>},
            {path: '/react-tables/empty', element: <ReactEmptyTable/>},
            {path: '/react-tables/expanding', element: <ReactExpandingTable/>},
            {path: '/react-tables/filter', element: <ReactFilterTable/>},
            {path: '/react-tables/pagination', element: <ReactPaginationTable/>},
            {path: '/react-tables/row-selection', element: <ReactRowSelectionTable/>},
            {path: '/react-tables/sorting', element: <ReactSortingTable/>},
            {path: '/react-tables/sticky', element: <ReactStickyTable/>},

            // Catch all
            {path: '*', element: <Navigate to="/auth/404"/>},
        ],
    },
    {
        path: '/',
        element: <BlankLayout/>,
        children: [
            {path: '/auth/login', element: <Login/>},
            {path: '/auth/register', element: <Register/>},
            {path: '/auth/forgot-password', element: <ForgotPassword/>},

            {path: '/auth/404', element: <Error/>},
            {path: '*', element: <Navigate to="/auth/404"/>},
        ],
    },
];

export default Router;
