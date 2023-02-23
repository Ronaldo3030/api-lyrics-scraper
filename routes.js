const express = require('express');
const cors = require('cors');
const ScrapingController = require('./controllers/ScrapingController');

module.exports = app => {
  app.use(express.json());
  app.use(cors());

  app.get('/lyric/:musicName', ScrapingController.getLyric);

}