/**
 * Created by timur on 8/9/16.
 */

jest.unmock('deep-freeze')
jest.unmock('../removeIdea')

import deepFreeze from 'deep-freeze'
import { removeIdea } from '../removeIdea'


describe('removeIdea', () => {
  
  it('should remove an idea from the list of ideas', () => {
    
    const listBefore = [0, 10, 20]
    const listAfter = [0, 20]
    
    deepFreeze(listBefore)
  
    expect(removeIdea(listBefore, 1)).toEqual(listAfter)
  })
})
