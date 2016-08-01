/**
 * Created by timur on 7/31/16.
 */

import React from 'react'


export class NavBar extends React.Component {
  render() {
    return(
      <nav>
        <h1>{this.props.title}</h1>
      </nav>
    )
  }
}
