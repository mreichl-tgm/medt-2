		//Variablendeklaration		
		var test01 = "Ich mag Kekse,";
		var test02 = "Lel";
	
		//Ausgabe über die vordefninierte Funktion alert() - Warnhinweis
		alert(test01+" "+test02);
	
		function umwandeln(zeichenwert) {
			return Number(zeichenwert);
		}
		
		function addiere(wert1,wert2) {
			/*Hier sollen nun die zwei übergebenen Werte addiert werden und in ein Textfeld
			ergebnis geschrieben werden*/
			//Umwandeln auf eine Zahl -> Double(Datentyp)
			wert1 = umwandeln(wert1);
			wert2 = umwandeln(wert2);
		
			var ergebnis = wert1+wert2;
			
			window.document.formular01.ergebnis.value = 
			ergebnis;
		}
	
		function subtrahiere(wert1,wert2) {	
			wert1 = umwandeln(wert1);
			wert2 = umwandeln(wert2);
			var ergebnis = wert1-wert2;
		
			window.document.formular01.ergebnis.value= ergebnis;
		}
		
		function multipliziere(wert1,wert2) {
			wert1 = umwandeln(wert1);
			wert2 = umwandeln(wert2);
			var ergebnis = wert1*wert2;
			
			window.document.formular01.ergebnis.value= ergebnis;
		}
		
		function dividiere(wert1,wert2) {
			wert1 = umwandeln(wert1);
			wert2 = umwandeln(wert2);
			var ergebnis = wert1/wert2;
			
			window.document.formular01.ergebnis.value= ergebnis;
		}
		
		function hochrechnen(wert1,wert2) {
			wert1 = umwandeln(wert1);
			wert2 = umwandeln(wert2);
			var ergebnis = Math.pow(wert1,wert2);
			
			window.document.formular01.ergebnis.value= ergebnis;
		}
		
		function quadratwurzelziehen(wert1,wert2) {
			wert1 = umwandeln(wert1);
			wert2 = umwandeln(wert2);
			var ergebnis = Math.sqrt(wert1,wert2);
			
			window.document.formular01.ergebnis.value= ergebnis;
		}		