/**
 * Created by timur on 8/9/16.
 */

jest.unmock('deep-freeze')
jest.unmock('../todos')

import deepFreeze from 'deep-freeze'
import { todos } from '../todos'

describe('todos', function() {
  describe('add', function() {
    it('should add a new todo', () => {
      const stateBefore = []
      const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
      }
      const stateAfter = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        }
      ]
      
      deepFreeze(stateBefore)
      deepFreeze(action)
      
      expect(todos(stateBefore, action))
        .toEqual(stateAfter)
      
    })
    it('should toggle a todo', () => {
      const stateBefore = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        },
        {
          id: 1,
          text: 'Go Shopping',
          completed: false
        }
      ]
      const action = {
        type: 'TOGGLE_TODO',
        id: 1,
        text: 'Learn Redux'
      }
      const stateAfter = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false,
        },
        {
          id: 1,
          text: 'Go Shopping',
          completed: true
        }
      ]
      
      deepFreeze(stateBefore)
      deepFreeze(action)
      
      expect(todos(stateBefore, action))
        .toEqual(stateAfter)
      
    })
  
    it('should return the same list of todos', () => {
      const stateBefore = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false
        },
        {
          id: 1,
          text: 'Go Shopping',
          completed: false
        }
      ]
      const action = {
        type: 'OTHER'
      }
      const stateAfter = [
        {
          id: 0,
          text: 'Learn Redux',
          completed: false,
        },
        {
          id: 1,
          text: 'Go Shopping',
          completed: false
        }
      ]
  
      deepFreeze(stateBefore)
      deepFreeze(action)
  
      expect(todos(stateBefore, action))
        .toEqual(stateAfter)
    })
  })
})
