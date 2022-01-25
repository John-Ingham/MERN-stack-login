import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

app.use('./posts', postRoutes)

const CONNECTION_URL =
  'mongodb+srv://john:<PASSWORD>@cluster0.f3lc1.mongodb.net/users?retryWrites=true&w=majority'
// add password once moved
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)),
  )
  .catch((error) => console.log(error.message))
