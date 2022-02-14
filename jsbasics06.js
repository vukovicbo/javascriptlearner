
var einObjekt= {
    textelement: 'Hier gehts == vs. ==== ',
    number: 3,
    bool: false,
    strichelchen: "-----------------------"
}
var striche = einObjekt.strichelchen;


console.log(striche);
console.log(einObjekt.textelement + 'ERSTMAL == ');
console.log(striche);
console.log('"dog" == "dog" -> ' +("dog" == "dog"));
console.log('1 == true -> ' + (1 == true));
console.log('0 == false -> ' + (0 == false));
console.log('2 != false -> ' + (2 != false));
console.log('2 != true -> ' + (2 != true));
console.log('-1 != false -> ' + (-1 != false));
console.log('-1 != true -> ' + (-1 != true));
console.log('1 == "1" -> ' + (1 == "1"));
console.log('1 == "1.00" -> ' + (1 == "1.0"));


console.log(striche);
console.log(einObjekt.textelement);
console.log( 'JETZT die gleichen mit  === ');
console.log(striche);
console.log('"dog" === "dog" -> ' +("dog" === "dog"));
console.log('1 === true -> ' + (1 === true));
console.log('0 === false -> ' + (0 === false));
console.log('2 !== false -> ' + (2 !== false));
console.log('2 !== true -> ' + (2 !== true));
console.log('-1 !== false -> ' + (-1 !== false));
console.log('-1 !== true -> ' + (-1 !== true));
console.log('1 === "1" -> ' + (1 === "1"));
console.log('1 === "1.00" -> ' + (1 === "1.0"));




