function Q4(){
     console.log(num1);//ReferenceError: Cannot access 'num3' before initialization
     console.log(num2);//undefined
     console.log(num3);//ReferenceError: Cannot access 'num3' before initialization
    let num1=9;
    var num2=8;
    const num3=98;
    console.log(num1);//9
    console.log(num2);//8
    console.log(num3);//98
}
Q4();