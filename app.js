// const fs = require("fs");
// const https = require("https");
// const request = require("request");
// const express = require("express");
// const formidable = require("formidable");
const removeMd = require("remove-markdown");
// const server = http.createServer();
const form = document.getElementById("form1");
const input = form.querySelector("input");
const form2 = document.getElementById("form2");

form.onchange = function convertMarkdown() {
  e.preventDefault();
  const markdown = input.value;
  const plainText = removeMd(markdown);
  form2.textContent = plainText;
};


// server.on('request', (request, response) => {
//   res.writeHead(200, {'Content-Type': 'text/html'})
// });
