/**
 * Created by timur on 7/31/16.
 */

import React from 'react'

import { ideas } from '../fixtures/ideas'


export const Posts = props =>
  <ul>
    {ideas.map(idea =>
      <li key={idea.id} className="post">
        <h1>{idea.name}</h1>
        <small className="stars">{idea.stars} stars</small>
        <small>Posted by {idea.author}</small>
        <img src={idea.image}/>
        <p>{idea.info}</p>
        <small className="comments">{idea.stars} comments</small>
      </li>
    )}
  </ul>
