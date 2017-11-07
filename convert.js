// text content to be converted - test
const text = "Here's a link to [a website](http://foo.bar) ##heading and list * one * two * three * four ";

// remove special markdown characters
const specialChar = text.replace(/[(\*)(\>)(\#)(\[)(\))]/g, "")
console.log(specialChar);

// repalce ]( pattern with a space
const find = text.replace(/[(\]\()]/g, " ");
console.log(find);

// if "](" found then replace [, ) with "" and ]( with " "
// const markLinks = text.replace(/[(\]\))]/g, function (_, link){
// });

// for (i = 0; i < text.length; i++) {
// 	if (text[i] === "](") {
// 		const removeLink = text.replace(/[(\]\()]/, " ");
// 		console.log(removeLink[i]);
// 		const removeBrackets = text.replace(/[\[\)]/, "");
// 		console.log(removeBrackets[i]);
// 	};
// };
