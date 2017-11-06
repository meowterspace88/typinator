const testMarkdown = require("/Users/arunyan/Desktop/TEST.txt");

// print File

// remove special markdown characters
var result = testMarkdown.replace("#", "").replace("(", "").replace(")", "").replace(">", "").replace("*", "").replace("[", "").replace("]", "");

console.log(result);

// ignore [nl]
