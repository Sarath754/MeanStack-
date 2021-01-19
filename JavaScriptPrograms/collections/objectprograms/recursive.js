var pattern="ABABC"                       //11/12/2020.......47:00 {15}

var dict={}

for (let char of pattern){

if(char in dict){

    console.log("frist recursive char"+char)
    break;
}

else{

    dict[char]=1   
}

}