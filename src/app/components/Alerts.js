/**
 * Created by timur on 8/12/16.
 */

import React from 'react'
import store from '../store'


const Alerts = ({ alerts }) =>
  <ul>
    {alerts.map(alert =>
      <li key={alert.id}>
        <div
          className={`alert alert-${alert.alertType} alert-dismissible fade in`}>
          <button
            onClick={() => {
              store.dispatch({
                type: 'remove_alert',
                id: alert.id
              })
            }}
            style={{
              outline: '0'
            }}
            className="close">
            <span>&times;</span>
          </button>
          <strong>{alert.title}</strong> {alert.message}
        </div>
      </li>
    )}
  </ul>

export default Alerts
