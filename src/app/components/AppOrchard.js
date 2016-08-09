/**
 * Created by timur on 7/26/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { store } from '../store'
import { Posts, Footer, Toolbar } from './components'


class AppOrchard extends React.Component {
  
  render() {
    return (
      <div>
        <Toolbar title="App Orchard"/>
        <div className="wrapper">
          <Posts/>
        </div>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<AppOrchard/>, document.getElementById('root'))
