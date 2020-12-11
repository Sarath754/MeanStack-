let arr=[3,4,6]         //ouput=10,9,7 

 var total=0;

 for(let num of arr){

total+=num;

 }

 console.log(total)


 //13-3=10

 //13-4=9

 //13-6=7

 var res=[]

 for (let num of arr){

    item=total-num;

    res.push(item);


 }

 console.log(res)





 //slice method


 