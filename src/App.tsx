import { Route, Switch, Redirect } from 'react-router-dom'

import 'antd/dist/antd.css'


import Home from './pages/Home/'
import Info from './pages/Info'

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Home} />
        <Route path="/info" component={Info} />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
