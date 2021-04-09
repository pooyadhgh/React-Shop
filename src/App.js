import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Shopping from './containers/Shopping/Shopping'
import Checkout from './containers/Checkout/Checkout'
import Account from './containers/Account/Account'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/account" component={Account} />
              <Route path="/" exact component={Shopping} />
            </Switch>
          </Layout>
        </Router>
      </div>
    )
  }
}

export default App
