import express from 'express'
import Game from "../models/game.js";
import gamesRepository from "../repository/gamesRepository.js";

const gamesRouter = express.Router()

gamesRouter.get('/', (request, response) => {
    gamesRepository.getAll().then((games) => {
        response.json(games)
    })
})

gamesRouter.get('/:id', (request, response) => {
    gamesRepository.getById(request.params.id).then((game) => {
        response.json(game)
    })
})

export default gamesRouter