// text content to be converted - test
// const practice = "Here's a link to [a website](http://foo.bar) ##heading and list * one * two * three * four ";
// remove special markdown characters
// const specialChar = text.replace(/[(\*)(\>)(\#)(\[)(\))]/g, "").replace(/[(\]\()]/g, " ");
// console.log(specialChar);

// repalce ]( pattern with a space
// const find = text.replace(/[(\]\()]/g, " ");
// console.log(find);

function removeText () {
	const form = document.getElementById("form1");
	const input = form.querySelector("input");
	const form2 = document.getElementById("form2");

	// print text in form
	

	// remove special markdown characters
	const specialChar = text.replace(/[(\*)(\>)(\#)(\[)(\))]/g, "").replace(/[(\]\()]/g, " ");

	// Loop
	for (i = 0; i < text.length; i++) {
		if (text[i] === "](") {

		};
	};
}

removeText();

// if "](" found then replace [, ) with "" and ]( with " "
// const markLinks = text.replace(/[(\]\))]/g, function (_, link){
// });
