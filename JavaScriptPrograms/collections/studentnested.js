var std=[                  //9/12/2020.............35:45

[1,"st1","mca",142],
[2,"st2","mca",145],
[3,"st3","bca",145],
[4,"st4","bca",135],


]


//print all student name

for(let student of std){

    console.log(student[1])
}

//find number of students doing mca
var cnt=0
for(let student of std){

    if(student[2]=="mca"){

cnt++;
        
        
       
    }
}
console.log("no of students doing mca" +  cnt)

//find total of marks those who are in bca

var total=0;

for(let student of std){
    if(student[2]=="bca"){
    total=total+student[3]

    }

}
console.log(total)


//find student who have highest mark




