//////////////////////////////////////////////////////////////
//// Our schema and model for the cat resource          ////
//////////////////////////////////////////////////////////////

const mongoose = require('../utils/connection')

const commentSchema = require('./comment')

const { Schema, model } = mongoose

// cats schema
const catSchema = new Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    readyToEat: {
        type: Boolean
    },
    owner: {
        
        type: Schema.Types.ObjectId,
        
        ref: 'User'
    },
    comments: [commentSchema]
}, { timestamps: true })


const cat = model('cat', catSchema)

//////////////////////////
//// Export our Model ////
//////////////////////////

module.exports = cat