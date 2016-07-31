/**
 * Created by timur on 7/31/16.
 */

import React from 'react'

import { Posts } from './Posts'


export class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Posts/>
      </div>
    )
  }
}
