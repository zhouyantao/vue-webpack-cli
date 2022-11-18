const routes = [
    {
        name: 'HOME',
        path: '/',
        component: () => import('@/view/A')
    },
    {
        name: 'A',
        path: '/a',
        component: () => import('@/view/A')
    },
    {
        name: 'B',
        path: '/b',
        component: () => import('@/view/B')
    },
    
];

export default routes
