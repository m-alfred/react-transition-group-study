import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import CSSTransition from '../containers/css-transition'
import Transition from '../containers/transition'

const Page404 = function (props) {
  return <div >404</div>
}

const routes = [
  {
    path: '/transition',
    exact: true,
    component: Transition,
  },
  {
    path: '/css-transition',
    exact: true,
    component: CSSTransition,
  },
  {
    path: '*',
    exact: true,
    component: Page404,
  }
]
export default function () {
  return <BrowserRouter >
  <Switch >
    <Redirect exact from='/' to={routes[0].path} ></Redirect>
    {routes.map(route => <Route key={route.path} {...route} />)}
  </Switch>
</BrowserRouter>
}