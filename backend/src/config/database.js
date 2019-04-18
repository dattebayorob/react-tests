const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
module.exports = mongoose.connect(
    'mongodb://admin:qwe123@127.0.0.1:27017/mymoneyapp',
    { useNewUrlParser: true },
    err => {
        if (err) {
          console.log(`[SERVER_ERROR] MongoDB Connection:`, err);
        }
      }
    )

mongoose.Error.messages.general.required = "The attribut '{PATH}' is required"
mongoose.Error.messages.Number.min = 
    "The '{VALUE}' is lower then minimun required of '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' is greater then max permited of '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' isnt a valid attribut '{PATH}'."