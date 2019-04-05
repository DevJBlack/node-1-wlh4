const users = require('./users')

function getUsers(req, res) {
  return res.send(users);
}

function getUserById(req, res) {
  console.log(1111111, req.params)

  let { userId } = req.params
  let user = users.filter(user => {
    return +user.id === +userId
  })
  res.send(user[0])
}

function getUserByEmail(req, res) {
  let { email } = req.query
  let user =  users.filter(user => user.email === email)
  res.send(user[0])
}

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById
}



