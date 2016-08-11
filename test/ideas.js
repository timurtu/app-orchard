/**
 * Created by timur on 8/10/16.
 */

import { expect, assert } from 'chai'
import deepFreeze from 'deep-freeze'
import ideas from '../src/app/reducers/ideas'


describe('ideas', () => {
  
  describe('add', () => {
    it('should add a new idea object to the list', () => {
      
      const stateBefore = []
      const stateAfter = [
        {
          title: 'An app that ends world hunger',
          id: 0
        }
      ]
      
      expect(ideas(stateBefore, {
        type: 'add_idea',
        title: 'An app that ends world hunger',
        id: 0
      })).to.deep.equal(stateAfter)
      
    })
  })
  
})