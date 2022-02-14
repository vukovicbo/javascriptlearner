

var irgendwas = "meinString";

var ueberschrift = {
    ersteZeile: "In der ersten Zeile steht der Titel",
    zweiteZeile: "In der zweiten Zeile steht irgendwas erklärendes zum Titel",
    dritteZeile: "Die dritte kann dann vielleicht sogar weggelassen werden",
    strichelchen: "-----------------------"
}

var striche = ueberschrift.strichelchen;

console.log("1" + striche + " object.element" );
console.log(ueberschrift.ersteZeile);

console.log("2" + striche + "ein Neuer Wert / Variable wird angehängt ");
ueberschrift.name1 = "Neuer Wert";
console.log(ueberschrift.name1);


console.log("3----das ganze Objekt sind nun so aus");

ueberschrift.counter = 10;
ueberschrift.boolch = true;
console.log (ueberschrift);

