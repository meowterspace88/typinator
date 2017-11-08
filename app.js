// const fs = require("fs");
// const https = require("https");
// const request = require("request");
// const express = require("express");
// const formidable = require("formidable");
// const removeMd = require("remove-markdown");
// const server = http.createServer();
const form = document.getElementById("form1");
const input = form.querySelector("input");
const form2 = document.getElementById("form2");
// const practice = "Here's a link to [a website](http://foo.bar) ##heading and list * one * two * three * four ";
const specialChar = practice.replace(/[(\*)(\>)(\#)(\[)(\))]/g, "").replace(/[(\]\()]/g, " ");
// console.log(text);



form.addEventListener('submit', (e) => {
  // prevent browser default
  e.preventDefault();

  // contain text content
  const text = input.value;

  // print text content in form1
  form2.textContent = text.text;
});

form2.onchange = function convertMarkdown() {
  // prevent browser default
  e.preventDefault();

  // contain text content
  const text = input.value;

  // print converted text in form2
  form2.textContent = text.text;

};


// server.on('request', (request, response) => {
//   res.writeHead(200, {'Content-Type': 'text/html'})
// });
