
var ueberschrift= {
    element1: "Textelement",
    element2: 3,
    element3: false,
    element4: 4,
    strichelchen: "-----------------------"
}

var striche = ueberschrift.strichelchen;

var arrayExample = ["x","b","c","d","f","f", "g", "h", "i", 3];


console.log("1" + striche + " Array anschauen" );
console.log(arrayExample);
 
console.log("2" + striche + "typeof - Beispiel" );
console.log("typeof: " + typeof arrayExample);
console.log("type of :" +  typeof ueberschrift.element1);
console.log("type of :" +  typeof ueberschrift.element2);
console.log("type of :" +  typeof ueberschrift.element3);
console.log('test ueberschrift[3] - undefined !! : ' + ueberschrift[3]);


console.log("3" + striche + " array element an position 5 mit arrayExample[4] ersetzten ..." );
arrayExample[4] = "e";
console.log(arrayExample);

console.log("4" + striche + "push: array element am Ende hinzufügen ..." );
arrayExample.push("j");
console.log(arrayExample);

console.log("5" + striche + "splice: ab Position 7 zwei Elemente entfernen" );
arrayExample.splice(7,2);
console.log(arrayExample);

console.log("6" + striche + "splice-variante 2 mit drei Parametern" );
arrayExample.splice( 1,0, "a", "yyy");
console.log(arrayExample);

console.log("7" + striche + "splice-variante 2 mit drei Parametern" );
arrayExample.splice( 0,1 );
console.log(arrayExample);

console.log("8" + striche + "explizit position 8 mit [7] loeschen" );
delete arrayExample[7];
console.log(arrayExample);



