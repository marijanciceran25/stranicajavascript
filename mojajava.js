function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Niste upisali svoje ime!");
    return false;
  }

  var y = document.forms["myForm"]["lname"].value;
  if (y == "") {
    alert("Niste upisali svoje prezime!");
    return false;
  }

  var s = document.forms["myForm"]["email"].value;
  if (s == "") {
    alert("E-mail adresa nije popunjena!");
    return false;
  }

 var e = document.forms["myForm"]["options"].value;
  if (e == "") {
    alert("Molimo, odaberite razlog slanja zahtjeva!");
    return false;
  }

}

function showhide(){ 
	if(document.getElementById('options').value == 'ostalo'){
		document.getElementById('txtarea').style.display = 'block';
	}
	else{
	document.getElementById('txtarea').style.display = 'none';
	}
}

function validateMail() {
  var x = document.getElementById("email").pattern;
  document.getElementById("demo").innerHTML = x;
}