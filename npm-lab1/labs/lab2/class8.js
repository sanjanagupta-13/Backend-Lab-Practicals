class myClass{
    constructor( a, b){
        this.a=a;
        this.b=b;
    }
     print(a,b){
        console.log("i get "+a+" mark out of "+b);
     }
}
let obj=new myClass(5,10);
console.log(obj.a);
console.log(obj.print(10,10));