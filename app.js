const fs = require('fs');
const https = require('https');
const request = require('request');
const express = require('express');
const formidable = require('formidable');
const removeMd = require('remove-markdown');
const server = http.createServer();
const markdown = ();
const plainText = removeMd(markdown);



server.on('request', (request, response) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
});
