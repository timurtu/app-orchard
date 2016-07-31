/**
 * Created by timur on 7/26/16.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import dom from 'domali'

import { NavBar } from './NavBar'
import { Wrapper } from './Wrapper'


class AppOrchard extends React.Component {
  render() {
    return (
      <app-orchard>
        <NavBar/>
        <Wrapper/>
      </app-orchard>
    )
  }
}

ReactDOM.render(<AppOrchard/>, dom.getId('app'))
