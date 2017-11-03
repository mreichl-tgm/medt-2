function add(str) {
    "use strict";
    var tmp = "",
        newItem = "";
	switch (str) {
        case "phone":
            tmp = "phonebr";
			newItem = document.createElement("input");
            newItem.setAttribute("name", "phone");
            
			var tag = document.getElementById("phone");
			tag.appendChild(newItem);
            
			break;
			
		case "mail":
			tmp = "mailbr";
            
			var newItem = document.createElement("input");
			newItem.setAttribute("name","mail")
            
			var tag = document.getElementById("mail");
			tag.appendChild(newItem);
            
			break;
			
		case "note":
			tmp = "notebr";
            
			var newItem = document.createElement("input");
			newItem.setAttribute("name","note")
            
			var tag = document.getElementById("note");
			tag.appendChild(newItem);
            
			break;
	}
    var br = document.createElement("br");
    br.setAttribute("id", tmp);
	tag.appendChild(br);
}

function sub(str) {
    var tmp = "",
        child = "",
        parent = "",
        array = [];
    
	switch (str) {
		case "phone":
            array = document.getElementsByName("phone");
			child = array[array.length - 1];
			tmp = "phonebr";
			break;
			
		case "mail":
			array = document.getElementsByName("mail");
			child = array[array.length - 1];
			tmp = "mailbr";
			break;
			
		case "note":
			array = document.getElementsByName("note");
			child = array[array.length - 1];
			tmp = "notebr";
			break;
	}
    parent = child.parentElement;
    
    parent.removeChild(document.getElementById(tmp));
    parent.removeChild(child);
}