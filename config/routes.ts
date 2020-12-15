export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
    hideInMenu: true,
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    hideInMenu: true,
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './ListTableList',
    hideInMenu: true,
  },
  {
    path: '/my-page',
    name: 'my-page',
    icon: 'smile',
    component: './MyPage',
    hideInMenu: true,
  },
  {
    path: '/a',
    name: 'a',
    icon: 'smile',
    component: './ListTableList',
    layout: 'top',
  },
  {
    path: '/b',
    name: 'b',
    icon: 'smile',
    component: './Admin',
    layout: 'side',
  },
  {
    path: '/',
    redirect: '/my-page',
  },
  {
    component: './404',
  },
];
