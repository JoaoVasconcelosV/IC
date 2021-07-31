const Record = require('./record');

Record.methods(['get', 'post', 'put', 'delete']);
Record.updateOptions({ new: true, runValidators: true })

module.exports = Record;