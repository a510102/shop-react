import React, { Suspense, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ErrorBoundary from '../components/ErrorBoundary';
import Loading from '../components/Loading/Loading';
import PrivateRoute from '../router/PrivateRoute';
import { useSelector } from 'react-redux';

const Login = React.lazy(() => import('../components/Login'));
const Home = React.lazy(() => import('../components/Home'));
const About = React.lazy(() => import('../components/About'));
const Products = React.lazy(() => import('../components/Products/Products'));
const Shop = React.lazy(() => import('../components/Shop/Shop'));
const ShopCart = React.lazy(() => import('../components/ShopCart/ShopCart'));
const CouponsList = React.lazy(() => import('../components/Coupon/CouponsList'));
const OrderList = React.lazy(() => import('../components/OrderList/OrderList'));
const NotFound = React.lazy(() => import('../components/NotFound'));
const ProductSelf = React.lazy(() => import('../components/Shop/ProductSelf'));


export default function Router() {
  const auth = useSelector(store => store.authState.auth);
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/shop-react"
            render={() => {
              return (
                <Redirect to="/shop-react/home" />
              )
            }}
          />
          <Route exact path='/shop-react/home' component={Home} />
          <Route path='/shop-react/about' component={About} />
          <Route path='/shop-react/login' component={Login} />
          <Route exact path='/shop-react/shop' component={Shop} />
          <Route path='/shop-react/shop/:id' component={ProductSelf} />
          <Route path='/shop-react/shopcart' component={ShopCart} />
          <PrivateRoute exact path='/shop-react/products' auth={auth} component={Products} />
          <PrivateRoute
            exact
            path='/shop-react/coupon'
            auth={auth}
            component={CouponsList} />
          <PrivateRoute
            exact
            path='/shop-react/orderList'
            auth={auth}
            component={OrderList} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ErrorBoundary >
  )
}