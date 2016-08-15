/**
 * Created by timur on 8/14/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import AppOrchard from './components/AppOrchard'
import store from './store'

const LOG_APP_STATE = false

const render = () => {
  
  if (LOG_APP_STATE) {
    console.log(store.getState()) // eslint-disable-line
  }
  
  ReactDOM.render(
    <AppOrchard {...store.getState()}/>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()

