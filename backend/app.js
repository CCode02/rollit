import express from 'express'
import middleware from './utils/middleware.js'

const app = express()

app.use(express.json())
app.use(middleware.requestLogger)




app.use(middleware.unknownEndpoint)

export default app