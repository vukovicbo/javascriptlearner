
var einObjekt= {
    textelement: "Textelement",
    number: 3,
    bool: false,
    strichelchen: "-----------------------"
}
var striche = einObjekt.strichelchen;
var vorname = 'Miles';
var nachname = 'Davis';


console.log("1" + striche + " Bestimmten Character aus einem String den Dritten!![2] finden/ausgeben" );
var dritterBuchstabe = einObjekt.textelement.charAt(2);
console.log(dritterBuchstabe);
 

console.log("2" + striche + " Strings zusammenseten mit + Operator" );
var name = vorname + nachname + dritterBuchstabe;
console.log(name);


console.log("3" + striche + " Join verwenden zum zusammensetzen von Stringelementen" );
var stringArray = [vorname,  nachname,  vorname.charAt(0), nachname.charAt(0)];
console.log("default comma : " + stringArray.join());
console.log(stringArray.join(""));
console.log(stringArray.join(" "));
console.log(stringArray.join(" -I- "));
// ERRROR console.log(einObjekt.join());







