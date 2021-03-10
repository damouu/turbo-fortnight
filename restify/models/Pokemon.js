const mongoose = require('mongoose');
const {Schema} = mongoose;

const PokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
});

const Pokemon = mongoose.model('Customer', PokemonSchema);
module.exports = Pokemon;