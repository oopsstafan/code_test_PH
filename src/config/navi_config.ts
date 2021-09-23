/*
    For the bonus question about reusable menu, I created a seperate config file and define an array with all the
    required api values like 'key', 'title', and 'path' into objects. When I need to reuse a menu I can simply 
    read all the values here. And when I need to change menu, the only thing I need to do is also edit this file.

    If there is nested menus like with child menu, I will created a 'children' property in object and generate
    required valued for child menu. It depends on what UI libraries I am using with different values needed

    You can find the specific way to create navi in my 'Navi' component
*/
export const naviConfig = [
    {
        key: 'home',
        title: 'Home',
        path: '/home'
    },
    {
        key: 'info1',
        title: 'Hire me!',
        path: '/info'
    },
    {
        key: 'info2',
        title: 'Hire me!',
        path: '/info'
    },
    {
        key: 'info3',
        title: 'Hire me!',
        path: '/info'
    },
    {
        key: 'login',
        title: 'Login',
        path: '/home/login'
    },
]