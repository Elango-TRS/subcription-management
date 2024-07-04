const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    planname: 
    { type: String, 
      required: true },
    price: 
    { type: Number, 
      required: true },
    feature:
     { type: String, 
    required: true },
    Duration: 
    { type: String, 
    required: true }
    
}, { timestamps: true });
module.exports = mongoose.model('Plan', planSchema);