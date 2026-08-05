import express from 'express'
import Game from "../models/game.js";
import gamesRepository from "../repository/gamesRepository.js";

const gamesRouter = express.Router()

gamesRouter.get('/', (request, response) => {
    gamesRepository.getAll().then((games) => {
        response.json(games)
    })
})

export default gamesRouter