// All used vars
var cookie = document.cookie,
	ctr = 0,
	cname = "",
	cvalue = "",
	tmp = "",
	i = 0,
	cchunk = "";

cchunk = cookie.split(";");
for (ctr = 0; ctr < cchunk.length; ctr += 1) {
    cname = cookie_chunk[ctr].split("[");
    cvalue = cname[1];
    cname = cname[0];
    cname = cname.slice(0, cname.length - 1);
    cvalue = String(cookie_value).replace(/\]/, "");
    cvalue = cvalue.split("|");
    for (i = 0; i < cookie_value.length; i += 1) {
        var cvalue_name = "",
            cvalue_value = "";
        cvalue_name = cvalue[i].split("=")[0];
        cvalue_value = cvalue[i].split("=")[1];
        if (cvalue_value !== undefined) {
            output(cvalue_name, cvalue_value);
        }
    }
    draw_misc(cname);
}

function new_window(value) {
    "use strict";
    localStorage.setItem("edit", value);
    window.location = "entry.html";
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