// 12. Create a human readable time format using the Date time object
// 
//     
//     

let date = new Date();
// - YYYY-MM-DD HH:mm
console.log(date);
// - DD/MM/YYYY HH:mm
console.log(date.toLocaleString('en-US'));
// - DD-MM-YYYY HH:mm
console.log(date.toLocaleString('nl-NL'));
