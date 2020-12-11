var arr=[6,2,5,3,1,4];


arr.sort((num1,num2)=>num1-num2);

console.log(arr)

// 1 2 3 4 5 6    this is array

// 0 1 2 3 4 5

//l    m e   u      

var element=3; //e

var low=0;
var upp=arr.length-1

var flg=0;
while(low<=upp){

var mid=Math.floor(upp+low)/2;  //5+0/2=2.5=2 mid assign cheythu

if(element>arr[mid]){

low=mid+1;

}

else if(element<arr[mid]){

    upp=mid-1;
}


else if(element==arr[mid]){

    flg++
    break;
}

}

if(flg==0){

    console.log("element not found");
}

else{

    console.log("element found");
}






//case1
// if element>arr[mid]    3>arr[2]==3>3   condition is false


//case2
//if element<arr[mid]     3<arr[2]=3<3     condition is false

//case3
//if element ==arr[mid]   3==3             condition is true

