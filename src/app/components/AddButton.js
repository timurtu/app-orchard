/**
 * Created by timur on 8/4/16.
 */

import React from 'react'
import { store } from '../store'
import { IconButton } from './components'
import { add } from '../constants/actions'

export const AddButton = () =>
  <div style={{
    position: 'absolute',
    right: '1em',
    bottom: '.075em'
  }}>
    <IconButton
      name="plus-circle fa-3x"
      click={() => store.dispatch(add)}/>
  </div>
