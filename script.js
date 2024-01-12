function makeid(l) {
  let words = ["a","b","c","d","e","f","g","h","i","j","k","l","m"]
	let str = "";
	for(let i=0;i<=l;i++){
		str+= words[Math.floor(Math.random()*12)];
		
	}
return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
