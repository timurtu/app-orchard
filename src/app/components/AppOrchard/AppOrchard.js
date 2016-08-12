/**
 * Created by timur on 8/12/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import Debug from '../Debug/Debug'
import IdeaForm from '../IdeaForm/IdeaForm'
import dom from 'domali'
import store from '../../store'


const AppOrchard = ({ ideas }) =>
  <div>
    <h1>App Orchard</h1>
    <IdeaForm/>
    <Debug ideas={ideas}/>
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
