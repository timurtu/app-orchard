/**
 * Created by timur on 8/9/16.
 */

jest.unmock('deep-freeze')
jest.unmock('../addIdea')

import deepFreeze from 'deep-freeze'
import { addIdea } from '../addIdea'

describe('addIdea', () => {
  
  it('should add an idea to the list of ideas', () => {
    const listBefore = []
    const listAfter = [0]
    
    deepFreeze(listBefore)
  
    expect(addIdea(listBefore)).toEqual(listAfter)
  })
})
