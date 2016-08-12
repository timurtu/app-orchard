/**
 * Created by timur on 8/4/16.
 */

import React from 'react'
import store from '../store'
import { IconButton } from './components'
import { add } from '../constants/actions'


const AddButton = ({input}) =>
  <div style={{
    position: 'fixed',
    right: '1em',
    bottom: '-0.125em',
    zIndex: 30
  }}>
    <IconButton
      name="plus-circle fa-3x"
      click={() => {
        
        const minLength = 25
        const inputValue = input.value
        const isStrictIdeaTitle = inputValue.startsWith(title)
        const isGreaterThanMinLength = inputValue.length > minLength
        
        if (isStrictIdeaTitle && isGreaterThanMinLength) {
          
          store.dispatch(Object.assign({}, add, {
            title: inputValue,
            id: Math.floor(Math.random() * Date.now())
          }))
          input.value = title
        }
        
        if (!isStrictIdeaTitle) {
          console.log(`Your idea must start with "${title}".`)
          this.input.value = title
        }
        
        if (!isGreaterThanMinLength) {
          console.log(`Your idea must be greater than ${minLength} characters.`)
        }
      }}/>
  </div>

export default AddButton
