
/////////////////////////////////////
//// Import Dependencies         ////
/////////////////////////////////////

const express = require('express') 
const morgan = require('morgan') 
require('dotenv').config() 
const path = require('path') 
// const catRouter = require('./controllers/catControllers')
// const UserRouter = require('./controllers/userControllers')
// const CommentRouter = require('./controllers/commentControllers')
//const middleware = require('./utils/middleware')


const app = express()

/////////////////////////////////////
//// Middleware                  ////
/////////////////////////////////////

//middleware(app)


/////////////////////////////////////
//// Routes                      ////
/////////////////////////////////////
app.get('/', (req, res) => {
    res.send('Server is live, ready for requests')
})


// app.use('/cats', catRouter)
// app.use('/comments', CommentRouter)
// app.use('/users', UserRouter)

/////////////////////////////////////
//// Server Listener             ////
/////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now listening to the sweet sounds of port: ${PORT}`))

