class Empolyee{

constructor(eid,ename,desig,salary){

this.eid=eid;

this.ename=ename;

this.desig=desig;

this.salary=salary;


}

printEmp=()=>{

console.log(this.eid);
console.log(this.ename);
console.log(this.desig);
console.log(this.salary)

}

}

let obj=new Empolyee(100,"sarath","developer",25000)

obj.printEmp()

let obj1=new Empolyee(100,"Dhoni","Batsman",22000)

let obj2=new Empolyee(100,"Jadeja","allrounder",27000)


var arr=[]

arr.push(obj)

arr.push(obj1)

arr.push(obj2)

console.log(arr)



//print only empolyee name

arr.forEach(emp=>console.log(emp.ename))

//print in upper case

// arr.forEach(emp=>console.log(emp.ename.touppercase()))

//print employee whose salary >23000

arr.filter(emp=>emp.salary>23000).forEach(emp=>console.log(emp.ename))

//find highest salary


var sal=arr.map(emp=>emp.salary).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)

console.log(sal)