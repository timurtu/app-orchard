/**
 * Created by timur on 7/31/16.
 */

import React from 'react'

import { ideas } from '../fixtures/ideas'


export class Posts extends React.Component {
  render() {
    return (
      <ul>
        {this._getPosts()}
      </ul>
    )
  }
  
  _getPosts() {
    return ideas.map(idea =>
      <li key={idea.id} className="post">
        <h1>{idea.name}</h1>
        <small className="stars">{idea.stars} stars</small>
        <small>Posted by {idea.author}</small>
        <div className="image">
          <img src="http://lorempixel.com/300/120"/>
        </div>
        <p>{idea.info}</p>
        <small className="comments">{idea.stars} comments</small>
      </li>
    )
  }
  
}
