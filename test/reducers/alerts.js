/**
 * Created by timur on 8/12/16.
 */

import { expect, assert } from 'chai'
import deepFreeze from 'deep-freeze'
import alerts from '../../src/app/reducers/alerts'


describe('alerts reducer', () => {
  
  describe('add alert', () => {
    
    it('should add a new alert to an empty alert array', () => {
      
      const stateBefore = []
      const stateAfter = [
        {
          title: 'Warning!',
          message: 'this is a warning log message',
          id: 0,
          alertType: 'warning'
        }
      ]
      
      deepFreeze(stateBefore)
      
      expect(alerts(stateBefore, {
        type: 'add_alert',
        title: 'Warning!',
        message: 'this is a warning log message',
        id: 0,
        alertType: 'warning'
      })).to.deep.equal(stateAfter)
    })
    
    it('should add a new alert to the beginning of an existing alert array', () => {
      
      const stateBefore = [
        {
          title: 'Warning!',
          message: 'this is a warning log message',
          id: 0,
          alertType: 'warning'
        }
      ]
      
      const stateAfter = [
        {
          title: 'Success!',
          message: 'this is a success log message',
          id: 1,
          alertType: 'success'
        },
        {
          title: 'Warning!',
          message: 'this is a warning log message',
          id: 0,
          alertType: 'warning'
        }
      ]
      
      deepFreeze(stateBefore)
      
      expect(alerts(stateBefore, {
        type: 'add_alert',
        title: 'Success!',
        message: 'this is a success log message',
        id: 1,
        alertType: 'success'
      })).to.deep.equal(stateAfter)
    })
  })
  
  describe('remove alert', () => {
    
    it('should remove an alert from an alert array', () => {
      
      const stateBefore = [
        {
          title: 'Warning!',
          message: 'this is a warning log message',
          id: 0,
          alertType: 'warning'
        }
      ]
      const stateAfter = []
      
      deepFreeze(stateBefore)
      
      expect(alerts(stateBefore, {
        type: 'remove_alert',
        id: 0
      })).to.deep.equal(stateAfter)
    })
    
    it('should remove an alert from an alert array with 2 items', () => {
      
      const stateBefore = [
        {
          title: 'Success!',
          message: 'this is a success log message',
          id: 1,
          alertType: 'success'
        },
        {
          title: 'Warning!',
          message: 'this is a warning log message',
          id: 0,
          alertType: 'warning'
        }
      ]
      
      const stateAfter = [
        {
          title: 'Warning!',
          message: 'this is a warning log message',
          id: 0,
          alertType: 'warning'
        }
      ]
      
      deepFreeze(stateBefore)
      
      expect(alerts(stateBefore, {
        type: 'remove_alert',
        id: 1
      })).to.deep.equal(stateAfter)
    })
  })
})
