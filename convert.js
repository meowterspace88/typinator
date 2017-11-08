// text content to be converted - test
const text = "Here's a link to [a website](http://foo.bar) ##heading and list * one * two * three * four ";
// remove special markdown characters
const specialChar = text.replace(/[(\*)(\>)(\#)(\[)(\))]/g, "").replace(/[(\]\()]/g, " ");
console.log(specialChar);

// repalce ]( pattern with a space
// const find = text.replace(/[(\]\()]/g, " ");
// console.log(find);


// promise
// const myFirstPromise = new Promise((resolve, reject) => {
	// if ]( found

function markdownText() {
	for (i = 0; i < text.length; i++) {
		if (text[i] === "](") {
			console.log(specialChar);
		};
	};
};


// if "](" found then replace [, ) with "" and ]( with " "
// const markLinks = text.replace(/[(\]\))]/g, function (_, link){
// });
