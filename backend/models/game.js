import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
    dungeonMaster: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    system: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'System'
    }
})

gameSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default mongoose.model('Game', gameSchema)