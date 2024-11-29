import icon1 from 'src/assets/images/svgs/icon-account.svg'

import ddIcon2 from 'src/assets/images/svgs/icon-dd-cart.svg'

//
// Profile dropdown
//
interface ProfileType {
    href: string;
    title: string;
    subtitle: string;
    icon: any;
}

const profile: ProfileType[] = [
    {
        href: '/pages/account-settings',
        title: 'My Profile',
        subtitle: 'Account Settings',
        icon: icon1,
    }
];

//
// apps dropdown
//
interface appsLinkType {
    href: string;
    title: string;
    subtext: string;
    avatar: string;
}

const appsLink: appsLinkType[] = [
    {
        href: '/apps/ecommerce/shop',
        title: 'eCommerce App',
        subtext: 'New stock available',
        avatar: ddIcon2
    },
]

export {profile, appsLink};
