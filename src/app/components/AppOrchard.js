/**
 * Created by timur on 7/26/16.
 */

import '../styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Posts, Footer, Toolbar } from './components'
import IdeaList from './IdeaList'
import Dialog from './Dialog'
import store from '../store'

const AppOrchard = ({ ideas }) => (
  <div className="container">
    <Toolbar title="App Orchard"/>
    <div className="wrapper">
      {/*<Dialog/>*/}
      <IdeaList ideas={ideas}/>
      {/*<Posts/>*/}
    </div>
    <Footer/>
  </div>
)

const render = () => {
  
  console.log(store.getState())
  
  ReactDOM.render(
    <AppOrchard {...store.getState()}/>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
