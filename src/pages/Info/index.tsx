import React from 'react'
import { Layout } from 'antd'
//import observer to observe the change of the username
import { observer } from 'mobx-react'
import {store} from '../../mobx/user_Info_Store'



const { Header, Content } = Layout
function Info(): JSX.Element {
    return (
        <Layout>
            <Header style={{ backgroundColor: 'white', textAlign: 'center' }}>
                <h1>Hello {store.username}, welcome to login!</h1>
            </Header>
            <Content style={{ margin: '0 auto', width: '1000px', height: '900px' }}>

            </Content>
        </Layout>
    )
}
export default observer(Info)
