/**
 * Created by timur on 8/4/16.
 */

jest.unmock('chai')
jest.unmock('../ideas')
jest.unmock('../../constants/actions')

import { expect } from 'chai'
import { ideas } from '../ideas'
import { add, remove } from '../../constants/actions'

describe('ideas reducer', function () {
  
  describe('add', function () {
    
    it('should add a new idea', function () {
      expect(ideas(0, add)).to.equal(1)
      expect(ideas(1, add)).to.equal(2)
    })
  })
  
  describe('remove', function () {
    
    it('should remove an idea', function () {
      expect(ideas(2, remove)).to.equal(1)
      expect(ideas(1, remove)).to.equal(0)
    })
  })
  
  describe('default action', function () {
    
    it('should return the same state', function () {
      expect(ideas(0, { type: 'other' })).to.equal(0)
    })
  })
})

