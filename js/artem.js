let people = ['Jack', 'Ben', 'Nick', 'Bob', 'Jane', 'Pall', 'Jim', 'Justin', 'Brenda', 'Opra'];
for (let i=0; i < people.length; i++ ) {
  document.write(people[i]);
};

for (i of people) {
  // console.log(i)
  document.write(i);
};

i = 0;
while(i < people.length){
	document.write(people[i]);
	i++;
}

i = 0;
do {
  document.write(people[i]);
  i++;
} while (i < people.length);


showArrayFor(people);
showArrayForOf(people);
showWhileArray(people);
showDoWhileArray(people);


// for loop
function showArrayFor(arr) {
	for(let i = 0; i < arr.length; i++) {	
		document.write(arr[i]);
	}
	document.write('<br>');
}

// for of
function showArrayForOf(arr) {
	for(let xxx of arr) {	
		document.write(xxx);
	}
	document.write('<br>');
}

// while loop
function showWhileArray(arr) {
	let i = 0;
	while(i < arr.length) {
		document.write(arr[i]);
		i++;
	}
	document.write('<br>');
}

// do while loop
function showDoWhileArray(arr) {
	let i = 0;
	do{
		document.write(arr[i]);
		i++;
	} 
	while(i < arr.length)
	document.write('<br>');
}



howArrayFor(people, 'Jane');
showArrayForOf(people, 'Jack');
showWhileArray(people, 'Opra');
showDoWhileArray(people, 'Pall');

// for loop
function showArrayFor(arr, skipped) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === skipped)
			continue;
		document.write(arr[i]);
	}
	document.write('<br>');
}

// for of
function showArrayForOf(arr, skipped) {
	for(let xxx of arr) {	
		if(xxx === skipped)
			continue;
		document.write(xxx);
	}
	document.write('<br>');
}

// while loop
function showWhileArray(arr, skipped) {
	let i = 0;
	while(i < arr.length) {
		if(arr[i] === skipped) {
			i++;
			continue;
		}
		document.write(arr[i]);
		i++;
	}
	document.write('<br>');
}

// do while loop
function showDoWhileArray(arr, skipped) {
	let i = 0;
	do{
		if(arr[i] === skipped) {
			i++;
			continue;
		}
		document.write(arr[i]);
		i++;
	} 
	while(i < arr.length)
	document.write('<br>');
}



showArrayFor(people, people[8], 4);
showArrayForOf(people, people[8], 2);
showWhileArray(people, people[8], 5);
showDoWhileArray(people, people[8], 3);

// for loop
function showArrayFor(arr, skipped, limit) {
	limit = limit || arr.length;
	for(let i = 0; i < limit; i++) {
		if(arr[i] === skipped)
			continue;
		document.write(arr[i]);
	}
	document.write('<br>');
}

// for of
function showArrayForOf(arr, skipped, limit) {
	limit = limit || arr.length;
	let counter = 0;
	for(let i of arr) {
		if(counter >= limit)
			break;
		if(i === skipped)
			continue;
		document.write(i);
		counter++;
	}
	document.write('<br>');
}

// while loop
function showWhileArray(arr, skipped, limit) {
	limit = limit || arr.length;
	let i = 0;
	while(i < limit) {
		if(arr[i] === skipped) {
			i++;
			continue;
		}
		document.write(arr[i]);
		i++;
	}
	document.write('<br>');
}

// do-while loop
function showDoWhileArray(arr, skipped, limit) {
	limit = limit || arr.length;
	let i = 0;
	do{
		if(arr[i] === skipped) {
			i++;
			continue;
		}
		document.write(arr[i]);
		i++;
	} 
	while(i < limit)
	document.write('<br>');
}