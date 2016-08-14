/**
 * Created by timur on 8/7/16.
 */

import path from 'path'
import log from 'gutil-color-log'
import express from 'express'
// import db from 'pouchdb'

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)


io.on('connection', socket => {
  socket.on('action', action => {
    /* eslint-disable indent */
    switch(action.type) {
      case 'server/add_idea':
        return log('blue', JSON.stringify(action, null, 2))
      default:
    }
    /* eslint-enable indent */
  })
})

server.listen(3000)

app.use(express.static(path.resolve('dist')))

log('cyan', 'express app running at http://localhost:3000')
