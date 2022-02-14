
var einObjekt= {
    textelement: 'KONTROLLSTRUKTUREN   IF -- FOR --- SWITCH',
    number: 3,
    bool: false,
    strichelchen: "-----------------------"
}
var striche = einObjekt.strichelchen;

function line() {
    console.log(striche);
}

function out(gibAus){
    console.log(gibAus);
}


// Vorab mal ein Funktionsaufruf
line();
out("Thema : " +einObjekt.textelement );
line();
out("");


out("IF-Statement -> ")
var a = 10;
var b = "b";

if ( a === 10 && b === "b") {
    out("a und b sind ok");
}

out("FOR - LOOP")
for (var i=0; i < 7; i++) {
    out("Count =" + i);
    if (i === 3) {
        out("3 ist my favourite")
    }
}
line();


out("SWITCH - STATEMENT");

var charArray = ['a','b','c','d','e','f','g','h','i','j',3,4,5,6,7,8,9,false,11,'l','m','n','o','p',true];

var notACaseCollector = "NOT A CASE: ";

function showASwitchAction(oneCharacter) {

    switch(oneCharacter) {
        case 'a':
            out(oneCharacter);
        break;
        case "3":
            out(oneCharacter);
        break;
        case false:
            out("It's not true it's :" + oneCharacter)
        break;
        default:
        notACaseCollector += (" " + oneCharacter);
    }
}
 
for (var char in charArray) {
    showASwitchAction(char);
}
out(notACaseCollector);
line();

//Nun mit index !

notACaseCollector = "NOT A CASE: ";
for (var index in charArray) {
    showASwitchAction(charArray[index]);
}
out(notACaseCollector);
line();









