var cookie = document.cookie,
    contacts = [],
    firstnames = [],
    lastnames = [],
    genders = [],
    emails = [],
    phones = [],
    notes = [],
    i = 0,
    position = 9;
    
contacts = cookie.split("|");

for (i = 0; i < contacts.length; i += 1) {
    firstnames[i] = contacts[i].substring(position, contacts[i].indexOf("lastname"));
    position += firstnames[i].length + 8;
    
    lastnames[i] = contacts[i].substring(position, contacts[i].indexOf("gender"));
    position += lastnames[i].length + 6;
    
    genders[i] = contacts[i].substring(position, contacts[i].indexOf("emails"));
    position += genders[i].length + 6;
    
    emails[i] = contacts[i].substring(position, contacts[i].indexOf("phones"));
    position += emails[i].length + 6;
    
    phones[i] = contacts[i].substring(position, contacts[i].indexOf("notes"));
    position += phones[i].length + 5;
    
    notes[i] = contacts[i].substring(position, contacts[i].length);
    position = 9;
}

// Adds a parameter in brackets so contact.html can find out what it has to edit.
function edit(contact) {
    "use strict";
    document.cookie += "(" + contact + ")";
}