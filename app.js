// const fs = require('fs');
// const https = require('https');
// const request = require('request');
// const express = require('express');
// const formidable = require('formidable');
// const removeMd = require('remove-markdown');
// const server = http.createServer();
const form = document.getElementById('form1');
const input = form.querySelector('input');
// const form2 = document.getElementById('form2');
// const plainText = removeMd(markdown);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const markdown = input.value;
  const form2 = document.getElementById('form2');
  form2.textContent = markdown;
  // markdown.textContent = text;
});

// form2.addEventListener("input", (e) => {
//   e.preventDefault();
//   // plainText
// });


// server.on('request', (request, response) => {
//   res.writeHead(200, {'Content-Type': 'text/html'})
// });
