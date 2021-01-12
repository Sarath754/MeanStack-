                     //7/12/2020................22.46

var arr=[8,6,2,7,3,]                 

// sorting

//  arr     [8,  6,  2,  7,  3]

//  index   [0,  1,  2,  3,   4]
//  postition

//          i   j


for(let i=0;i<arr.length;i++){

    for(let j=0;j<arr.length;j++){


if(arr[i]>arr[j]){

    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;



}


    }
}


console.log(arr)

// ........................or..........................................

var arr=[8,3,4,2];

arr.sort((num1,num2)=>num1-num2); //meaning of num1-num2= num1 has to come before num2

console.log(arr)






