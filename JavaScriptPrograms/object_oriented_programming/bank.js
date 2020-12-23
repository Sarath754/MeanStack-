class Bank{

    accountCreate=(acno,name,minimum_balance)=>{

        this.acno=acno,
        this.name=name,
        this.minimum_balance=minimum_balance;

    }

    deposit=(amount)=>{

        this.minimum_balance+=amount;
        console.log("your account"+this.acno+"has been credited with amount"+amount+"ava balance"+this.minimum_balance)

    }


withdraw=(amount)=>{

    if(this.minimum_balance>=amount){

        this.minimum_balance-=amount;
        console.log("your account"+this.acno+"has been debited with amount"+amount+"ava balance"+this.minimum_balance)

    }

    else{
        console.log("insuffiencent balance")
    }
}


balanceEnq=()=>{

    console.log("aval balance"+this.minimum_balance)
}





}

var obj=new Bank()

obj.accountCreate(100,"sarath",5000);

obj.deposit(20000)




