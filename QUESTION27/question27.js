// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

const lowernumber = parseInt(prompt('enter lower number :'));
const uppernumber = parseInt(prompt('enter higher number : '));

console.log(`prime numbers between ${lowernumber} and ${uppernumber} are :`);

for (let i = lowernumber; i <= uppernumber; i++) {
let remain = 0;

for (let j = 2; j < i; j++) {
    if (i%j==0) {
        remain = 1;
        break;
        
    }   
}
if (i>=1 && remain==0 ) {
    console.log(i);
    
}
}