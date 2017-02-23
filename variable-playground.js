/* var person = {
	name: 'Andrew',
	age: 21
}

function updatePerson(obj) {
/* 	obj = {
		name: 'Andrew',
		age: 24
	} 
	obj.age = 26;
}

updatePerson(person);
console.log(person); */

// Array Example
var people = [
	{
		name: 'Andrew', 
		age: 21
	}, {
		name:'SpongeBob', 
		age: 5
	}
];

function updatePeople(arr) {
/* 	arr = [
		{
			name: 'Andrew', 
			age: 25
		}, {
			name:'SpongeBob', 
			age: 55
		}
	]; */
arr.push({name: 'Andrew', age: 25});
debugger;
}

updatePeople(people);
console.log(people);



