/**
 * Created by timur on 8/15/16.
 */

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { removeById } from '../../src/app/reducers/helper'


describe('removeById', () => {
  it('should remove an object from an array specified by id', () => {
    const before = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const after = [{ id: 1 }, { id: 3 }]
    
    deepFreeze(before)
    
    expect(removeById(2, before)).to.deep.equal(after)
  })
  it('should remove an object from the beginning of an array specified by id', () => {
    const before = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const after = [{ id: 2 }, { id: 3 }]
    
    deepFreeze(before)
    
    expect(removeById(1, before)).to.deep.equal(after)
  })
  it('should remove an object from the end of an array specified by id', () => {
    const before = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const after = [{ id: 1 }, { id: 2 }]
    
    deepFreeze(before)
    
    expect(removeById(3, before)).to.deep.equal(after)
  })
})
