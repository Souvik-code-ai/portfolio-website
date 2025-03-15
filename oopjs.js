/*const a={"name":"souvik",
    "age":21,
marks()
{
    console.log("mrks is 60")
},
"doy":function(){//during function calling we should use the key name as function calling 
    console.log("doy is 2003 and age is ",this.age);
    //this.age=this.age+5;
    a["age"]=a["age"]+1;//alternate process
},
pin(){
    return "pin is 150";
}};
console.log(a);
console.log(a["name"]);
a.marks();//when we are calling a function inside an object where console.log() is already present
console.log(a.pin());//when we are calling a function inside an object where return statement is present
a.doy();
console.log(a.age);
console.log(a["age"]);*///alternate process
//to include methods and functions of class into another class
/*const a={"name":"souvik",
    "age":21,
marks()
{
    console.log("mrks is 60")
},
"doy":function(){//during function calling we should use the key name as function calling 
    console.log("doy is 2003 and age is ",this.age);
    //this.age=this.age+5;
    a["age"]=a["age"]+1;//alternate process
},
pin(){
    return "pin is 150";
}};
const b={"state":"wb"};
b.__proto__=a;//it means all the object functions and methods of a object is included in the object of b but not vice versa
b.doy();
console.log(b.age);
console.log(b["state"]);*/
//if same method is presnt in both the class
/*const a={"name":"souvik",
    "age":21,
marks()
{
    console.log("mrks is 60")
},
"doy":function(){//during function calling we should use the key name as function calling 
    console.log("doy is 2003 and age is ",this.age);
    //this.age=this.age+5;
    a["age"]=a["age"]+1;//alternate process
},
pin(){
    return "pin is 150";
}};
const b={"state":"wb","name":"purkait"};
b.__proto__=a;//it means all the object functions and methods of a object is included in the object of b but not vice versa
b.doy();
console.log(b.age);
console.log(b["state"]);
console.log(b.name);*///when same method is present in both the object it will give value of the object into ehich value of another object is inserted
//inheritance 
/*class student{
    name(){
        console.log("my name is souvik.");
    }
    address(){
        console.log("address:Radhagobindopally");
        this.name();
    }
    contact(){
        console.log("contact:123");
    }
}
let cr=new student;
cr.name();
cr.address();*/
//when constructor is included
/*class student{
    constructor(age){
        this.age=age; 
    }
    name(){
        console.log("my name is souvik.");
    }
    address(){
        console.log("address:Radhagobindopally");
        this.name();
    }
    contact(){
        console.log("contact:123");
    }
}
let cr=new student(21);
console.log(cr.age);
cr.name();
cr.address();*/
//inheritance os two class
/*class student{
    constructor(age){
        this.age=age; 
    }
    name(){
        console.log("my name is souvik.");
    }
    address(){
        console.log("address:Radhagobindopally");
        this.name();
    }
    contact(){
        console.log("contact:123");
    }
}
class souvik extends student{
    individual(height){
        super.name();
        this.height=height;
    }    
}
let cr=new student(21);
console.log(cr.age);
cr.name();
cr.address();
let ron=new souvik;
ron.individual("5ft6inch");
console.log(ron.height);*/
//including constructor in child class
/*class student{
    constructor(age){
        this.age=age; 
    }
    name(){
        console.log("my name is souvik.");
    }
    address(){
        console.log("address:Radhagobindopally");
        this.name();
    }
    contact(){
        console.log("contact:123");
    }
}
class souvik extends student{
    constructor(age,dob){
        super(age);
        this.dob=dob;
    }
    individual(height){
        super.name();
        this.height=height;
    }    
}
let cr=new student(21);
console.log(cr.age);
cr.name();
cr.address();
let ron=new souvik(22,2003);
console.log(ron.age);
console.log(ron.dob);
ron.individual("5ft6inch");
console.log(ron.height);*/
//use of try and catch function
/*let a=2;
let b="3";

try{
    if(typeof a===Number)
        {
            if(typeof b===Number)
            {
                sum=a+b;
            }
        }
    console.log("a+b",sum);
}catch(obj){//obj means print the error name.obj can be any other name
    console.log("unsuccessful");
    console.log(obj);//err means it 
}
//settimeout function
/*function ab(a,b)
{
    console.log("helloworld");
}
setTimeout(ab,4000);
//if we want to use any argument in settimeout we should use arror function instead of function definition
function bc(a,b)
{
    setTimeout(()=>{
        console.log(a+b);
    },5000);
}
bc(1,4);*/
//if we want to perform more than one operations in one after another manner with more than one argument
/*function sum(a,b){
    setTimeout(()=>{
        console.log(a);
        if(b){
            b();
        }
    },2000);
}
sum(1,()=>{
    sum(2,()=>{
        sum(5,()=>{
            sum(6);

        });
    });
});*/
//to solve the complicacy of callback function promise is used
/*const pro=new Promise((resolve,reject)=>{
    console.log("helloworld");
});*/
//resolve 
/*const pro=new Promise((resolve,reject)=>{//resolve and reject can be in any other name
    resolve("souvik");//it will not be printed but will be showed in status of promise
    console.log("helloworld");
});*/
//reject
/*const pro=new Promise((resolve,reject)=>{//resolve and reject can be in any other name
    reject("incorrect index");//it will  be printed as an error statement
    console.log("helloworld");
});*/
//including then and catch function
/*const pro=new Promise((resolve,reject)=>{//resolve and reject can be in any other name
    reject("incorrect index");
    console.log("helloworld");
});
let per=pro;
per.then((res)=>{//then will be used if resolve statement is used
    console.log(res);
});
per.catch((err)=>{//catch will be used if reject statement is used
    console.log(err);
});*/
//use in multioperation statement
/*function sum(a){
    return new Promise((resolve,reject)=>
        setTimeout(()=>{
            resolve("done");
            console.log(a);
    },2000));
}
sum(1).then((res)=>{
    sum(2).then((res)=>{
        sum(3).then((res)=>{
            sum(4);
        });
    });
});*/
//use of async-await function(when asysnc-await is used we will have to take help of promise with resolve function)
/*function sum(a){
    return new Promise((resolve,reject)=>
        setTimeout(()=>{
            resolve("done");
            console.log(a);
    },2000));
}
async function Ab(){
    await sum(2);
    await sum(5);
    await sum(6)
}
Ab();*/
//alternate process without using async function statement
/*function sum(a){
    return new Promise((resolve,reject)=>
        setTimeout(()=>{
            resolve("done");
            console.log(a);
    },2000));
}

(async function(){
    await sum(2);
    await sum(5);
    await sum(6)
})();*/
//pre and post increment operator
/*let a;
a=2;
console.log(a++);//as it is pre increment operator value can  be incremented on preincrement line but it can not be printed on that line
console.log(a);
let b;
b=2;
console.log(++b);//as it is post increment operator value can  be incremented on postincrement line and that value can be printed in same line
console.log(b);*/
//another procedure
/*let a=2;
let i=a++;
console.log(i);//as it is preincrement operator the variable under which preincrement is performed,prints old value
console.log(a);
let b;
b=2;
let j=++b;
console.log(j);//as it is postincrement operator the variable under which preincrement is performed,prints incremented  value
console.log(b);*/
/*const a={
    "name":"souvik","age":20,"address":"wb"
};
let i;
for(i in a)
{
    console.log(`the value is ${a.i}`);//when iterator is used  a.i can not be used
}
console.log("name:",a.name);
console.log(`name:${a.name}`);*/
let a="https://potterapi-fedeperin.vercel.app/pt";
let b=fetch(a);
console.log(b);
//api using in async-await
const apifun=async()=>{
    let api_fun=await fetch("https://potterapi-fedeperin.vercel.app");
    console.log(api_fun);
    let json_fun=await api_fun.json() ;
    console.log(json_fun["message"]);
    console.log(json_fun.status);
}
apifun();




