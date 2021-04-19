// /*APP AND PORT*/ 
const express = require('express')
const app = express()
const port = 4000
/*MIDDLEWARE*/
const bodyParser = require('body-parser');
/*CORS*/
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*emtpy json for user*/
const user = {
    email: '',
    name: '',
    password: ''
}
/*END POINT LOGIN*/
app.put('/login', (req, res) => {
  // const formLoginEmail = document.getElementById('form-login-email');
  // const formLoginPassword = document.getElementById('form-login-password');
  const verifyUser = {
    email: '',
    password: ''
  }
  verifyUser.email = req.body.email
  verifyUser.password = req.body.password

  if (verifyUser.email === user.email && verifyUser.password == user.password) {
    res.send({ logged: verifyUser })
  }
  else {
    res.status(404).send({ error: 'Invalid credentials' })
  }
})

/*END POINT REGISTER*/
app.post('/register', (req, res) => {
  user.email = req.body.email
  user.name = req.body.name
  user.password = req.body.password
  res.send({ registered: user });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})