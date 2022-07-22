/*Hoisting*/
var a=10;
let b=20;
const c=13;
console.log(a)
console.log(b)
console.log(c)

/* Hoisting Step*/
var a;//Undefined
let h;//Unintialized
//const u;
a=1; 
h=2;
u=1;

//hositing
//1 var & console

var f=12;//var f; f=12
console.log(f);//12

//2 Console & Var
console.log(d);//d is undefined 
var d=12;

//3 var ,init & console
var f;
f=20;
console.log(f)//20

//4 var ,console,int
var ddd;
console.log(ddd)//undfind
ddd=32;

//1 let & console
let cc=23;
console.log(cc);//23

//2 console & let
//console.log(fff)//not intial
//let fff=13

//3 let inti console
let t;
t=43;
console.log(t);//43

//4 let,console,int
let hj;
console.log(hj)//undefined
hj=12

//5 ccc=12345;
//console.log(ccc)//not int
//let ccc;//Runtim errror


//1 const & console
const zzz=1234567;
console.log(zzz)//1234567

//2 cons & const

//console.log(vvvv)
//const vvvv=234;//not inti run time error

//3 const,init,cons

//const fffff;
//fffff='babu'
//console.log(fffff)//Unintialaized

//4  const,consol,ini
//const jj;//Unintialaized
//console.log(jj)
//jj=12222222;

//5 cons,con,in
//console.log(jjjjjj)
//cont jjjjjj;//unintialize
//jjjjjj=54

//Function Definition oly hoisting
//Function Dclerartion not hoisting


//Function CALL AT LAST
function v()
{
    console.log("hello")//hello
}
v();


//Function CALL AT first
vvv();
function vvv()
{
    console.log("hello")//hello
}


//FUnction dclaration
var xxxx=function(){
console.log("HI")
}
xxxx()

//xxxxx();
//var xxxxx=function(){
    //console.log("HI")//typeerror
  //  }
    



  //let

  let ccccc=function(){
    console.log("let")//let
  }
  ccccc();



  //let @1st
  //cccccc();
  //let cccccc=function(){
    //console.log("let")//error
  //}
  

  //Self Invoing Function
let nam="abc";
(function(){
    console.log(nam);
    let rr=78;
    console.log(rr)
})();
//2
let name="abc";
(function(){
    let name="ert";
    console.log(name);
    })();

//name
var dd={name:"Gowthami"}
console.log(dd.name);//Gowthami

console.log(ddd.name);//Undefined
var ddd={name:"Gowthami"}

//let
let cdd={name:"Gowmi"}
console.log(cdd.name);//Gowthami

console.log(dcdd.name);//Undefined
let dcdd={name:"Gowmi"}
