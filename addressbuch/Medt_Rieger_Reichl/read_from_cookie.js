//All used vars
var cookie = document.cookie,
	ctr = 0,
	cookie_name = "",
	cookie_value = "",
	tmp = "",
	i = 0,
	cookie_chunk = "";

cookie_chunk = cookie.split(";");
for (ctr = 0; ctr < cookie_chunk.length; ctr += 1) {
    cookie_name = cookie_chunk[ctr].split("[");
    cookie_value = cookie_name[1];
    cookie_name = cookie_name[0];
    cookie_name = cookie_name.slice(0, cookie_name.length - 1);
    cookie_value = String(cookie_value).replace(/\]/, "");
    cookie_value = cookie_value.split("|");
    for (i = 0; i < cookie_value.length; i += 1) {
        var cookie_value_name = "",
            cookie_value_value = "";
        cookie_value_name = cookie_value[i].split("=")[0];
        cookie_value_value = cookie_value[i].split("=")[1];
        if (cookie_value_value !== undefined) {
            output(cookie_value_name, cookie_value_value);
        }
    }
    draw_misc(cookie_name);
}

function new_window(val) {
    "use strict";
    localStorage.setItem("edit", val);
    window.location = "contact.html";
}

function output(name, values) {
    "use strict";
    var i = 0,
        txt_node = String(name) + ": ",
        val_arr = [],
        node = "";
    
    if (values.search(",") >= 0) {
        val_arr = values.split(",");
    } else {
        val_arr[0] = values;
    }
    node = document.createElement("p");
    for (i = 0; i < val_arr.length; i += 1) {
        txt_node += String(val_arr[i]);
        txt_node += " ";
    }
    txt_node = document.createTextNode(txt_node);
    node.appendChild(txt_node);
    document.getElementById("output").appendChild(node);
}

function draw_misc(name) {
    "use strict";
    var node = "",
        ref = "";
    
    node = document.createElement("input");
    node.setAttribute("type", "button");
    node.setAttribute("value", "edit");
    document.getElementById("output").appendChild(node);
    // until this point its button
    node = document.createElement("input");
    node.setAttribute("value", name);
    node.setAttribute("name", "hide");
    document.getElementById("output").appendChild(node);
    // until this point its the text
    ref = document.getElementById("output").lastChild.value;
    document.getElementById("output").lastChild.previousSibling.addEventListener("click", function () { new_window(ref); });
    // build reference to sibling element
    node = document.createElement("hr");
    document.getElementById("output").appendChild(node);
    for (i = 0; i < document.getElementsByName("hide").length; i += 1) {
        document.getElementsByName("hide")[i].style.visibility = "hidden";
    }
}