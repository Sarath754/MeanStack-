// class student{
// setstudent=(rol,name,course)=>{

// this.rol=rol;
// this.name=name;  //this. ===instance variables
// this.course=course;


//  }

// printstudent=()=>{

//     console.log("name"+this.name);
//     console.log("rol"+this.rol);
//     console.log("course"+this.course)



// }

// }


// var obj=new student();

// obj.setstudent(84,"sarath","Btech");

// obj.printstudent()

//......................................

// console.log(obj.name)

//.............................................

// obj.name="Sarath"

// console.log(obj.name)


//different types of variables

//instance variables

//instance variables are always prepended with this keyboard

//we can access instance variable with int the class by using "this" keyword

//we can access instance variable outside class by using reference name.instance variable name

//eg:console.log(obj.name)

//................................................................................



//setstudent()   duty? =initilizating instance variable==constructor




class student{
    constructor(rol,name,course){
    
    this.rol=rol;
    this.name=name;  //this. ===instance variables
    this.course=course;
    
    
     }
    
    printstudent=()=>{
    
        console.log("name"+this.name);
        console.log("rol"+this.rol);
        console.log("course"+this.course)
    
    
    
    }
    
    }
    
    
    var obj=new student(84,"sarath","Btech");
    
    
    
    obj.printstudent()
