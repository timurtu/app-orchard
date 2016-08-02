/**
 * Created by timur on 7/26/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import dom from 'domali'

import { NavBar } from './NavBar'
import { Footer } from './Footer'
import { Posts } from './Posts'


class AppOrchard extends React.Component {
  render() {
    return (
      <app-orchard>
        <NavBar/>
        <div className="wrapper">
          <Posts/>
        </div>
        <Footer/>
      </app-orchard>
    )
  }
}

ReactDOM.render(<AppOrchard/>, dom.getId('app'))
