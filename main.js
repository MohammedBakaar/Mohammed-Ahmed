let stringNum = "123" ;
console.log(Number(stringNum) + 7); //1

let value = 0 ;
if(!value)
{
    console.log("invalid"); //2
    
}
for (let i = 0; i <= 10; i++) {
    if(i % 2 == 0) continue ; 
    console.log(i);//3
    
    
}
let noteven = [1, 2, 3, 4, 5];
let even = noteven.filter((ele)=>{
    return ele % 2 == 0 ;
})
console.log(even); //4


let arr =[1,2,3];
let arr2=[4,5,6];
arr.push(...arr2)
console.log(arr);//5
let day = 5;
switch(day){
case  1 :
    {
        console.log("Sunday");
        break;        
    }
    case  2 :
    {
        console.log("Monday");
        break;        
    }
    case  3 :
    {
        console.log("Tuesday");
        break;        
    }
    case  4 :
    {
        console.log("Wednesday");
        break;        
    }
    case  5 :
    {
        console.log("Thursday");
        break;        
    }
    case  6 :
    {
        console.log("Friday");
        break;        
    }
    case  7 :
    {
        console.log("Saturday");
        break;        
    }
    default:
    {
        console.log("Invalid day");
        break;        
    }

}//6

let str = ["a", "ab", "abc"];
let strlength = str.map((str)=>{
    return str.length
})
console.log(strlength); //7

function Check( num) //8
{
    if (num % 3 == 0 && num % 5 ==0) {
        return "divisible by both"
    }
    return "Not divisible by both"
}

console.log(Check(45));
 let square = x => x * x ;
console.log( square(4)); //9
const person = {
    name : "john",
    age : 25
}
let {name , age } = person ;
console.log(`${name} is ${age} years old`); //10
function sum (a , ...b)
{

    for (let i = 0; i < b.length; i++) {
        a += b[i] ; 
    }    
    console.log(a);
    
}
sum(5 , 10 , 12 , 14) //11

function large(arr)
{
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > num ) num = arr[i];
        
    }
    console.log(num);
    
}

function promises(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Success")
        },3000)
    })
}
promises().then((mes)=>{console.log(mes);
});



large([1,2,7,5,9]) // 13
function keysobject (person)
{
    console.log(Object.keys(person));
}
keysobject(person); //14
let s ="The quick brown fox";
function split(word)
{
    console.log(word.split(" "));
    
}
split(s);//15
