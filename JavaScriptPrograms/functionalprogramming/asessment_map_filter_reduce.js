var employees=[                            //  21/12/2020.....33:08[16]

{id:100,name:"sarath",salary:25000,year_join:1980,year_resign:1990},

{id:100,name:"M S Dhoni",salary:22000,year_join:1982,year_resign:1989},

{id:100,name:"raina",salary:30000,year_join:1980,year_resign:1991},

{id:100,name:"jadeja",salary:18000,year_join:1975,year_resign:1992},

{id:100,name:"watson",salary:25000,year_join:1978,year_resign:1985}


]

//print all empolyee names

//external iteration

for(let emp of employees){

    console.log(emp.name)
}

//.......................or..................

//internal iteration

employees.forEach(emp=>console.log(emp.name))

//print all employee whose salary > 24000

var emp=employees.filter(emp=>emp.salary>24000)

console.log(emp)

//only name have to print whose salaray >24000             

employees.filter(emp=>emp.salary>24000).forEach(emp=>console.log(emp.name))

//print employees whose experience >10 years               1:00:00

employees
.filter(emp=>(emp.year_resign - emp.year_join)>=10)
.forEach(emp=>console.log(emp.name))


//find highest salaried employee                       1:08:00

var salaray=employees.
    map(emp=>emp.salary).
      reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)

console.log(salaray)