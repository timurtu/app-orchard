/**
 * Created by timur on 8/4/16.
 */

jest.unmock('chai')
jest.unmock('../counter')
jest.unmock('../../constants/actions')

import { expect } from 'chai'
import counter from '../counter'
import { add, subtract } from '../../constants/actions'

describe('counter reducer', function () {
  
  describe('add action', function () {
    
    it('should add a value to the state', function () {
      expect(counter(0, add)).to.equal(1)
      expect(counter(1, add)).to.equal(2)
    })
  })
  
  describe('subtract action', function () {
    
    it('should remove a value from the state', function () {
      expect(counter(2, subtract)).to.equal(1)
      expect(counter(1, subtract)).to.equal(0)
    })
  })
  
  describe('default action', function () {
    
    it('should return the same state', function () {
      expect(counter(0, { type: 'other' })).to.equal(0)
    })
  })
})

