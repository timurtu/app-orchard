/**
 * Created by timur on 8/10/16.
 */

import { expect, assert } from 'chai'
import deepFreeze from 'deep-freeze'
import ideas from '../../src/app/reducers/ideas'


describe('ideas reducer', () => {
  
  describe('fill ideas', () => {
    
    it('should fill the state with existing ideas', () => {
      
      const stateBefore = []
      const stateAfter = [
        {
          title: 'An app that ends world hunger',
          id: 0,
          stars: 4
        },
        {
          title: 'An app that talks to animals',
          id: 1,
          stars: 16
        },
        {
          title: 'An app that does something amazing',
          id: 2,
          stars: 32
        }
      ]
      
      deepFreeze(stateBefore)
      
      expect(ideas(stateBefore, {
        type: 'server/fill_ideas',
        ideas: stateAfter
      })).to.deep.equal(stateAfter)
    })
  })
  
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
        type: 'server/add_idea',
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
        type: 'server/add_idea',
        title: 'An app that talks to animals',
        id: 1
      })).to.deep.equal(stateAfter)
    })
    
  })
  
  describe('remove idea', () => {
    
    it('should remove an idea from the ideas array by id', () => {
      
      const stateBefore = [
        {
          title: 'An app that ends world hunger',
          id: 0,
          stars: 0
        }
      ]
      const stateAfter = []
      
      deepFreeze(stateBefore)
      
      expect(ideas(stateBefore, {
        type: 'server/remove_idea',
        id: 0
      })).to.deep.equal(stateAfter)
    })
    
    it('should remove an idea from the beginning of the ideas array by id', () => {
      
      const stateBefore = [
        {
          title: 'An app that ends world hunger',
          id: 1,
          stars: 0
        },
        {
          title: 'An app that talks to animals',
          id: 2,
          stars: 0
        },
        {
          title: 'An app that changes the world',
          id: 3,
          stars: 0
        }
      ]
      
      const stateAfter = [
        {
          title: 'An app that talks to animals',
          id: 2,
          stars: 0
        },
        {
          title: 'An app that changes the world',
          id: 3,
          stars: 0
        }
      ]
      
      deepFreeze(stateBefore)
      
      expect(ideas(stateBefore, {
        type: 'server/remove_idea',
        id: 1
      })).to.deep.equal(stateAfter)
    })
    
    it('should remove an idea from the end of the ideas array by id', () => {
      const stateBefore = [
        {
          title: 'An app that ends world hunger',
          id: 1,
          stars: 0
        },
        {
          title: 'An app that talks to animals',
          id: 2,
          stars: 0
        },
        {
          title: 'An app that changes the world',
          id: 3,
          stars: 0
        }
      ]
  
      const stateAfter = [
        {
          title: 'An app that ends world hunger',
          id: 1,
          stars: 0
        },
        {
          title: 'An app that talks to animals',
          id: 2,
          stars: 0
        }
      ]
  
      deepFreeze(stateBefore)
  
      expect(ideas(stateBefore, {
        type: 'server/remove_idea',
        id: 3
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
        type: 'server/star',
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
        type: 'server/unstar',
        id: 0
      })).to.deep.equal(stateAfter)
      
    })
    
  })
  
})
