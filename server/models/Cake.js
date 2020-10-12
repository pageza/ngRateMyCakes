const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ReviewSchema = require('./Review')
// Creating the Schema
const CakeSchema = new mongoose.Schema({
  baker: {type: String, required: true, minlength: 3},
  imageURL: {type: String, required: true},
  reviews: [{type: Schema.Types.ObjectID, ref: 'Review'}]
},{timestamps:{createdAt: 'createdAt', updatedAt: 'updatedAt'}})

// Registering the Schema as a Model
mongoose.model('Cake', CakeSchema)
