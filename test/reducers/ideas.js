/**
 * Created by timur on 8/10/16.
 */

import { expect, assert } from 'chai'
import deepFreeze from 'deep-freeze'
import ideas from '../../src/app/reducers/ideas'


describe('ideas reducer', () => {
  
  describe('add idea', () => {
    
    it('should add a new idea to an empty ideas array', () => {
      
      const stateBefore = []
      const stateAfter = [
        {
          title: 'An app that ends world hunger',
          id: 0,
          stars: 0
        }
      ]
      
      deepFreeze(stateBefore)
      
      expect(ideas(stateBefore, {
        type: 'add_idea',
        title: 'An app that ends world hunger',
        id: 0
      })).to.deep.equal(stateAfter)
    })
    
    it('should add a new idea to the beginning of an existing ideas array', () => {
      
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
      
      deepFreeze(stateBefore)
      
      expect(ideas(stateBefore, {
        type: 'add_idea',
        title: 'An app that talks to animals',
        id: 1
      })).to.deep.equal(stateAfter)
    })
 
  })
  
  describe('star idea', () => {
  
    it('should make an idea set to starred for a user', () => {
      const stateBefore = [
        {
          title: 'An app that ends world hunger',
          id: 0,
          stars: 0
        }
      ]
      const stateAfter = [
        {
          title: 'An app that ends world hunger',
          id: 0,
          stars: 1,
          isStarred: true
        }
      ]
      
      deepFreeze(stateBefore)
      
      expect(ideas(stateBefore, {
        type: 'star',
        id: 0
      })).to.deep.equal(stateAfter)
      
    })
    
  })
  
  describe('unstar idea', () => {
    
    it('should make an idea set to not starred for a user', () => {
      const stateBefore = [
        {
          title: 'An app that ends world hunger',
          id: 0,
          stars: 1,
          isStarred: true
        }
      ]
      const stateAfter = [
        {
          title: 'An app that ends world hunger',
          id: 0,
          stars: 0,
          isStarred: false
        }
      ]
      
      deepFreeze(stateBefore)
      
      expect(ideas(stateBefore, {
        type: 'unstar',
        id: 0
      })).to.deep.equal(stateAfter)
      
    })
    
  })
  
})