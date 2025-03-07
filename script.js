function firstChar(text) {
  // your code here
	text = text.trim();
	let arr = text.split("");
	let ans = arr[0];
	let res = ans.join("");
	return res;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
