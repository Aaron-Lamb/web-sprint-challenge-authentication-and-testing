const router = require('express').Router();
const auth = require('./auth-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {restrict} = require('./authenticate-middleware');

router.post('/register', async (req, res) => {
  try{
    const {username, password} = req.body;
    const user = await auth.getUserBy({ username });

    if(user){
      return res.status(409).json({
        message: "Username is taken"
      })
    }

    const newUser = await auth.addUser({
      username,
      password: await bcrypt.hash(password, 13)
    })

    return res.status(200).json({
      message: `Welcome ${username}`
    })

  } catch(error){
    console.log(error)
  }
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
