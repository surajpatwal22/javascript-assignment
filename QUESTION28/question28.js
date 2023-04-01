// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

let n=4 ;
let string = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*"
        
    }
    string +="\n"
    
}
console.log(string);
	
	// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	//    ***
	//    ***
	//    ***

    let m=3 ;
let string1 = "";
for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
        string1 += "*"
        
    }
    string1 +="\n"
    
}
console.log(string1);

	// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	//      *
	//     ***
 	//    *****
