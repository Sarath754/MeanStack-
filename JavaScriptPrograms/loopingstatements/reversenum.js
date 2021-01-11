// 123........321

// var num=123;

// while(num!=0){

//     var digit=num%10;   //3
//     console.log(digit); 
//     num=Math.floor(num/10);             //12 remove the point values
   

// }



var num=1234;

var data=""

while(num!=0){

    var digit=num%10;
    data=data+String(digit)
    num=Math.floor(num/10)

}
console.log(data)

