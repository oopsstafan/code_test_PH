import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import Navi from './Navi'
import Login from './Login'
import Desc from './Desc'
import Hireme1 from './Hireme/Hireme1'
import Hireme2 from './Hireme/Hireme2'
import Hireme3 from './Hireme/Hireme3'

const { Header, Content } = Layout
export default function Home(): JSX.Element {
    return (
        <Layout>
            <Header style={{ backgroundColor: 'white', textAlign: 'center' }}>
                <h1>Welcome to my HIRE-ME Website</h1>
            </Header>
            <Content style={{ margin: '0 auto', width: '1000px', height: '900px' }}>
                <Navi />
                <Switch>
                    <Route path="/home/login" component={Login} />
                    <Route path="/home/hireme1" component={Hireme1} />
                    <Route path="/home/hireme2" component={Hireme2} />
                    <Route path="/home/hireme3" component={Hireme3} />
                    <Route path="/home" component={Desc} />
                </Switch>

            </Content>
        </Layout>

    )
}
