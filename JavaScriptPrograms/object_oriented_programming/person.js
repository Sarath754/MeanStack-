//class=>blue print,plan,design,pattern   for build a construction           //22/12/2020    [22]   6:25

//object=>real world  entity.............eg-(mi tv) mi is the object and tv is the class

//reference=>remote is the refrence   taking any task in the object


class person{


setPerson=(age,names,gender)=>{

this.age=age;
this.names=names;
this.gender=gender;

}

printperson=()=>{

   console.log("name"+this.names);

    console.log("age"+this.age);

    console.log("gender"+this.gender)

}

}

//there are two methods in this prgm    1)setperson    2)print person

//object


var obj=new person();

obj.setPerson(25,"Sarath","male");

obj.printperson()

var obj1=new person();

obj1.setPerson(30,"Dhoni","male")

obj1.printperson()

var obj3=new person()

obj.setPerson(15,"raina","male")

obj.printperson()




  


