function appendDisplay(val)
{
	console.log("appending: " + val);
	var data = document.getElementById('calc-display');
	data.innerHTML += val;
}

function calculate()
{
	console.log('evaluating results');
	var data = document.getElementById('calc-display');
	data.innerHTML = eval(data.innerHTML);
}

function clearDisplay()
{
	var data = document.getElementById("calc-display");
	data.innerHTML = "0";
}

function submitReg()
{
	var fname = document.getElementById("first-name").value;
	var lname = document.getElementById("last-name").value;
	var email = document.getElementById("email").value;
	var gender = document.getElementById("gender").value;
	
}

function valEmail(form)
{
	if ((form.email.value.indexOf ('@',0) == -1 ||
		form.email.value.indexOf ('.',0) == -1) && form.email.value != "")
	{
  		error += "Please verify that your email address is valid.";
	} 
}