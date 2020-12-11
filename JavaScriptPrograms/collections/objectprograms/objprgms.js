var students={


    rol:100,
    name:"ajay",
    course:"bca",
    total:150
}

//key:value

//duplicate keys are not allowed

//duplicate values are allowed

//accesing values

//if we want to acess value we have to use corresponding value

console.log(students.rol)

//or..............................

console.log(students["rol"])



for (let std in students){

    console.log(std+','+students[std])
}


//checking for a specific key

console.log("gender" in students)

// adding a new key value pair

 students["gender"]="male";

 console.log(students)


 // adding 25 to th total 150

 students["total"]+=25

 console.log(students)


