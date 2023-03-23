// Write a program to check that the number given by the user is a prime number or not.
let input = prompt("enter any number:");
let isprime = input == 1 ? false:true;  //bcoz 1 is not prime

for(let i=2;i<input;i++){
  input%i==0? isprime*=false :isprime*=true;
};

alert(`${input} is ${isprime? 'prime':'not prime'} number`);