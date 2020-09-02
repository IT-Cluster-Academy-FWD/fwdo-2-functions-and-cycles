let people = [
  "Bob",
  "Mike",
  "John",
  "Kate",
  "Nino",
  "Tina",
  "Dina",
  "Emma",
  "Rob",
  "Den",
];
console.log(people);

for (let i = 0; i < people.length; i++) {
  document.write("This name:" + people[i] + "<br >");
}

let i = 0;
for (i of people) {
  document.write(i + "<br >");
}
let k = 0;
while (k < people.length) {
  document.write("This name:" + people[k] + "<br >");
  k++;
}

let z = 0;
do {
  document.write("My name is:" + people[z] + "<br >");
  z++;
} while (z < people.length);


function magic_method(arr, skip, total) {
  let k = 0;
  while (k < arr.length) {
    if (arr[k] === skip){continue;}
    document.write("This name:" + arr[k] + "<br >");
    k++;
    if(k == total){
      break;
    }
  }
}

magic_method(people, 'Emma', 5);


