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
          id: 0,
          stars: 0
        }
      ]
      
      expect(ideas(stateBefore, {
        type: 'add_idea',
        title: 'An app that ends world hunger',
        id: 0,
        stars: 0
      })).to.deep.equal(stateAfter)
      
    })
    it('should add a new idea object to the beginning of the list', () => {
      
      const stateBefore = [
        {
          title: 'An app that ends world hunger',
          id: 0,
          stars: 0
        }
      ]
      const stateAfter = [
        {
          title: 'An app that talks to animals',
          id: 1,
          stars: 0
        },
        {
          title: 'An app that ends world hunger',
          id: 0,
          stars: 0
        }
      ]
      
      expect(ideas(stateBefore, {
        type: 'add_idea',
        title: 'An app that talks to animals',
        id: 1
      })).to.deep.equal(stateAfter)
      
    })
  })
  
})