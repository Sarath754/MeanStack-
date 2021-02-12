class parent{            //23/12/2020.........[13:00]{18}
    m1=()=>{

        console.log("inside parent1")
    }
}


class child extends parent{
    m2=()=>{

        console.log("inside child")
    }
}


class subchild extends child{
    m3=()=>{
 
        console.log("subchild")
    }
}

var sb=new subchild()

sb.m3()
sb.m2()
sb.m1()

var ch=new child()
ch.m2()
ch.m1()

var p=new parent()

p.m1()