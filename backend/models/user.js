import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true // esto asegura la unicidad de username
    },
    name: String,
    passwordHash: String,
    gamesDM: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Game'
        }
    ],
    gamesPlayer: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Game'
        }
    ],
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        //el password hash no debe mostrarse
        delete returnedObject.passwordHash
    }
})

export default mongoose.model('User', userSchema)