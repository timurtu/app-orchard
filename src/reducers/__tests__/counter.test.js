/**
 * Created by timur on 8/4/16.
 */

jest.unmock('../counter')
jest.unmock('chai')

import { expect } from 'chai'
import counter from '../counter'


describe('counter reducer', function () {
  
  describe('add', function () {
    
    it('should add a value to the state', function() {
      expect(counter(0, { type: 'add' })).to.equal(1)
      expect(counter(1, { type: 'add' })).to.equal(2)
    })
  })
  
  describe('subtract', function () {
    
    it('should remove a value from the state', function() {
      expect(counter(2, { type: 'subtract' })).to.equal(1)
      expect(counter(1, { type: 'subtract' })).to.equal(0)
    })
  })
  
  describe('default', function () {
    
    it('should return the same state', function () {
      expect(counter(0, { type: 'other' })).to.equal(0)
    })
  })
})

