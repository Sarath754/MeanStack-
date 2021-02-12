//                                         //33:27 {18}           23/12/2020

class parent{
    phone=()=>{

        console.log("have nokia 5310")
    }
}

class child extends parent{

    phone=()=>{     //override cheythu 

        console.log("i have nokia")
    }
}

var ch=new child()

ch.phone()