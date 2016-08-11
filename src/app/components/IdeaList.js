/**
 * Created by timur on 8/9/16.
 */

import React from 'react'
import store from '../store'
import { IconButton } from './components'


let nextTodoId = 0
export default class IdeaList extends React.Component {
  
  render() {
    
    const { ideas } = this.props
    
    const title = 'An app that '
    
    return (
      <div>
        <input ref={node => {
          this.input = node
        }} autoFocus="true" defaultValue={title} className="input-box-bottom"/>
        
        <div style={{
          position: 'fixed',
          right: '1em',
          bottom: '.075em',
          zIndex: 30
        }}>
          <IconButton
            name="plus-circle fa-3x"
            click={() => {
              
              store.dispatch({
                type: 'ADD_TODO',
                text: this.input.value,
                id: nextTodoId++
              })
              
              this.input.value = title
            }}/>
        </div>
        <ul>
          {ideas.map(idea =>
            <li key={idea.id}
                onClick={() => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: idea.id
                  })
                }}>
              {idea.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
