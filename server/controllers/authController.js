const express = require('express')
const {registerUser, loginUser} = require("../services/authServices.js")
const router = express.Router()

router.post('/register', (req, res) => {
    registerUser(req.body)
    .then((userData) => {
        res.json(userData);
    })
    .catch(err => console.log(err))
})

router.post('/login', (req, res) => {
    loginUser(req.body)
    .then((userData) => {
        res.json(userData);
    })
    .catch(err => console.log(err))
})

router.get('/get-session', (req, res) => {
    console.log(req.session)
    res.json(req.session)
})

module.exports = router