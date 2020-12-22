//reduce

var arr=[1,2,77,99,101]

//max,total,min 

var data=arr.reduce((no1,no2)=>no1>no2?no1:no2)

console.log(data)

var data=arr.reduce((num1,num2)=>num1<num2?num1:num2)

console.log(data)


//find the total sum

var sum=arr.reduce((num1,num2)=>num1+num2);

console.log(sum)