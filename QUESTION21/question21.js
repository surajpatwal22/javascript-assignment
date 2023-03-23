// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ["india","pakistan","russia","china","australia","usa","brazil"];
console.log(countries.includes("Ethiopia"));

countries.push("Ethiopia");
console.log(countries);

// print 'ETHIOPIA'
console.log(countries[7]); 