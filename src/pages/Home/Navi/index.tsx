import { Menu } from 'antd'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
//import navi config file
import {naviConfig} from '../../../config/navi_config'

function Navi({ location }: RouteComponentProps): JSX.Element {
    //Menu.Item's style
    const menuItemStyle: object = {
        width: '200px',
        textAlign: 'center'
    }
    type Menu = {
        key: string,
        path: string,
        title: string
    }
    /*
        'createNavi' function is used to create reusable menu. For simple menu like this web, just simply map the array generated
        in the config file, and create dom with required value generated in config file.

        If there is nested menu with submenu, for antd Menu, I need to also have 'Submenu' as parent node and 'Menu.Item' as child
        in this case, for the reason that I have already had children property in config file, simply make a if statement. if having
        child, return 'Submenu' first then do 'createNavi' again to generate child node 'Menu.Item' which is same with the normal
        un-submenu. 
     
    */
    const createNavi = (target:Array<Menu>)=>{
        return target.map(item =>{
            return (
                <Menu.Item key={item.key} style={menuItemStyle}>
                    <Link to={item.path}>
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
            
        
    }
    //get the last word of path to set up the selected keys and make sure the style is not lost when refresh the page
    let page = location.pathname.split('/').reverse()[0]
    return (
        <div>
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ margin: '0 auto' }}
                selectedKeys={page === 'login' ? ['login'] : page === 'home' ? ['home'] : ['info1']}
            >
                
                {/*create menu without using reusable config file 
                <Menu.Item key='1' style={menuItemStyle}>
                    <Link to='/home'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key='2' style={menuItemStyle}>
                    <Link to='/info'>
                        Hire me!
                    </Link>
                </Menu.Item>
                <Menu.Item key='3' style={menuItemStyle}>
                    <Link to='/info'>
                        Hire me!
                    </Link>
                </Menu.Item>
                <Menu.Item key='4' style={menuItemStyle}>
                    <Link to='/info'>
                        Hire me!
                    </Link>
                </Menu.Item>
                <Menu.Item key='5' style={menuItemStyle}>
                    <Link to='/home/login'>
                        Log in
                    </Link>

                </Menu.Item> */}
                {
                    //create Navi and pass the required config file to function
                    createNavi(naviConfig)
                }
            </Menu>
        </div>

    )
}
export default withRouter(Navi)
