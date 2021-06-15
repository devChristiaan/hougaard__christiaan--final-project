import express from 'express'
import routes from './src/routes.js'
import errorHandler from './errorHandler/errorHandler.js'
//Config local env
import dotenv from 'dotenv'
dotenv.config()


const app = express()
const PORT = process.env.PORT || 9000

app.use(express.json())

app.use('/', routes)

//Execute Custom error
app.use(errorHandler, (err, req, res, next) => {
  //console log err for dev purpose
  console.error(err)
  
  //Custom message Res
  res.status(404).json({"message": "not found"})
})

export default app.listen(PORT, () => console.log(`API server ready on http://localhost:${PORT}`))

