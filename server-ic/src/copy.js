const db = require('./config/database')
const record = require('./api/record');

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('./relatorio.csv')
  .pipe(csv())
  .on('data', (row) => {        
    //console.log(row.razaoSocial);
    record.create(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed')
  });