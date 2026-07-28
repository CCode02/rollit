import express from 'express'
import middleware from './utils/middleware.js'

const app = express()

app.use(express.json())
app.use(middleware.requestLogger)

app.get('/', async (request, response) => {
    response.status(200).send('hello world')
})

app.use(middleware.unknownEndpoint)

export default app