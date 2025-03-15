//alert("Hi everyone.Welcome to my portfolio website.")
//we may also use alert with window object
window.alert("souvik");
//same as for prompt
console.log(window)//window object is automatically created by the browser
console.log("hello");
window.console.log("helloworld");//same output like hello beacause console.log is the part of window object
//DOM(DOCUMENT OBJECT MODEL)>to make dynamic or runtime change dom is used
//full html code is available in dcument of js.document is also present in window
//to print full html code 
console.log(window.document);
//to print the object or DOM of html code
console.dir(window.document);
//we may write document also
console.dir(document);
//to get dom of body
console.dir(document.body);
//to get code of body
console.log(document.body);//if we use script tag in head it will show null object.that is 
//why script  is written at the end of body tag  
//to get code of head
console.log(document.head);
console.dir(window.document.head);//to get code and dom of 1st tag under body tag
console.log(document.body.childNodes[1]);//1 means 1st child tag under body tag.prints full html code of the child tag
console.dir(document.body.childNodes[1]);
//to get innertext of particular tag
console.log(document.body.childNodes[2].innerText);//as it is hr tag output will be undefined
console.dir(document.body.childNodes[1].innerText);//1st div of body has so many child tag which contains text.as a result all text will be printed
//console.dir(document.body.childNodes[1].childNodes[2].innerText);//it is not possible syntax
//to change style of tag
//console.log(document.querySelector("#whole").style.backgroundColor="black");
//console.dir(document.querySelector("#whole").style.backgroundColor="white");
console.log(document.querySelector("body").childNodes[1]);//first childnode of body tag is combination of all parent tag which all are printed
console.log(document.querySelector("#cont").innerText);/*innerText prints any innertext and also innertext of any sub tag of specified query.
That is why innertext will display the text of first tag and it's subtag only if no of same specified query has same tag.*/ 
console.log(document.querySelector("#contacts").innerHTML);/*innerHtml generally prints any html code if present under specified query.But here the ph id has no internal code.
That is why it will print only text document*/
console.log(document.querySelector("#ph").innerHTML);/*here same query is present in various tag.among them the query of first tag will be preferred 
console.log(document.querySelector("#ph").innerText);
/*insertion innertext if any subtag is present is present(if innertext is used by a specified query,It will print only the innertext along the query)*/
//let doing=window.document.querySelector("#contacts").innerText="helloworld";
//console.log(window.document.querySelector("#contacts")); 
//console.log(doing);
/*insertion of innertext if no subtag is prsent(it will also print only the innertext statement with the specified quey tag)*/
//let done=window.document.querySelector("#sub").innerText="hello";
//console.log(done);
//console.log(window.document.querySelector("#sub"));
/*use of innerhtml query if a tag has subtag(it will give output with the innerhtml only)*/
//let done=document.querySelector("#sub").innerHTML="<p>helloworld</p>";
//console.log(document.querySelector("#sub"));
//use of innerhtml if a tag has no subtag(same process of recent on)\
//append method with innerhtml
/*let append_html=document.createElement("div");//here div is parent tag into which innerhtml is written
append_html.innerHTML="<p>my html</p>";//tag with statement of parent dag div mentioned in createlement
console.log(append_html);
let app=document.querySelector("#contacts").append(append_html);
console.log(document.querySelector("#contacts"));*/
//append method with innertext
/*let append_html=document.createElement("div");//here div is parent tag intp which innerhtml is written
append_html.innerHTML="my html";//tag with statement of parent dag div mentioned in createlement
console.log(append_html);
let app=document.querySelector("#contacts").append(append_html);
console.log(document.querySelector("#contacts"));*/
/*prepend method(same as append method but inserts at the end of the specified query)*/
//tagname(it returns the tag name of specified query)
/*let you=document.querySelector("#cont").tagName;
console.log(you);*/
//getattribute method
/*let ga=document.querySelector("#contacts").getAttribute("class");
console.log(ga);*/
//set attribute method
/*let ga=document.querySelector("#contacts").setAttribute("class","go");//to change the attribute value
console.log(document.querySelector("#contacts").getAttribute("class"));*///to print the attribute value
//events using js method
/*let even=document.querySelector("#sub");
even.ondblclick=()=>{
    console.log("done");//when mouseover event is done it is shown
    alert("it is done");//when mouseover is ongoing,it will be shown 
};*/
//using arrow function
/*let even=document.querySelector("#sub");
even.addEventListener("mouseover",()=>{
    console.log("done");//when mouseover event is done it is shown
    alert("it is done");//when mouseover is ongoing,it will be shown 
});*/
//include event object
/*let even=document.querySelector("#sub");
even.addEventListener("dblclick",()=>{
    console.log("done");//when mouseover event is done it is shown
    alert("it is done");//when mouseover is ongoing,it will be shown 
});*/
//error handing in javascript
/*try{//in case of try block if any error occurs,the interpreter moves to catch and execute operation
    let a=2;
    let b=6;
    let sum=(a+b);
    console.log(sum);
}catch{
    console.log("it is not possible");
}*/
//try with fuction
/*function sum(a,b)
{
    try{
        
        let sum=(a+c);
        console.log(sum);
    }catch{
        console.log("it is not possible");
    }
}
sum(2,5);*/
//settimeout function
/*function sum(a,b)
{
    a=3;
    b=3;
    console.log(a+b);
}
setTimeout(sum,10000);*///when we are calling function in settimeout value can not be used in function calling
//use of function in settimeout directly
/*setTimeout(()=>{//when we are directly using a function in settimeout we should not usee any argument and also declare variable inside the function definition
    let a=3;
    let b=4;
    console.log(a+b);
},5000);*/
//function usage 
/*function sum(data,nextdata)
{
    setTimeout(()=>{
        console.log(data);
        if(nextdata)
        {
            nextdata();
        }
    },3000);
}
sum(1,()=>{
    sum(2,()=>{
        sum(3);
    })
})*/
//promise function
//use of promise funciton under a variable
/*let fcx=new Promise((resolve,reject)=>
    {
        console.log("helloworld");
        resolve("It is done");//resolve means the operation is suucessful
    });
fcx.then((err)=>//IF THE status of fcx is resolve enters here
    {
        console.log("SUCCESSFUL");

    });
fcx.catch((err)=>//IF THE status of fcx is reject enters here
    {
        console.log("errOR");
    });*/
