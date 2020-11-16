
let evaluations = [7, 10, 9];

let colorList = ['green', 'blue', 'red'];

let person = {
    name: 'Joel',
    age:'34'
};

console.log(person);
console.log(person.name);
console.log(person.age);

console.log(person);
console.log(person['name']);
console.log(person['age']);

let object = {
    greeting:'Hi ik ben een object'
};

colorList.push('orange');
colorList.push(5);
colorList.push(object);

console.log(evaluations);
console.log(colorList);
console.log(colorList[0]);

let lastInList = colorList.length -1 ;
console.log(colorList[lastInList]);