import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Home = React.lazy(() => import('./home'));

export const tableSystemRouteConfig = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/table-system',
    element: <Home />,
  },
];
