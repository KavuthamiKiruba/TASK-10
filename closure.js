/* Local Variable */

function local() {
    var i = 2;//Local Variable
    console.log(i * i);//2*2=4
}
local();

/*Console log define Outside*/

/*functoion loca(){
  /*  var i=2;//Scope value Present Inside
}
/*console.log(i*i);//i is not definded
loca();



/* global Variable */

var o = 4
function global() {
    console.log(o * o)
}
global();

/* Counter with Global Variable*/

var counter = 0;//global Variable
function myfunction() {
    counter += 1//countr=counter+1//1 2 3 4

}
myfunction();//0+1=1
myfunction();//1+1=2
myfunction();//2+1=3
myfunction();//3+1=4
console.log(counter)//It takes local variable output so answer is 4. 




/*Counter with Global & local Variable*/
var count = 0;
function myfunct() {
    var count = 0;//local variable
    count += 1
    console.log(count)//Its taekes Local Variable O/P=1 @ all the time
}
myfunct();
myfunct();
myfunct();
console.log(count)//Its Globle Variable so 0
/*document.getElementById("p").innerHTML=counter;



/* Using return */

function n() {
    var i = 0;
    i += 1;
    console.log(i)//1
    return i;//return function always return to the same function and perfrm same value//iNIALIZE

}

n()//1
n()//1
/*ITS CRATE BUTTON IN THE PAGE */
/*function on(){
    document.getElementById("p").innerHTML=n();
}



/*nESTED fUNCTION IT INCREASE THE VALUE*/
function y() {
    var f = 0;
    function k() {
        f += 1//f=f+1;
    }
    k();
    console.log(f)
    return f; 
}
y()
function ao() {
    document.getElementById("p").innerHTML = y()
}

/* To avoid all the nested and return type repetition use closure */
/*Closure Use Self INVOING FUNCTION AND INSIDE SELF INVOING FUNTION  ANNOYNOMS FUNC*/

var v = (function () {                                   //self Invoking Function
    var s = 0;
    console.log(s)//0

    return function () {                               //Annonymous Function Present Inside The Self Invoing Function
        s += 1;
        console.log(s)//1,2,3,4
        return s;
    }
}
)
    ();

function slf() {
    document.getElementById("p").innerHTML = v()
}