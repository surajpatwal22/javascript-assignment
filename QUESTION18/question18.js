// . Write a program which tells the number of days in a month, now consider leap year.



let Month = prompt("enter month name");

if ('January' === Month || 'March' === Month || 'May' === Month || 'July' === Month || 'Agust' === Month || 'October' === Month || 'December' === Month) {
console.log(`${Month} has 31 days`)
}
else if ('February' === Month) {
console.log(`${Month} has 29 days`);
} 
else if ('April' === Month || 'June' === Month || 'September' === Month || 'November' === Month) {
   console.log(`${Month} has 30 days`)
}
else{
console.log('Re-Enter');}