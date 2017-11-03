var telnr = 0,
    emails = 0,
    firma = 0,
    hobbys = 0;

function validate() {
    // validate all input fields marked with a star
    var d = document.getElementById("firstname"),
        err = "";
    
    if (d.value.trim() === "") {
        err += " Firstname not filled out properly";
    }
    d = document.getElementById("lastname");
    if (d.value.trim() === "") {
        err += " Lastname not filled out properly";
    }
    for (var i = 1; i <= telnr; i++) {
        d = document.getElementById(String("tel"+i));
        if(d.value.trim() === "") {
            err += " telephonenumber"+i+" not filled out properly";
        }
    }
    /*var gender = document.getElementsByName("gender");
    if(!gender[0].checked || !gender[1].checked){
        err += " no gender selected";
    }*/
    if (err == "") {
        return true;
    }else{
        print_msg(err);
        return false;
    }

}

function get_radio_value(name){
    for (var i = 0; i<name.length; i++){
        if(name[i].checked){
            return name[i].value;
        }
    } return undefined;
}

function save(){
    if(validate()){
        // cookies and so on
        var cookie_value = "",
            cookie_name = document.getElementById("firstname").value + document.getElementById("lastname").value;
        if (document.getElementById("e_t_f").value != "") {
            cookie_name = document.getElementById("e_t_f").value;
        }
        
        cookie_value += "firstname=" + document.getElementById("firstname").value + "|";
        cookie_value += "lastname=" + document.getElementById("lastname").value + "|";
        cookie_value += "gender="+get_radio_value(document.getElementsByName("gender")) +"|";
        cookie_value += "tel=";
        for(var i = 1; i <= telnr;i++){
            cookie_value += document.getElementById("tel"+i).value;
            if(i < telnr){
                cookie_value += ",";
            }
        }
        cookie_value += "|";

        if(document.getElementById("mail1").value.trim() != ""){
            cookie_value += "mail=";
            for(var i = 1; i <= emails;i++){
                cookie_value += document.getElementById("mail"+i).value;
                if(i < emails){
                    cookie_value += ",";
                }
            }
            cookie_value += "|";
        }

        if(document.getElementById("firma1").value.trim() != ""){
            cookie_value += "firma=";
            for(var i = 1; i <= firma;i++){
                cookie_value += document.getElementById("firma"+i).value;
                if(i < firma){
                    cookie_value += ",";
                }
            }
            cookie_value += "|";
        }
        if(document.getElementById("hobby1").value.trim() != ""){
        cookie_value += "hobby=";
        for(var i = 1; i <= hobbys;i++){
            cookie_value += document.getElementById("hobby"+i).value;
            if(i < hobbys){
                cookie_value += ",";
            }
        }
        cookie_value += "|";
        }
        add_cookie(cookie_name, cookie_value);
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
