const testMarkdown = "Here's a link to [a website](http://foo.bar) ##heading and list * one * two * three * four ";

// print File

// remove special markdown characters
var result = testMarkdown.replace(/[(\[*)(\]>)(\)#)(\()]/g, "");

console.log(result);

// ignore [nl]
