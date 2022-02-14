
var ueberschrift= {
    element1: "Textelement, safasfasdf, 'afasfasfasd' ",
    element11: 'textelement, aafasf, "afasdfa" ' ,
    element2: 3,
    element3: false,
    element4: 4,
    strichelchen: "-----------------------",
    element5: "loesch mich bitte",
    element6: 'a'
}

var striche = ueberschrift.strichelchen;

var arrayExample = ["a","b","c","d","f","g", "h"];

var textElement = { 
    txt1: "TextElement1",
    txt2: "TextElement2",
    ref1: ueberschrift,
    ref2: {name: "Neues Element", nachname: "noch neuer"}
}

console.log("1" + striche + " referenzen auf andere Objekte" );
console.log(textElement);
console.log(textElement.ref2);
console.log(textElement.ref2.nachname);

console.log("2" + striche + " element 4 war als Zahl definiert...der Typ wird ueberschrieben " );
ueberschrift.element4 = "Jetzt bin ich ein Text";
console.log(textElement);


console.log("3" + striche + " element5 geloescht" );

delete ueberschrift.element5;
console.log(textElement);

console.log("4" + striche + " geloeschtes element5 explizit aufrufen" );

delete ueberschrift.element5;
console.log(ueberschrift.element5);