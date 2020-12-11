var employee={

eid:100,
name:"don",
exp:2,
salary:15000

}



//print empolyee name

console.log(employee.name)

//iterte empolyee

for (let emp in employee){

    console.log(emp+","+employee[emp])
}


//check gender key is there

console.log("gender" in employee)

//add new key value pair  gender:male

employee["gender"]="male"

console.log(employee)

//update salary with 5000

employee["salary"]+=6000;

console.log(employee)
