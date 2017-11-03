// All used vars
var cookie = document.cookie,
	ctr = 0,
	cname = "",
	cvalue = "",
	tmp = "",
	i = 0,
	cchunk = "";

// Here we are lead to the editing page
function edit(value) {
    "use strict";
    document.cookie += "(" + value + ")";
    window.location = "entry.html";
}

// This one gives us an output
function output(name, values) {
    "use strict";
    var txt_node = "",
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

// This one draws your contacts
function draw_misc(name) {
    "use strict";
    var node = "",
        ref = "";
    
	// Creates the Button
    node = document.createElement("input");
    node.setAttribute("type", "button");
    node.setAttribute("value", "show");
    document.getElementById("output").appendChild(node);
    // Until this point its button
    node = document.createElement("input");
    node.setAttribute("value", name);
	// should be useful later: node.setAttribute("name", name);
    node.setAttribute("name", "hide");
    document.getElementById("output").appendChild(node);
    // Until this point its the text
    ref = document.getElementById("output").lastChild.value;
    document.getElementById("output").lastChild.previousSibling.addEventListener("click", function () {edit(ref); });
    // 2nd Line
    node = document.createElement("hr");
    document.getElementById("output").appendChild(node);
	// Hides all elements called "hide"
    for (i = 0; i < document.getElementsByName("hide").length; i += 1) {
        document.getElementsByName("hide")[i].style.visibility = "hidden";
    }
}

// Here is were we find our stuff
cchunk = cookie.split(";");
for (ctr = 0; ctr < cchunk.length; ctr += 1) {
	// 1st Line
	var node = document.createElement("hr");
	document.getElementById("output").appendChild(node);
	
    cname = cchunk[ctr].split("[");
    cvalue = cname[1];
    cname = cname[0];
    cname = cname.slice(0, cname.length - 1);
    cvalue = String(cvalue).replace(/\]/, "");
    cvalue = cvalue.split("|");
    for (i = 0; i < 2; i += 1) {
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