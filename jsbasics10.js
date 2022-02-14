
var einObjekt= {
    textelement: "---HIER GEHT'S UM FUNKTIONEN -----",
    number: 3,
    bool: false,
    strichelchen: "-----------------------"
}
var striche = einObjekt.strichelchen;
var globalCounter = 0;

function line() {
    console.log( (globalCounter+=1) + striche);
}

function out(gibAus){
    console.log(gibAus);
}


// Funktionen
line();
out(einObjekt.textelement);
line();


var eineFunktionsDeklaration = function() {
    out("Unterschied soll was sein???");
};
eineFunktionsDeklaration();
line();

out("Funktionen sind hier Objekte und können als solche einer");
out("Variablen zugewiesen werden");

//Falsch weil line() ja noch keiner Variable zugewiesen ist
out(line);

var linie = line;
out("Davor");
out(linie()); //undefined verstehe ich nicht!
out("Danach");

// Sichtbarkeit (Scopes)
line();
{
    var h = 12;
}
out("Ist sichtbar: " + h);
line();
//das Zeug hier heisst IIFE - Immediately Invoked Function Expression
(function() {
    var hideMe = 15;
    out("Inside you can see me: " + hideMe);
})();
//danach versuchen auszugeben
out("Typ von hideMe: " + (typeof hideMe));

line();
//Nochmal auf andere Weise
var anonymFunc = function() {
    var hideMe2 = 16;
    out("Inside you can see me: " + hideMe2);
};

anonymFunc();
out((typeof hideMe2));