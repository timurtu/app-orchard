/**
 * Created by timur on 8/7/16.
 */

import path from 'path'
import log from 'gutil-color-log'
import express from 'express'
import PouchDB from 'pouchdb'
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const db = new PouchDB('db')


server.listen(3000)
app.use(express.static(path.resolve('dist')))
log('cyan', 'Server running at http://localhost:3000')

io.on('connection', socket => {
  
  socket.emit('action', {
    type: 'server/fill_ideas',
    ideas: [{
      title: 'An app that changes the world',
      id: new Date().toISOString(),
      stars: 3
    }]
  })
  
  socket.on('action', action => {
    /* eslint-disable indent */
    switch (action.type) {
      
      case 'server/add_idea':
        return storeIdea(action)
    }
    /* eslint-enable indent */
  })
})

const storeIdea = action =>
  db.put({
    _id: new Date().toISOString(),
    title: action.title
  })
    .then(() => db.info())
    .then(serverLog)
    .catch(e => log('red', `Store failure ${e}`))

const serverLog = msg => log('cyan', JSON.stringify(msg, null, 2))
