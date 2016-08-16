/**
 * Created by timur on 8/12/16.
 */

import React from 'react'
import FontAwesome from 'react-fontawesome'
import shortId from 'shortid'
import store from '../store'


class IdeaForm extends React.Component {
  
  _tryAgain(message) {
    
    store.dispatch({
      type: 'add_alert',
      title: 'Try again!',
      alertType: 'warning',
      id: shortId.generate(),
      message
    })
  }
  
  _validate(strictTitle, title) {
    
    const minLength = 25
    const hasStrictIdeaTitle = title.startsWith(strictTitle)
    const isGreaterThanMinLength = title.length > minLength
    
    if (!hasStrictIdeaTitle) {
      this._tryAgain(`Your idea must start with "${strictTitle}".`)
    }
    
    if (!isGreaterThanMinLength) {
      this._tryAgain(`Your idea must be greater than ${minLength} characters.`)
    }
    
    if (hasStrictIdeaTitle && isGreaterThanMinLength) {
      
      store.dispatch({
        type: 'server/add_idea',
        title
      })
      
      return true
    }
  }
  
  
  render() {
    
    const strictTitle = 'An app that '
    
    const checkInput = e => {
      
      e.preventDefault()
      
      if (this._validate(strictTitle, this.input.value)) {
        this.input.value = strictTitle
      }
    }
    
    return (
      <form onSubmit={checkInput}>
        <input
          className="input-box-bottom"
          ref={ node => {
            this.input = node
          }}
          type="text"
          autoFocus="true"
          defaultValue={strictTitle}/>
        <div
          style={{
            position: 'fixed',
            right: '1em',
            bottom: '-0.125em',
            zIndex: 30
          }}
          onClick={checkInput}>
          
          <FontAwesome
            className="icon-button fa-3x"
            name="plus-circle"/>
        </div>
      </form>
    )
  }
}

export default IdeaForm
