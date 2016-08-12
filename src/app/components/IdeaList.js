/**
 * Created by timur on 8/9/16.
 */

import React from 'react'
import { IconButton } from './components'
import store from '../store'


const title = 'An app that '

class IdeaList extends React.Component {
  
  render() {
    
    const { ideas } = this.props
    
    return (
      <div>
        
        <input
          ref={ node => {
            this.input = node
          }}
          autoFocus="true"
          defaultValue={title}
          className="input-box-bottom"/>
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
              const inputValue = this.input.value
              const isStrictIdeaTitle = inputValue.startsWith(title)
              const isGreaterThanMinLength = inputValue.length > minLength
              
              if (isStrictIdeaTitle && isGreaterThanMinLength) {
                
                store.dispatch({
                  type: 'add_idea',
                  title: inputValue,
                  id: Math.floor(Math.random() * Date.now())
                })
                
                this.input.value = title
              }
              
              if (!isStrictIdeaTitle) {
                console.log(`Your idea must start with "${title}".`)
                this.input.value = title
              }
              
              if (!isGreaterThanMinLength) {
                console.log(`Your idea must be greater than ${minLength} characters.`)
              }
              this.input.value = title
              
            }}/>
        </div>
        <ul>
          {ideas
            .map(idea =>
              <li key={idea.id} className="post">
                <h1>{idea.title}</h1>
                <small>{idea.author} <i className="fa fa-user"/></small>
                <small className="pull-right">{idea.stars} <i className="fa fa-star"/></small>
                <img src={idea.image}/>
                <p>{idea.info}</p>
              </li>
            )}
        </ul>
      </div>
    )
  }
}


export default IdeaList
