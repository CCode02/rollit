import express from 'express'
import Game from "../models/game.js";
import gamesRepository from "../repository/gamesRepository.js";

const gamesRouter = express.Router()

gamesRouter.get('/', (request, response) => {
    console.log('games')
})

export default gamesRouter