
var einObjekt= {
    textelement: 'Hier gehts IMMER NOCH UM == vs. ==== ',
    number: 3,
    bool: false,
    strichelchen: "-----------------------"
}
var striche = einObjekt.strichelchen;


console.log(striche);
console.log(einObjekt.textelement );
console.log("Objekte und Arrays werden nicht über ihre Inhalte, sondern über ihre Referenzen verglichen!")
console.log(" Was heisst das?")
console.log(striche);

var obj1 = {};
var obj2 = {};
var obj3 = obj1;

console.log('obj1 === obj1 -> ' + (obj1 === obj1));
console.log('obj1 !== obj2 -> ' + (obj1 !== obj2));
console.log('obj1 === obj2 -> ' + (obj1 === obj2));
console.log('obj1 === obj3 -> ' + (obj1 === obj3));
console.log('Inhalte obj1 == obj2 '+ (obj1 == obj2));
console.log(striche);


var arr1 = [];
var arr2 = [];
var arr3 = arr1;
var arr4 = [1,2,3];
var arr5 = [1,2,'3'];

console.log('arr1 === arr1 -> ' + (arr1 === arr1));
console.log('arr1 !== arr2 -> ' + (arr1 !== arr2));
console.log('arr1 === arr3 -> ' + (arr1 === arr3));

console.log(arr4[0] === arr5[0]);
console.log(arr4[2] === arr5[2]);

