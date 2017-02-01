function checkAll() {
	checkGeburt();
	checkBday();
}

function checkGeburt() {
	var monat = document.Formular.monate.value;
	switch(monat) {
		case 1 : if(document.Formular.tage.value > 31) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
			 	 break;
		case 2 : if(document.Formular.tage.value > 28) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
				 break;
		case 3 : if(document.Formular.tage.value > 31) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
				 break;
		case 4 : if(document.Formular.tage.value > 30) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
				 break;
		case 5 : if(document.Formular.tage.value > 31) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
				 break;
		case 6 : if(document.Formular.tage.value > 30) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
				 break;
		case 7 : if(document.Formular.tage.value > 31) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
				 break;
		case 8 : if(document.Formular.tage.value > 31) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
				 break;
					case 9 : if(document.Formular.tage.value > 30) {
					alert("Datum inkorrekt!");
					document.Formular.tage.focus();
					}
					break;
		case 10: if(document.Formular.tage.value > 31) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
				 break;
		case 11: if(document.Formular.tage.value > 30) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
				 break;
		case 12: if(document.Formular.tage.value > 31) {
				 alert("Datum inkorrekt!");
				 document.Formular.tage.focus();
				 }
		default: break;
				 }
}

function checkBday() {
	var datum = new Date();
	var tag = date.getDate();
	var monat = date.getMonth();
	
	var btag = document.Formular.tage.value;
	var bmonat = document.Formular.monate.value;
	
	var vorname = document.Formular.vorname.value;
	var nachname = document.Formular.vorname.value;
	
	var alter = date.getYear - document.Formular.jahre.value;
	
	if(tag == btag && monat == bmonat){
		//Hab übergeben in textarea nicht verstanden :/
		alert("Lieber "+vorname+" "+nachname+" wir wünschen dir Alles Gute zu deinem "+alter+". Geburtstag!");
	}
}