/**
 * Created by timur on 7/26/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { store } from '../store'
import { Posts, Footer, Toolbar } from './components'

store.subscribe(() => console.log(store.getState())) // eslint-disable-line

const AppOrchard = () =>
  <app-orchard>
    <Toolbar title="App Orchard"/>
    <div className="wrapper">
      <Posts/>
    </div>
    <Footer/>
  </app-orchard>

ReactDOM.render(<AppOrchard/>, document.getElementById('app'))
