/**
 * Created by timur on 8/4/16.
 */

import React from 'react'
import { store } from '../store'
import { IconButton } from './components'

export const Counter = () =>
  <div className="icons">
    <span onClick={() => store.dispatch({ type: 'add' })}>
      <IconButton name="plus-circle"/>
    </span>
    <span onClick={() => store.dispatch({ type: 'subtract' })}>
      <IconButton name="minus-circle"/>
    </span>
  </div>
