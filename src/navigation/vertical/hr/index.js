export default [
    {
        title: 'insaHome',
        route: 'hrHome',
        icon: 'HomeIcon',
    },
    {
        title: '인사관리',
        icon: 'UsersIcon',
        children: [
                    {
                        title: '직원정보 관리',
                        icon: 'UserPlusIcon',
                        route: 'emp-page'
                    },
                    {
                        title: '인사고과 관리',
                        route: 'hrHome'
                    },
                    {
                        title: '직원교육 관리',
                        route: 'hrHome'
            },
        ],
    },
]
