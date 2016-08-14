/**
 * Created by timur on 8/12/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import IdeaList from './IdeaList'
import Alerts from './Alerts'
import IdeaForm from './IdeaForm'
import store from '../store'


const LOG_APP_STATE = false

const AppOrchard = ({ alerts, ideas }) =>
  <div className="container">
    <nav>
      <h1>App Orchard</h1>
    </nav>
    
    <div className="wrapper">
      <Alerts alerts={alerts}/>
      <IdeaList ideas={ideas}/>
    </div>
    
    <footer>
      <IdeaForm/>
    </footer>
  </div>


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