//use of promise funciton under a variable
/*let fun=()=>{
    return new Promise((resolve,reject)=>
    {
        console.log("It is a promise function");
        resolve("successful");
    });
};
let p1=fun();
p1.catch((err)=>{//as it is catch function operation of resolve can never enter here
    console.log(err);
});*/
//use of promise under simple funciton
/*function fun(){
    return new Promise((resolve,reject)=>
    {
        console.log("It is a promise function");
        resolve("successful");
    });
}
let p1=fun();
p1.catch((err)=>{
    console.log(err);
});*/
//simple function with argument
/*function fun(a,b){
    return new Promise((resolve,reject)=>
    {
        console.log("It is a promise function");
        console.log(a+b);
        reject("successful");
    });
}
let p1=fun(2,3);
p1.catch((err)=>{
    console.log(err);
});*/
//arrow function with argument
/*let fun=(a,b)=>{
    return new Promise((resolve,reject)=>
    {
        console.log("It is a promise function");
        reject("successful");
        console.log(a+b);
    });
};
let p1=fun(3,2);
p1.catch((err)=>{
    console.log(err);
});*/
//when we are using two types of function,simple function will be taken as first preference
//promise function in error handling
/*function sum(data)
{
    return new Promise((resolve,reject)=>
        setTimeout(()=>{
            console.log(data);
            resolve("done");
        },3000));
}
sum(1).then((err)=>
{
    console.log(err);
    sum(2).then((err)=>{
        console.log(err);
        sum(3).then((err)=>{
            console.log(err);
        });
    });
});*/
// use of async await function
/*function sum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(a+b);
            resolve("success");//due to use of resolve function the compiler will move to next await function other wise not
        },5000);
    });
}
async function sub1(){
    await sum(2,5);
    await sum(6,7);
}
sub1();*/
//without using async function calling
function sum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(a+b);
            resolve("success");//due to use of resolve function the compiler will move to next await function other wise not
        },5000);
    });
}
(async function sub1(){
    await sum(2,5);
    await sum(6,7);
})();

