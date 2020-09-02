const friends = ['Maks', 'Mike', 'John', 'Tim', 'Tom', 'Jane', 'Dima', 'Ivan', 'Ihor', 'Bob'];

console.log(friends);

for (let names = 0; names < friends.length; names++) {
  console.log(friends[names]);
}

for (var name of friends) {
  console.log(name)
}

var i = 0;

console.log(friends[2])

while (i < friends.length) {
  console.log(i);
  console.log(friends[i]);
  i++;
}
