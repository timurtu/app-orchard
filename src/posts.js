/**
 * Created by timur on 7/31/16.
 */

import dom from 'domali'

import { ideas } from './ideas'
import { addText } from './utils'


const createPost = (idea) => {
  
  const [ post, name, friends, subinfo, info ] = dom.create('li', 'h1', 'small', 'small', 'p')
  
  addText(name, idea.name)
  addText(subinfo, idea.subinfo)
  addText(friends, `${idea.friends} friends`)
  addText(info, idea.info)
  
  friends.set({ class: 'friends' })
  
  post.appendChild(name)
  post.appendChild(friends)
  post.appendChild(subinfo)
  post.appendChild(info)
  
  return post.set({ class: 'post' })
}

export const posts = ideas.reduce((container, idea) => {
  
  container.appendChild(createPost(idea))
  
  return container
  
}, dom.create('ul'))