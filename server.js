require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routes/productRoute')
// const userRouter = require('./routes/userRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors')


const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND
const PORT = process.env.PORT || 3000

var corsOptions = {
    origin: FRONTEND, //multiple access ['http://example.com', 'www.facebook.com']
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/products', productRouter)
// app.use('/api/users', userRouter)

//routes

app.get('/', (req, res)=>{
    // throw new Error('fake error')
    res.send('Hello User, This is Node API')
})

app.get('/blog', (req, res)=>{
     res.send('Hello User')
})

app.use(errorMiddleware)

mongoose.set("strictQuery", false)

mongoose.
connect(MONGO_URL)
.then(()=>{   
console.log('connected to MongoDB')
app.listen(PORT, ()=>{
    console.log(`Node API app is running on port ${PORT}`)
})

}).catch((error)=>{
    console.log(error)
})