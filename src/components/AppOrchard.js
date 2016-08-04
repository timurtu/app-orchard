/**
 * Created by timur on 7/26/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Posts } from './Posts'
import {Footer} from './Footer'


const NavBar = () =>
  <nav>
    <h1>App Orchard</h1>
  </nav>

const AppOrchard = () =>
  <app-orchard>
    <NavBar/>
    <div className="wrapper">
      <Posts/>
    </div>
    <Footer/>
  </app-orchard>

ReactDOM.render(<AppOrchard/>, document.getElementById('app'))
