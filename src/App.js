import React, { Component } from 'react'
/* import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  withRouter,
  Prompt
} from 'react-router-dom' */

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  withRouter,
  Prompt
} from './react-router-dom'

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import _404Page from './pages/_404Page'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './pages/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">商品</Link>

        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          {/* <Route path="/user" component={UserPage} /> */}

          {/* 路由守卫 */}
          <PrivateRoute path="/user" component={UserPage} />

          <Route path="/login" component={LoginPage} />
          <Route path="/product/:id" component={Product} />
          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  )
}

// 动态路由
// normal
/* function Product({ match, location }) {
  console.log('product', location, match) //sy-log
  const { params, url } = match
  const { id } = params

  return (
    <div>
      <h1>Product-{id}</h1>
      <Link to={url + '/detail'}>详情</Link>
      <Route path={url + '/detail'} component={Detail} />
    </div>
  )
} */

// hooks
/* function Product() {
  const match = useRouteMatch()
  const history = useHistory()
  const location = useLocation()
  const _params = useParams()

  console.log("match", match); //sy-log
  console.log("history", history); //sy-log
  console.log("location", location); //sy-log
  console.log("_params", _params); //sy-log

  const { params, url } = match
  const { id } = params

  return (
    <div>
      <h1>Product-{id}</h1>
      <Link to={url + '/detail'}>详情</Link>
      <Route path={url + '/detail'} component={Detail} />
    </div>
  )
} */

// withRouter
@withRouter
class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirm: true
    }
  }

  render() {
    const {
      match: {
        params: { id },
        url
      }
    } = this.props

    return (
      <div>
        <h1>Product-{id}</h1>
        <Link to={url + '/detail'}>详情</Link>
        <Route path={url + '/detail'} component={Detail} />

        <Link to="/">go home</Link>
        <Prompt when={this.state.confirm} message={location => {return "Are you sure you want to leave-fun"
        }} />
      </div>
    )
  }
}

// 嵌套路由
function Detail({ match, location }) {
  console.log('detail', location, match) //sy-log
  return (
    <div>
      <h2>detail</h2>
    </div>
  )
}

export default App
