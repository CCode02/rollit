import mongoose from "mongoose";
import Game from "../models/game.js";

const getAll = () => {
     return Game.find({})
}

export default {
    getAll
}