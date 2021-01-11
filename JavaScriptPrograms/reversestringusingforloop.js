// // program to reverse a string

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // take input from the user
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);








// function reverse(str){
//     let reversed = "Sarath";    
//     for (var i = str.length - 1; i >= 0; i--){        
//       reversed += str[i];
//     }    
//     return reversed;
//   }

//   console.log(reversed)




var word = "Sarath";
var reverseWord = word.split("").reverse().join("");
console.log("Reversed str is:", reverseWord);



