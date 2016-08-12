/**
 * Created by timur on 8/12/16.
 */

import React from 'react'
import store from '../../store'


class IdeaForm extends React.Component {
  
  _validate(strictTitle, title) {
    
    const minLength = 25
    const hasStrictIdeaTitle = title.startsWith(strictTitle)
    const isGreaterThanMinLength = title.length > minLength
    
    if (!hasStrictIdeaTitle) {
      alert(`Your idea must start with "${strictTitle}".`)
    }
    
    if (!isGreaterThanMinLength) {
      alert(`Your idea must be greater than ${minLength} characters.`)
    }
    
    return hasStrictIdeaTitle && isGreaterThanMinLength
  }
  
  
  render() {
    
    const strictTitle = 'An app that '
    
    return (
      <form
        onSubmit={e => {
          
          e.preventDefault()
          
          if (this._validate(strictTitle, this.input.value)) {
            
            alert('Idea created successfully.')
            
            store.dispatch({
              type: 'add_idea',
              title: this.input.value,
              id: Math.floor(Math.random() * Date.now())
            })
            
            this.input.value = strictTitle
          }
        }}>
        <input
          ref={ node => {
            this.input = node
          }}
          type="text"
          autoFocus="true"
          defaultValue='An app that '/>
        <input
          type="submit"
          value="Add idea"/>
      </form>
    )
  }
}

export default IdeaForm
