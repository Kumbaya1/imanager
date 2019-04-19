export default [
    {
        name:"首页",
        key:"/admin/home"
    },
    {
        name:"组件",
        key:"/admin/utils",
        children:[{
            name:"按钮",
            key:"/admin/utils/button"
        },{
            name:"对话框",
            key:"/admin/utils/modal"
        },{
            name:"图表",
            key:"/admin/utils/icon"
        }]
    }

]