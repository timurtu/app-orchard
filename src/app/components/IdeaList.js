/**
 * Created by timur on 8/12/16.
 */

import React from 'react'
import FontAwesome from 'react-fontawesome'
import store from '../store'


const IdeaList = ({ ideas }) =>
  <ul>
    {ideas.map(idea =>
      <li key={idea.id} className="post">
        <h1>{idea.title}</h1>
        <small
          className="icon-button"
          onClick={() => {
            
            if (idea.isStarred) {
              store.dispatch({
                type: 'server/unstar',
                id: idea.id
              })
            } else {
              store.dispatch({
                type: 'server/star',
                id: idea.id
              })
            }
          }}
          style={{
            color: idea.isStarred ?
              '#3cab7f' :
              'rgba(0, 0, 0, 0.5)'
          }}>
          {idea.stars} <FontAwesome name="star"/>
        </small>
      </li>
    )}
  </ul>

export default IdeaList
