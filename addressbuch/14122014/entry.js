// All used vars
var tel = 0,
	email = 0,
	more = 0;

// Checks First Name and Last Name
function checked() {
    var d = document.getElementById("firstname");
    var err1 = "";
	var err2 = "";
	
    if (d.value.trim() === "") {
        err1 = "First Name required!";
    }
    d = document.getElementById("lastname");
    if (d.value.trim() === "") {
        err2 = "Last Name required!";
    }

    if (err1 == "" && err2 == "") {
        return true;
    }else{
        alert(""+err1+" "+err2+"");
        return false;
    }

}

function save(){
	// All used vars
	var domfn = document.getElementById("firstname").value,
		domln = document.getElementById("lastname").value;
	
    if(checked()){
        var cvalue = "",
            cname = domfn + domln;
        if (document.getElementById("e_t_f").value != "") {
            cname = document.getElementById("e_t_f").value;
        }
        
        cvalue += "firstname="+domfn+"|";
        cvalue += "lastname="+domln+"|";
        cvalue += "gender="+get_gender(document.getElementsByName("gender"))+"|";
		
        if(document.getElementById("tel1").value.trim() != ""){
			cvalue += "tel=";
			for(var i = 1; i <= tel;i++){
				cvalue += document.getElementById("tel"+i).value;
				if(i < tel){
					cvalue += ",";
				}
			}
		}
        cvalue += "|";

        if(document.getElementById("email1").value.trim() != ""){
            cvalue += "email=";
            for(var i = 1; i <= email;i++){
                cvalue += document.getElementById("email"+i).value;
                if(i < email){
                    cvalue += ",";
                }
            }
            cvalue += "|";
        }

        if(document.getElementById("more1").value.trim() != ""){
        cvalue += "more=";
        for(var i = 1; i <= more;i++){
            cvalue += document.getElementById("more"+i).value;
            if(i < more){
                cvalue += ",";
            }
        }
        cvalue += "|";
        }
        add_cookie(cname, cvalue);
    }
}

// Are you a boy or a girl?
function get_gender(name) {
	for (var i = 0; i < name.length; i++){
        if(name[i].checked){
            return name[i].value;
        }
    } return undefined;
}
// Adds a cookie that would look like this "maxmustermann=[firstname=max|lastname=mustermann|phone=1,2,3,4|mail=abc,def];peterenis=[]"
function add_cookie(name, value){
    document.cookie = String(name) +"=["+String(value)+"];";
    alert(document.cookie);
}

// Adds a field to a group
function add(str){
    var tmp = "";
	switch(str) {
		case "tel":
			tel++;
			tmp = "telbr"+tel;
			var newItem = document.createElement("input");
			newItem.setAttribute("id","tel"+tel)
			var tag = document.getElementById("tel");
			tag.appendChild(newItem);
			break;
			
		case "email":
			email++;
			tmp = "emailbr"+email;
			var newItem = document.createElement("input");
			newItem.setAttribute("id","email"+email)
			var tag = document.getElementById("email");
			tag.appendChild(newItem);
			break;
			
		case "more":
			more++;    
			tmp = "morebr"+more;
			var newItem = document.createElement("input");
			newItem.setAttribute("id","more"+more)
			var tag = document.getElementById("more");
			tag.appendChild(newItem);
			break;
	}
    var br = document.createElement("br");
    br.setAttribute("id", tmp);
	tag.appendChild(br);
}

// Subtracts a field from a group
function sub(str){
    var tmp = "";
	switch(str) {
		case "tel":
			if(tel < 2) return;
			var child = document.getElementById("tel"+tel);
			tmp = "telbr"+tel;
			tel--;
			break;
			
		case "email":
			if(email < 2) return;
			var child = document.getElementById("email"+email);
			tmp = "emailbr"+email;
			email--;
			break;
			
		case "more":
			if(more < 2) return;
			var child = document.getElementById("more"+more);
			tmp = "morebr"+more;
			more--;
			break;
	}
    var parent = child.parentElement;
	//Kills <br> tags :(
    parent.removeChild(document.getElementById(tmp));
    parent.removeChild(child);
}