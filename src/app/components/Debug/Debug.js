/**
 * Created by timur on 8/12/16.
 */

import React from 'react'

const Debug = ({ ideas }) =>
  <ul>
    {ideas.map(idea =>
      <li key={idea.id}>{idea.title}</li>
    )}
  </ul>

export default Debug
