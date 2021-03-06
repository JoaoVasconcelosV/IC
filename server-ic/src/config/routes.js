const express = require('express');

module.exports = (server) => {
  
  const router = express.Router();
  server.use('/api', router);

  const recordService = require('../api/recordService');  
  recordService.register(router, '/records');
}