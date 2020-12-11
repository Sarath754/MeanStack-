var arr=[1,2,3,4,6]    //output=6(2,4)


//0  1  2  3  4  

//1  2  3  4  6

//l           u 

arr=arr.sort((num1,num2)=>num1-num2)

var low=0;

var upp=arr.length-1;

var element=6;

while(low<upp){

    let total=arr[low]+arr[upp];

    if (total>element){

        upp=upp-1;
    }

    else if(total<element){

        low=low+1;
    }

    else{

        console.log(arr[low]+","+arr[upp]);
        break;
    }



}