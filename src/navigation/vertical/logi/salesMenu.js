export default [
    {
        title: '영업 관리',
        icon: 'FileIcon',
        children: [
            {
                title: '견적 관리',
                children: [
                    {
                        title: '견적 조회/수정',
                        route: 'logi-page',
                    },
                    {
                        title: '견적 등록',
                        route: 'logi-page',
                    },
                ],
            },
            {
                title: '수주 관리',
                children: [
                    {
                        title: '수주 조회',
                        route: 'logi-page',
                    },
                    {
                        title: '수주 등록',
                        route: 'logi-page',
                    },
                ],
            },
            {
                title: '수주 조회',
                route: 'dashboard-analytics',
            },
            {
                title: '수주 등록',
                route: 'dashboard-analytics',
            },
        ],
    },
]
