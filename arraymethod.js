var i=["apple", "Banana" ,"Cherry" ,"Dates"];
console.log(i);
console.log(i[0]);
console.log(i[1]);
console.log(i[2]);
console.log(i[3]);
console.log(i[4]);
i[2]="Jacfruit"
console.log(i)


var a=["aaaa","bbbb","cccc","ddddd"]
for(var j=0;j<=4;j++)
{
    console.log(a[j])
}
console.log(a.length);
const g=new Array('D','u','s','t');
//typeof
console.log(typeof(g))
console.log(typeof(a))
console.log(g)
//total value
console.log(g[0])

//array to string
console.log(a.toString('a'))

//shift
console.log(a.shift())//Removing 1st element of array
console.log(a)

//unshift
console.log(a.unshift('zzzzz'))//Adding new element to the 1st element of array
console.log(a)

//Array Method 
var l=['D','h','a','n',]
var ll=['b','a','v','y','a']
var v=["aaaa","bbbb","cccc","ddddd"]

//Push
console.log(l)//Dhan
console.log(l.push('y' ,'a'));// add  ya
console.log(l)//Dhanya

//splice
console.log(v.splice('1','1',"Kiruba"))//remove 1
console.log(v)

//slice
console.log(v.slice('1','3',))//display 1 &2 kiruba,cccc
console.log(v.slice(2))//it display from 2,3


//pop
console.log(l)//Dhanya
console.log(l.pop('a'));//Delete a
console.log(l)//Dhany


//concat
console.log(l)//Dhany
console.log(ll)//bavya
console.log(l.concat(ll));// Dhanyabavya

//join
console.log(l.join(""))//Dhany
console.log(l.join(" "))//D h a n y
console.log(l.join("    "))//D  h  a  n  y
console.log(l.join(","))//D,h,a,n,y

//reverse
console.log(l.reverse( ))//ynahD


