var customers = ["Mike", "Jeremy", "Jorge", "Sofia", "Chris", "Yulia", "Morgan", "Mary", "Oleg", "Viktoriia"];

var arrayLength = customers.length;
console.log(arrayLength);

console.log(customers[2]);

for (let i = 0; i < customers.length; i++) {
  console.log(i);
  console.log(customers[i]);
}

for (let name of customers) {
  console.log(name);
}

let i = 0;

while (i < 10) {
  console.log(customers[i]);
  i++
}