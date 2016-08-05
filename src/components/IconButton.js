/**
 * Created by timur on 8/4/16.
 */

import React from 'react'
import FontAwesome from 'react-fontawesome'

export const IconButton = props =>
  <span onClick={props.click}>
    <FontAwesome className="icon-button fa-2x" name={props.name}/>
  </span>
