//30082001
require('dotenv').config()
//async errors
const express=require('express')
const app = express();
require('express-async-errors')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
const notFoundMiddelware= require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');
app.use(express.json())
// app.get('/',(req,res)=>{
//     res.send(`<h1>Store Api</h1><a href="/api/v1/products>products route</a>`)
// })
app.use(express.static('./public'))
//products route
app.use('/api/v1/products',productsRouter )
app.use(notFoundMiddelware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000
const start=async()=>{
try{
    connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server is listening to port ${port}`))
}
catch(eror){
console.log(eror)
}
}
start()
