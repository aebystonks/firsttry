//calculator

const getValue = prompt("Type first number");
if(!isNaN(getValue)){
	const getValue2 = prompt("Type second number");
	if(!isNaN(getValue2)){
		alert(+getValue + +getValue2);
	}
	else{
		alert("the value isn't number")
	}
};