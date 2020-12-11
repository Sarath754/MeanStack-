var arr=[1,5,3,6,2,8,4];

//linear searching

var element=10 ;

var flag=0;

 for(let items of arr){

if(items==element){

flag++;

break;

}

 }


 if(flag==0){

    console.log("element not found")
 }

 else{

    console.log("element found")
 }