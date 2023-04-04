
// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).
var i;
for (i = 0; i <= 10; i++) {
    if (i == 0) {
        let evenArr = [`${i} is even`];
        console.log(evenArr);

    } else if (i % 2 == 0) {
        let evenArr = [`${i} is even`];
        console.log(evenArr);

    }
    else {
        let oddArr = [`${i} is odd`];
        console.log(oddArr);
    }


}
    
    

