/**
 * Created by timur on 7/31/16.
 */

import React from 'react'
import { ideas } from '../fixtures/ideas'

export const Posts = () =>
  <ul>
    {ideas.map(idea =>
      <li key={idea.id} className="post">
        <h1>{idea.name}</h1>
        <small>{idea.author} <i className="fa fa-user"/></small>
        <small className="stars">{idea.stars} <i className="fa fa-star"/></small>
        <img src={idea.image}/>
        <p>{idea.info}</p>
        <small className="comments">{idea.stars} <i className="fa fa-comment"/></small>
      </li>
    )}
  </ul>
