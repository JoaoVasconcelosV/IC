const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.export = mongoose.connect('mongodb://localhost/record', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})