
var einObjekt= {
    textelement: 'Hier gehts um Zahlen in JS "number" ',
    number: 3,
    bool: false,
    strichelchen: "-----------------------"
}
var striche = einObjekt.strichelchen;
var num1 = 0;
var num2 = 42;
var num3 = 1024.33333;

var descrDoubleVsFloat = 'A double variable can provide precision up to 15 to 16 decimal points as compared to float precision of 6 to 7 decimal digits.'

console.log("typeOf : " + typeof num3);
console.log("1" + striche + ' number entspricht im technischn dem Java-Typ "double", also einem präziseren "float" ' );
console.log(descrDoubleVsFloat);

console.log('numbers: ' + num3);
console.log(' parseInt und und parseFloat sind sogenannte Globale Funktionen')
console.log('numbers parseInt Ganze Zahlen: ' + parseInt(num3));
num3 = num3 + num2;
console.log('numbers parseFloat Dezimalzahl: ' + parseFloat(num3));
num3 = 1024 / 16;
console.log('numbers 1024 / 16 = ' + num3);
num3 = 10 / 3;
console.log('numbers 10/3 = ' + num3);
num3 = num3 * 3;
console.log('numbers 3.3333333 * 3 = ' + num3);










