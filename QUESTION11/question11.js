// 11. Use the Date object to do the following activities
let now = new Date();
console.log(now);
console.log(now.toString());
    // - What is the year today?
    console.log(now.getFullYear());
   // - What is the month today as a number?
    console.log(now.getMonth());
    // - What is the date today?
    console.log(now.getDate());
    // - What is the day today as a number?
    console.log(now.getDay());
    // - What is the hours now?
    console.log(now.getHours());
    // - What is the minutes now?
    console.log(now.getMinutes());
    // - Find out the numbers of seconds elapsed from January 1, 1970 to now.
var y = new Date("January 1, 1970 0:0:0");
var x = new Date("march 4, 2023 0:0:0");
let seconds = x.getTime() - y.getTime();
console.log(seconds);

