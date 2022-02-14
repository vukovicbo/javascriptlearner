
var einObjekt= {
    textelement: 'JETZT ABER "undefined vs. null ',
    number: 3,
    bool: false,
    strichelchen: "-----------------------"
}
var striche = einObjekt.strichelchen;


console.log(striche);
console.log(einObjekt.textelement );

console.log(striche);

var a = null;
var bb = undefined;
console.log(" var a = null -> " + a);
console.log(striche);

var obj = {a: null}
console.log(" var obj = {a: null} -> a: " + obj.a);
console.log(striche);

function n(a) {
    console.log('function n:' + a)
}
n(null);
n("text");
n(6);

console.log("typeof null -> " + (typeof null) );

console.log(striche);

var b;
console.log("b -> " + b);
console.log("typeof b -> " + (typeof b));
console.log(striche);

//Eigentlich ein Uncaught ReferenceError
// console.log(gibtEsGarNicht);

console.log(striche);

if (typeof gibtEsGarNicht === "undefined") {
    console.log('Variable  "gibtEsGarNicht" gibt es nicht');
}

// Interessant auch dass undefined zu einem 'false' evaluiert/konvertiert wird
if (gibtEsGarNicht) {
    console.log('Variable  "gibtEsGarNicht" gibt es nicht und ist damit implizit false!');
}

