  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var ObjectId = mongoose.Schema.Types.ObjectId;
  
  var userSchema = new Schema({
    _id : {type: mongoose.Schema.Types.ObjectId, auto : true} ,
    name:  {type: String, required : true},
    contact: {type: String, required: true},
    address:  {type: String, required : true},
    country:  {type: String, required : true},
    imagePath: { type: String, },

    
    }, {
        versionKey : false
    });

    const user = mongoose.model('users', userSchema);
    module.exports = user;