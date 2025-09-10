import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import {Provider} from 'react-redux'
import Store from '../Store/Store'


const Layout = () => {
  return (
    <>
    <Provider store={Store}>
    <div> 
      <Header/>
      <Outlet/>
    </div>
    </Provider>
    </>
  )
}

export default Layout
