/**
 * Created by timur on 8/4/16.
 */

import React from 'react'
import { store } from '../store'
import { IconButton } from './components'
import { add, subtract } from '../constants/actions'

export const Counter = () =>
  <div className="counter">
    <IconButton
      name="plus-circle"
      click={() => store.dispatch(add)}/>
    <IconButton
      name="minus-circle"
      click={() => store.dispatch(subtract)}/>
  </div>
