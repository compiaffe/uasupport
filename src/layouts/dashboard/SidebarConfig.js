// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  // {
  //   title: 'Informacje',
  //   path: '/dashboard/app',
  //   icon: getIcon('ic:round-perm-device-information')
  // },
  // {
  //   title: 'Info',
  //   path: '/dashboard/info',
  //   icon: getIcon('fontisto:info')
  // },
  {
    title: 'Zbiórki Pieniędzy',
    path: '/dashboard/fundraising',
    icon: getIcon('mdi:account-cash-outline')
  },
  {
    title: 'Zakwaterowanie',
    path: '/dashboard/homes',
    icon: getIcon('eva:home-fill')
  },
  {
    title: 'Transport',
    path: '/dashboard/transport',
    icon: getIcon('eva:car-fill')
  },
  {
    title: 'Centra Pomocy',
    path: '/dashboard/aids',
    icon: getIcon('bxs:first-aid')
  },
  {
    title: 'Login',
    path: '/login',
    withoutAuth: true,
    icon: getIcon('eva:lock-fill')
  },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill')
  // }
];

export const adminMenu = [
  {
    title: 'Admin Panel',
    path: '/dashboard/admin/panel',
    icon: getIcon('eos-icons:admin-outlined')
  },
  {
    title: 'Organisations',
    path: '/dashboard/admin/organisations',
    icon: getIcon('ps:organisation')
  },
]

export const managerMenu = [
  {
    title: 'My Organizations',
    path: '/dashboard/organization/manage',
    icon: getIcon('ps:organisation')
  },
]

export const volunteerMenu = [
  {
    title: 'My Organizations',
    path: '/dashboard/organization/manage',
    icon: getIcon('ps:organisation')
  },
]

export default sidebarConfig;
