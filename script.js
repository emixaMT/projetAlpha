function phone() {
  alert("Telephone de l'enterprise: 02.47.00.00.00");
}

function map(){
	alert("Voici l'adresse de l'entreprise: Blabla rue du ...");
}

function mail(){
	alert("Mail: contact@contact.fr");
}
//menu mobile
function affiche_menu(){	
	if (document.getElementById('menu').getAttribute("style") == "margin-left : 0")
		{
			document.getElementById('menu').setAttribute("style", "margin-left : -27%");
		}
	else
		{
			document.getElementById('menu').setAttribute("style", "margin-left : 0");
		}
		
}
// menu mobile

// contact us
function contact(){	
	if (document.getElementById('contact_form').getAttribute("style") == "display : block")
		{
			document.getElementById('contact_form').setAttribute("style", "display : none");
		}
	else
		{
			document.getElementById('contact_form').setAttribute("style", "display : block");
		}
}
// contact us

