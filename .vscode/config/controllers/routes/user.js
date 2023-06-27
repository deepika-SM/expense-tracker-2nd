const express = require('express')

const userController = require('../controllers/user')

const router = express()

router.get('/details', (req, res) => {
    res.json({hello: 'hello'})
})
router.get('/details', userController.getUserDetails)

router.post('/details', (req, res) => {
    res.json({hello: 'hello'})
})
router.post('/details', userController.postUserDetails)

module.exports = router
