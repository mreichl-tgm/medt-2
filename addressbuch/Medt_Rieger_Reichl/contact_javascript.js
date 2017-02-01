//All used vars
var telnr = 0,
	emails = 0,
	firma = 0,
	hobbys = 0;

//Checks First Name and Last Name
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
	//All used vars
	var domfn = document.getElementById("firstname").value,
		domln = document.getElementById("lastname").value;
	
    if(checked()){
        //cookies and so on
        var cookie = "",
            cookie_name = domfn + domln;
        if (document.getElementById("e_t_f").value != "") {
            cookie_name = document.getElementById("e_t_f").value;
        }
        
        cookie += "firstname="+domfn+"|";
        cookie += "lastname="+domln+"|";
        if(document.getElementsByName("gender"))cookie += "gender="+get_radio_value(document.getElementsByName("gender")) +"|";
        cookie += "tel=";
        for(var i = 1; i <= telnr;i++){
            cookie += document.getElementById("tel"+i).value;
            if(i < telnr){
                cookie += ",";
            }
        }
        cookie += "|";

        if(document.getElementById("mail1").value.trim() != ""){
            cookie += "mail=";
            for(var i = 1; i <= emails;i++){
                cookie += document.getElementById("mail"+i).value;
                if(i < emails){
                    cookie += ",";
                }
            }
            cookie += "|";
        }

        if(document.getElementById("firma1").value.trim() != ""){
            cookie += "firma=";
            for(var i = 1; i <= firma;i++){
                cookie += document.getElementById("firma"+i).value;
                if(i < firma){
                    cookie += ",";
                }
            }
            cookie += "|";
        }
        if(document.getElementById("hobby1").value.trim() != ""){
        cookie += "hobby=";
        for(var i = 1; i <= hobbys;i++){
            cookie += document.getElementById("hobby"+i).value;
            if(i < hobbys){
                cookie += ",";
            }
        }
        cookie += "|";
        }
        add_cookie(cookie_name, cookie);
    }
}

function add_cookie(name, value){
    // name like = maxmustermann and value like = firstname=a;lastname=b;
    // would look like this "maxmustermann=[firstname=max|lastname=mustermann|phone=1,2,3,4|mail=abc,def];peterenis=[]"
    document.cookie = String(name) +"=["+String(value)+"];";
    alert(document.cookie);
}

function add(str){
    // Adds a input field to specefied group
    var tmp = "";
    if(str=="tel"){
        telnr++;
        tmp = "telbr"+telnr;
        var newItem = document.createElement("INPUT");
        newItem.setAttribute("id","tel"+telnr)
        var tag = document.getElementById("tel");
        tag.appendChild(newItem);
    }else if(str == "mail"){
        emails++;
        tmp = "mailbr"+emails;
        var newItem = document.createElement("INPUT");
        newItem.setAttribute("id","mail"+emails)
        var tag = document.getElementById("mail");
        tag.appendChild(newItem);
    }else if(str == "hobby"){
        hobbys++;    
        tmp = "hobbybr"+hobbys;
        var newItem = document.createElement("INPUT");
        newItem.setAttribute("id","hobby"+hobbys)
        var tag = document.getElementById("hobbys");
        tag.appendChild(newItem);
    }else{
        firma++;
        tmp = "firmbr"+firma;
        var newItem = document.createElement("INPUT");
        newItem.setAttribute("id","firma"+firma)
        var tag = document.getElementById("firma");
        tag.appendChild(newItem);
    }
        var br = document.createElement("BR");
        br.setAttribute("id", tmp);
        tag.appendChild(br);
}

function sub(str){
    //subtracts a input field from a group
    var tmp = "";
    if(str == "tel"){
        if(telnr <= 1) return;
        var child = document.getElementById("tel"+telnr);
        tmp = "telbr"+telnr;
        telnr--;
    }else if(str == "mail"){
        if(emails <= 1) return;
        var child = document.getElementById("mail"+emails);
        tmp = "mailbr"+emails;
        emails--;
    }else if(str == "hobby"){
        if(hobbys <= 1) return;
        var child = document.getElementById("hobby"+hobbys);
        tmp = "hobbybr"+hobbys;
        hobbys--;
    }else if(str == "firma"){
        if(firma <= 1) return;
        var child = document.getElementById("firma"+firma);
        tmp = "firmbr"+firma;
        firma--;
    }
    var parent = child.parentElement;
    parent.removeChild(document.getElementById(tmp));  // to break off the <br> tags
    parent.removeChild(child);
}

function print_msg(msg){
    document.getElementById("output").innerHTML = String(msg);
}