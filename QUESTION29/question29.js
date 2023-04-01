//Write a javascript program which takes the input of filename as string and prints the extension of the file in the console

const getFileExtension = (filename) => {
    const extension = filename.split(".").pop();
    return extension ;
}

let result1 = getFileExtension('question.txt');
console.log(result1);