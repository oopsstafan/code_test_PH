import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import HomeHeader from './HomeHeader'
import Navi from './Navi'
import Login from './Login'
import Desc from './Desc'

const { Header, Footer, Content } = Layout
export default function Home(): JSX.Element {
    return (
        <Layout>
            <Header style={{ backgroundColor: 'white' }}>
                <HomeHeader />
            </Header>
            <Content style={{ margin: '0 auto', width: '1000px', height: '900px' }}>
                <Navi />
                <Switch>
                    <Route path="/home/login" component={Login} />
                    <Route path="/home" component={Desc} />
                </Switch>

            </Content>
        </Layout>

    )
}
