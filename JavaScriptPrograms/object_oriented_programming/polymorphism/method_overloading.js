//what is polymorphism==may forms (more than one form)



class Mathspg{                  //23:20 {18}           23/12/2020

add(){
    console.log("no arg method")
}

add(num1){

    console.log("single arg method")
}

add(num1,num2){

    console.log("two arg method")
}


}

var m=new Mathspg()

m.add()

//method overloading====last output matharame work avoluu....ie==two arg method

//same method name different number of arguments =method overloading

//will execute only recently implemented method