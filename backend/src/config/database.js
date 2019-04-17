const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://admin:qwe123@127.0.0.1:27017/mymoneyapp');

mongoose.Error.messages.general.required = "The attribut '{PATH}' is required"