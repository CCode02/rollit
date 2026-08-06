import mongoose from "mongoose";
import Game from "../models/game.js";

const getAll = () => {
     return Game.find({})
}

const getById = (id) => {
    return Game.findById(id)
}

const createGame = (newGame) => {
    const game = new Game(newGame)

    return game.save()
}

const deleteGame = (id) => {
    return Game.findByIdAndDelete(id)
}

export default {
    getAll,
    getById,
    createGame,
    deleteGame
}