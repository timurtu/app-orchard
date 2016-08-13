/**
 * Created by timur on 8/12/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import IdeaList from './IdeaList'
import Alerts from './Alerts'
import IdeaForm from './IdeaForm'
import dom from 'domali'
import store from '../store'


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
  
  console.log(store.getState())
  
  ReactDOM.render(
    <AppOrchard {...store.getState()}/>,
    dom.getId('root')
  )
}

store.subscribe(render)
render()
