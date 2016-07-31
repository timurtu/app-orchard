/**
 * Created by timur on 7/31/16.
 */

import dom from 'domali'

import { posts } from './posts'


const wrapper = dom.create('div')
  .set({ class: 'wrapper' })

wrapper.appendChild(posts)

export default wrapper
