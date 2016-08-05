/**
 * Created by timur on 8/4/16.
 */

import React from 'react'
import { store } from '../store'
import { IconButton } from './components'

export const Counter = () =>
  <div className="counter">
    <IconButton
      name="plus-circle"
      click={() => store.dispatch({ type: 'add' })}/>
    <IconButton
      name="minus-circle"
      click={() => store.dispatch({ type: 'subtract' })}/>
  </div>
