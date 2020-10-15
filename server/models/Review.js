const mongoose = require('mongoose');
const Schema = mongoose.Schema
const CakeSchema = require('./Cake')
// Creating the Schema
const ReviewSchema = new mongoose.Schema({
  _cake: {type: Schema.Types.ObjectID, ref: 'Cake', required: true},
  comment: {type: String, required: true, minlength: 10},
  rating: {type: Number, required: true, min: 0, max: 5}
}, {timestamps:{createdAt: 'createdAt', updatedAt: 'updatedAt'}})

// Registering the Schema as a Model
mongoose.model('Review', ReviewSchema)
