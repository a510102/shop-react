import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary';
import Loading from './Loading/Loading';
import { ShopCartContext } from './Shop/ShopCartContext';

const Login = React.lazy(() => import('./Login'));
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Products = React.lazy(() => import('./Products/Products'));
const Shop = React.lazy(() => import('./Shop/Shop'));
const ShopCart = React.lazy(() => import('./Shop/ShopCart'));
const CouponsList = React.lazy(() => import('./Coupon/CouponsList'));
const OrderList = React.lazy(() => import('./OrderList/OrderList'));
const CheckOut = React.lazy(() => import('./CheckOut'));

function NotFound() {
  return (
    <div>404 Not Found the path</div>
  )
}

export default function Router({ carts, dispatch, login, setLogin }) {
  return (

    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path='/home' component={Home} />
          <Route exact path='/shop'>
            <ShopCartContext.Provider value={{ carts, dispatch }}>
              <ShopCart />
              <Shop />
            </ShopCartContext.Provider>
          </Route>
          <Route path='/about' component={About} />
          <Route path='/login'>
            <Login setLogin={setLogin} />
          </Route>
          <Route path='/products' component={Products} />
          <Route path='/orderlist' component={OrderList} />
          <Route path='/coupon' component={CouponsList} />
          <Route path='/checkout' component={CheckOut} />
          <Route component={NotFound} />
        </Switch >
      </ErrorBoundary>
    </Suspense>

  )
}