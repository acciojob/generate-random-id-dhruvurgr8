function makeid(l) {
	let arr = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
  'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2',
  '3', '4', '5', '6', '7', '8', '9'
]
	let str = "";
	for(let i=0;i<=l-1;i++){
		let num = parseInt(Math.random()*60);
		str+= arr[num];
	}
	return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
