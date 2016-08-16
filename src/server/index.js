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
  
  fillIdeas(socket)
  
  socket.on('action', action => {
    /* eslint-disable indent */
    switch (action.type) {
      
      case 'server/add_idea':
        return storeNewIdea(action)
    }
    /* eslint-enable indent */
  })
})

const fillIdeas = socket =>
  db.allDocs({ include_docs: true, descending: true })
    .then(result => {
      
      const ideas = result.rows.map(row => {
        return {
          id: row.doc._id,
          title: row.doc.title,
          stars: row.doc.stars
        }
      })
      
      socket.emit('action', {
        type: 'server/fill_ideas',
        ideas
      })
    })
    .catch(err => log('red', `Fill ideas failure ${err}`))

const storeNewIdea = action =>
  db.put({
    _id: new Date().toISOString(),
    title: action.title,
    stars: 0
  })
    .then(() => db.info())
    .then(prettyPrint)
    .catch(e => log('red', `Store idea failure ${e}`))

const prettyPrint = msg => log('cyan', JSON.stringify(msg, null, 2))
  