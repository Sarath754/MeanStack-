var pattern="ABABC"

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