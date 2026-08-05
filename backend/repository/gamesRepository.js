import mongoose from "mongoose";
import Game from "../models/game.js";

const getAll = () => {
     return Game.find({})
}

const getById = (id) => {
    return Game.findById(id)
}

export default {
    getAll,
    getById
}