var emp=[
// 0    1       2         3 
[100,"sarath","developer",25000],
[200,"dhoni","crickter",50000],
[300,"chennai","ipl",100000]



]

// for(let empolyess of emp){


//     console.log(empolyess)
// }

//print only empolyee name

for(let empolyess of emp){


    console.log(empolyess[1])
}


//print all empolye recongination 

for(let empolyess of emp){


    console.log(empolyess[2])
}

//print all empolyee details whose salary >25000


for (let empolyess of emp){

    if(empolyess[3]>25000){

        console.log(empolyess)
    }
}


//find total of all empolye salary
var total=0;
for(let empolyess of emp){

    total=total+empolyess[3]

}
console.log(total)