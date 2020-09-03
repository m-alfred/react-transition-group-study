import React from 'react';
import {
  BrowserRouter, Route,
} from 'react-router-dom';
import CSSTransition from '../css-transition'
import Transition from '../transition'


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
  }
]
export default function () {
  return <BrowserRouter >
  {routes.map(route => <Route key={route.path} {...route} />)}
</BrowserRouter>
}