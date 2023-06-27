 const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const sequelize = require('./util/database')

const userRoutes = require('./routes/user')

const errorController = require('./controllers/error')
app.use('/user', userRoutes)

app.use(errorController.getError)

app.listen(3000)
sequelize
.sync()
// .sync({force: true})
.then(() => {
    app.listen(3000)
})
.catch(err => console.log(err) )