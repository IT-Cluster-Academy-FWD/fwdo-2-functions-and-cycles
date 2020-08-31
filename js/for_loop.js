const people = ["Jack", "Mike", "Bob", "Ben", "Jim"];

people.push("Chris");
people.unshift("Joe");

printHeading("printStringsArray"); // print h1 heading
printStringsArray(people);

printHeading("printStringsArrayWhile"); // print h1 heading
printStringsArrayWhile(["Jane", "Joe"]);

printHeading("printStringsArrayDoWhile"); // print h1 heading
printStringsArrayDoWhile([]);


function printStringsArray(strings) {
  for (let i = 0; i < strings.length; i++) {
    printParagraph(strings[i]);
  }
}

function printStringsArrayWhile(strings) {
  let i = 0;

  while (i < strings.length) {
    printParagraph(strings[i]);
    i++;
  }
}

function printStringsArrayDoWhile(strings) {
  let i = 0;

  if (i < strings.length) {
    do {
      printHeading(strings[i]);
      i++;
    } while (i < strings.length);
  }
}

function printHeading(title) {
  document.write("<h1>" + title + "</h1>")
}

function printParagraph(text) {
  document.write("<p>" + text + "</p>");
}

function printStuff(strings) { // let strings = ["1", "2", "3", "4"]
  console.log(strings);
}

const stuffToPrint = ["1", "2", "3", "4"];

printStuff(["a", "b", "c"]);
printStuff(["d", "e", "f"]);
printStuff(stuffToPrint); // printStuff(["1", "2", "3", "4"]);

const user = {
  firstName: "Jane",
  lastName: "Doe",
  age: 16
};

for (let letter of stuffToPrint) { //es6
  console.log(letter)
}


let printNewStuff = function (a, b, c) { console.log(a, b, c); }; // es5
let printNewStuffAnonym = (a, b, c) => { console.log(a, b, c); }; //es6



// continue

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Jack") {
    break;
  } else if (people[i] === "Ben") {
    continue;
  }

  console.log(people[i]);
}
