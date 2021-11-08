import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import CSSTransition from 'src/containers/css-transition'
import Transition from 'src/containers/transition'
import CSS3d from 'src/containers/css-3d'
import CSS3dLayer from 'src/containers/css-3d-layer'
import Amazing from 'src/containers/amazing'


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
    path: '/css-3d',
    exact: true,
    component: CSS3d,
  },
  {
    path: '/css-3d-layer',
    exact: true,
    component: CSS3dLayer,
  },
  {
    path: '/amazing',
    exact: true,
    component: Amazing,
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