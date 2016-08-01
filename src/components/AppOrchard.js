/**
 * Created by timur on 7/26/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import dom from 'domali'

import { NavBar } from './NavBar'
import { Posts } from './Posts'


class AppOrchard extends React.Component {
  render() {
    return (
      <app-orchard>
        <NavBar title="App Orchard" />
        <div className="wrapper">
          <Posts/>
        </div>
      </app-orchard>
    )
  }
}

ReactDOM.render(<AppOrchard/>, dom.getId('app'))
