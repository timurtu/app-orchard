/**
 * Created by timur on 7/31/16.
 */

import React from 'react'

import { ideas } from '../fixtures/ideas'


export class Posts extends React.Component {
  render() {
    return (
      <ul>
        {
          ideas.map(idea =>
            <li key={idea.id} className="post">
              <h1>{idea.name}</h1>
              <small className="friends">{idea.friends} friends</small>
              <small>{idea.subinfo}</small>
              <p>{idea.info}</p>
            </li>
          )
        }
      </ul>
    )
  }
}
