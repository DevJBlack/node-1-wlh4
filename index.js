const express = require('express')

const UsersCtrl = require('./usersCtrl')

const app = express()
const port = 5000

app.get('/api/users', UsersCtrl.getUsers)
app.get('/api/users/:userId', UsersCtrl.getUserById)
app.get('/api/user', UsersCtrl.getUserByEmail)


app.listen(port, () => {
  console.log('listening on port', port)
})
