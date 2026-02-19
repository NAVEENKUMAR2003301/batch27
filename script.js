
// // // javaScript 

// // // Variable

// // // var    - global scope & function scope

// // // let    - block scope

// // // const  - block scope

// // // rules 

// // // var 

// // var a = 10   // declration // intialiazation

// //     a = 15   // reuse     // reInitialiazation

// // var a  = 20  // reDeclration

// // console.log(a);


// // // let 

// // let b = 10 // declration // intia

// //     b = 13 // reuse  // reIntia

// // // let b = 20  not accept reDeclration

// // console.log(b);

// // // const - constant

// // const c = 10  // declration and Intialiazation

// //     //   c = 30  not accept reuse and reIntia

// // // const c = 40 reDeclration is not accept

// // console.log(c);


// // // example


// // var a = 10;
// // a = 25;
// // console.log(a);  // 25


// // let b = 30;
// // b = 40;
// // console.log(b); // 40


// // var x = 10;
// // var x = 20;
// // console.log(x); // 20 

// // const c = 50;
// // console.log(c);  // 50

// // const z = 300;
// // z = 500;
// // console.log(z);  // type error

// // var a = 60;
// // console.log(a);  // 60


// // let b = 70;
// // console.log(b);  // 70


// // let b = 20;
// // b = true;
// // console.log(b);  // true


// // printing Statement 

// // 1. console.log()

// let a = 10

// console.log(a);
// console.log(100);



// // 2. Alert()

// // alert(a) 

// // 3. confirm()


// // confirm("did you like js") 
  

// // 4. prompt()

// // prompt("what is your name") 

// // 5. document.writeln()

// // document.writeln(a) 



// // example


// // 1. i want to ask question to user side as same as user wish also i want to know.

// // let userWish = confirm("did you learnt js ?")

// // console.log(userWish);


// // 2. i want show my name in user side through popup

// // alert("navi")

// // 3. i want to print username in console side

// // let userName = prompt("what is your name")

// // console.log(userName); 


// // 4. i want to print my name in ui side

// // document.writeln("navi")


// // console method 


// // 1. console.log()

// console.log(100);


// // 2. console.warn()

// console.warn(100);


// // 3. console.error()

// console.error(100);


// // 4. console.clear()

// console.clear()


// // DATA TYPE

// // 1. primitive DataType

// // 1. string - "abc","123"

// let a1 = "navi"

// console.log((a1));


// // 2. number

// let b1 = 123

// console.log(typeof(b1));


// // 3. boolean

// let c1 = true

// console.log(typeof(c1));


// // 4. undefined

// let d1 

// console.log(d1);


// // 5. null

// // let e1 = prompt()

// // console.log(e1);


// // 2. non-primitive DataType

// // 1. array - index

// // syntex - []

// let fruit = ["guava","apple","orange","cherry","pine-apple"]

// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[2]);

// console.log(fruit[0]);
// console.log(fruit[fruit.length-1]);



// // 2. object - dot notation

// // syntex - {}

// let detialInfoFruit = {
//     redFruit : ["apple","cherry"],
//     yellowfruit : "pine-apple",
//     greenFruit  : "guava",
//     remain      : "orange" 
// }

// console.log(detialInfoFruit);
// console.log(detialInfoFruit.redFruit[0]);
// console.log(detialInfoFruit.remain);

// console.clear()

// // operators 


// // 1. arithmetic operator 

// // meaning          operator

// // addition            + 

// console.log(1 + 2);

// // subraction          - 

// console.log(1 - 2);

// // multiplication      *

// console.log(2 * 2);

// // division            / 


// console.log(5 / 3);   


// // modulus            %


// console.log(5 % 3);


// // Exponencial        **

// console.log( 2 ** 3); // 2*2*2 = 8


// // increament        ++ = +1

// // pre Increament      ++var

// // post Increament     var++


// let num1 = 10

// num1++

// console.log(num1);

// //


// // your searching Element if your found in variable, that value side calculate till variable.


// let num2 = 2     // null

// num2     = num2++ // 2

// num2     = num2++ // 2

// console.log(num2);


// let num3 = 2     // null

// num3     = ++num3 // 3

// console.log(num3);


// // your searching Element if you find in value.that value side you calculate all the value.


// let num4 = 3      // 
// let num5 = num4++ // num4 = 3


// console.log("num4 : ", num4); // num4 :- 4
// console.log("num5 : ", num5); // num5 :- 3


// let num6 = 2      //  
// let num7 = --num6 // --num6 = -1+2 = 1
// let num8 = num7++ // num7 = 1

// console.log("num6 : ",num6); // num6 :- 1
// console.log("num7 : ",num7); // num7 :- 2
// console.log("num8 : ",num8); // num8 :- 1


// // 2. assignment operator

// let num9 = 2

// let additionVal = 100

//  num9 **= additionVal

// console.log(num9);


// console.clear();


// // 3. comparision or relational operator


// // meanning         operator         example     result


// // lessThen            <               5<6         true

// // greaterThen         >               5>5        false

// // lessThenEq          <=              5<=5        true

// // greaterThenEq       >=              5>=6        false

// // loosyTypeEq         ==              5=="5"      true

// // loosyNotEq          !=              5!="5"      false

// // strictlyTypeEq      ===             5==="5"     false

// // strictlyNotEq       !==             5!=="5"     true


// console.log("5"!="5"); // false 
// console.log(5==".5");  // false
// console.log(5>5);      // false




// // 4. logical operator

// // AND - &&

// // true && true && true = true 

// // false && false && true = false

// // false && true  && true = false

// // OR  - ||

// // false || false || false = false 

// // true  || false || false = true

// // true || false  || true  = true

// // NOT - !


// // !(true) = false , !(false) = true 

// // example 

// console.log(5===5 && 5>=5 && 5!=5); // false
// // true && true && false
// console.log(5>5 || 5===.5 || 8>=0); // true

// // false || false || true           
// console.log(!(7>=7));                // !(true) = false





// // 5. ternary operator

// // syntex

// // condition ? statement : statement;


// 5!==5 ? console.log("true") : console.log("false");

// console.clear();




// // Concatenation (+)

// let str1 = "hello"
// let str2 = "world"

// console.log(str1 +" "+ str2); // hello world


// // Template string


// let str3 = "spider"
// let str4 = "man"

// console.log(`${str3} ${str4}`);


// // Type Conversion

// // Implicit Type Conversion


// let str = "hello"
// let num = 1

// console.log(typeof(str + num));


// // String 

// // String anything String

// console.log(typeof("1" + "1"));
// console.log(typeof("1" + 1));
// console.log(typeof("1" + true));
// console.log(typeof("1" + undefined));
// console.log(typeof("1" + null));
// console.log(typeof("1" + [1,2]));
// console.log(typeof("1" + {k:1}));

// // number

// console.log(typeof(1 + "1"));
// console.log(typeof(1 + 1));
// console.log(typeof(1 + true));
// console.log(typeof(1 + undefined));
// console.log(typeof(1 + null));
// console.log(typeof(1 + [1,2,3]));
// console.log(typeof(1 + {g : 1}));

// // boolean

// console.log(typeof(true + "1"));
// console.log(typeof(true + 1));
// console.log( typeof(true + true));
// console.log( typeof(true + undefined));
// console.log( typeof(true + null));
// console.log( typeof(true + [1,2]));
// console.log( typeof(true + {d:4}));




// // Explicit type conversion 

// console.log(1 + Number("1"));

// // Number - (Number) constractor

// console.log(Number());
// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("abc"));
// console.log(Number(123));
// console.log(Number(true));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number([1,6,7]));
// console.log(Number({k:9}));

// // boolean - Boolean

// console.log(Boolean());
// console.log(Boolean(""));
// console.log(Boolean("123"));
// console.log(Boolean("abc"));
// console.log(Boolean(-1));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean([1,2]));
// console.log(Boolean({l:0}));

// console.clear();


// // Flow control statement 

// // conditional Statement

// // if Statement

// // condition true = allow

// // syntex ,

// // if(condition){
// //     // statement
// // }

// // example 

// if(6=="6"){

//     console.log("true value Activate");
    
// }


// // if else statement


// // condition true = if inside allow, false = else inside allow


// // syntex

// // if(condition){
// //     console.log("true activate");
    
// // }else{
// //     console.log("false part activate");
    
// // }


// // example 

// if(2){
//     console.log("hello");
    
// }else{
//     console.log("welcome");
    
// }




// // else if Statement


// // let hour = prompt("enter the time use 24hrs format")

// // if(hour >= 1 && hour <= 6){
// //     alert("good morning");
    
// // }else if(hour >= 7 && hour <= 12){
// //     alert("morning");
    
// // }else if(hour >= 13 && hour <= 16){
// //     alert("good Afternoon");
    
// // }else if(hour >= 17 && hour <= 19){
// //     alert("good evening");
    
// // }else{
// //     alert("good night");
    
// // }



// // // nested if statement


// // let age = prompt("enter your age")
// // let height = prompt("enter your height use cm")
// // let weight = prompt("enter your weight use kg")


// // if(age >= 18){
// //     if(height >= 160){
// //         if(weight >= 60){
// //             alert("congradulation your selected⭐⭐⭐⭐");
            
// //         }else{
// //             alert(`your weight :- ${weight}kg , not selected , basic weight 60kg.`);
            
// //         }
// //     }else{

// //         alert(`your height :- ${height}cm , not selected , basic height 160cm.`);
        

// //     }
// // }else{
// // alert(`your age :- ${age}old , not selected , basic age 18yr old.`);
    
// // }


// // Switch

// // syntex

// // switch(condition){

// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //     case value : statement ; break ;
// //     case value : statement ; break ;

// // }


// // example 

// let trafficLight = ""

// switch(trafficLight){
//     case "red" : console.log("stop vechile"); break ;
//     case "yellow" : console.log("start vechile"); break ; 
//     case "green" : console.log("go go go"); break ;
//     default : console.log("enjoy the day");   
    
// }

// console.clear();



// // looping Statement


// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


// // for loop 

// // syntex

// // for(intialiazation ; condition ; iteration){
// //     statement
// // }

// for(let i = 1 ; i <= 5 ; i++){
//     console.log(i);  // 1 2 3 4 5
// }

// // i = 1 ; 1 <= 5 = true ; 1++ = 2
// // i = 2 ; 2 <= 5 = true ; 2++ = 3
// // i = 3 ; 3 <= 5 = true ; 3++ = 4
// // i = 4 ; 4 <= 5 = true ; 4++ = 5
// // i = 5 ; 5 <= 5 = true ; 5++ = 6
// // i = 6 ; 6 <= 5 = false . 

// // while loop

// // syntex

// // intialiazation

// // while(condition){
// //     statement 

// //     iteration
// // }


// let val1 = 3

// while(val1 >= 10){
//     console.log("while loop :- ",val1);

//     val1--
    
// }

// // 3 , 3>=0 = true , 3 , 3-- = 2
// // 2 , 2>=0 = true , 2 , 2-- = 1
// // 1 , 1>=0 = true , 1 ,1-- = 0
// // 0 , 0>=0 = true , 0 , 0-- = -1
// // -1,-1>=0 = false .










// // do while loop 

// // syntex

// // intialiazation

// // do{
// //     statement 

// //     iteration
// // }

// // while(condition)


// let val2 = 3

// do{
//     console.log("do while :",val2);

//     val2--
    
// }

// while(val2 >= 0)







// // for of loop 

// // string , Array , function


// let str11 = "javascript"
// let array = ["one","two","three","four","five"]

// // syntex

// for(let a of str11){

//     console.log(a);
    

// } 

// for(let b of array){
//     console.log(b);
    
// }



// // for in loop

// // object

// let obj = {
//     name1 : "john",
//     role  : "developer",
//     salary: 2000000,
//     joinDate : "12/4/2025" 
// }


// for(let c in obj){
//     console.log(obj[c]);
    
// }


// console.clear();



// // function 


// // block of code excute
// // we can perform the task
// // repeatation code avoid
// // return the value
// // expression
// // parameter
// // callback function


// // syntex

// // function one(parameter){
// //     // statement
//        // return
//        // yeild
// // }

// // one(arguments)


// // function one(){

// //     for(let a = 1 ; a<=10 ; a++){
// //         console.log(`${a}*2=${a*2}`);
        
// //     }
    
// // }



// function two(a,b){
//     console.log(a);
//     console.log(b);
    
    
// }

// two("hello","hi")


// function form(a,b){

//     console.log("name :",a);
//     console.log("department :",b);
    

// }

// form("kamal","ece")



// // return keyword

// // function returnVal(a){
// //     return a
// // }



// // let return1 = returnVal(100);

// // console.log(return1);


// // function three(){

// //     console.log("three :-",return1);
// // }

// // three()

// function three(){
//     console.log(100);
    
// }

// three()




// function four(){
//     return 100
// }

// let newVal = four()

// function five(){
//     console.log("five :",newVal);
    
// }

// five()





// // // expression

// // const ex1 = function (a,b){
//     //     console.log("hello");
// //     console.log(a+b);
    

// // }

// // ex1(5,6)


// // scopes 


// // var = global scope 

// // let = block scope

// // const = block scope

// function scopeCheck(){
//     if(true){
//         var a12 = "global scope"
//         let b12 = "block scope"
//         const c12 = "block scope1"
//         console.log(b12);
//         console.log(c12)
//     }
    
//     console.log(a12);
    
// }

// scopeCheck()

// // hoisting



// console.log(a13);

// var a13 = "hello"




// let b131 = 12

// console.log(b131);


// const c131 = 20
// console.log(c131);

// // types of fyunction

// // named function 
// named("named function")

// function named(parameter){
//     console.log(parameter);
    
// }


// // annonymous function

// var annonymous = function(parameter){
//     console.log(parameter);
    
// }

// annonymous("annonymous function")

// // Arrow function

// var arrow = (parameter)=>{
    
//     console.log(parameter);
    
    
// }

// arrow("arrow function")

// console.clear();




// // callback function and higherorder function

// function function1(){
//     console.log("higher order function");
    
// }

// function function2(){
//     console.log("callback function");
    
// }


// function1(function2())


// // example 


// function add(callback,a,b){ // callback = sub, a = 20 , b = 40
//     console.log(a+b);       // 20 + 40 = 60
//     callback(20,20)         // sub(20,20)
// }

// function sub(num1,num2){  // num1 = 20 , // num2 = 20
//     console.log(num1-num2); // 20 - 20 = 0
    
// }



// add(sub,20,40)

// //  60,0



// // currying format

// function a121(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
            
//         }
//     }
// }


// a121(10)(20)(30)


// // IIFE - self invoke function

// (function(parameter){
//     // statement
// })(// arguments)


// (function(price,discount){
//     alert(`now sales on going Earbuds only ${price}rs, sales on max discount ${discount}%`)
// })(1000,50)


// generator function

function*gen1(){
    yield "first scratch you get 10rs"
    yield "try again keep doing"
    yield "you get 50% flat off"
    yield "you get 100 rs cashback"
}

let genval = gen1()

// console.log(genval.next().value);
// console.log(genval.next().value);
// console.log(genval.next().value);
// console.log(genval.next().value);
// console.log(genval.next());

for(let a of genval){
    console.log(a);
    
}


function form1(a,b,c,d="no"){

    console.log("name : ",a);
    console.log("department : ",b);
    console.log("blood group : ",c);
    console.log("disability : ",d);
    

}

form1("john","CSE","A+ve","yes")
form1("paul","CSE","A+ve")


console.clear();


// Data Stracture


// spread operator

// array , object

// we can merge two array and object, also clone

// array spread operator - [...]

let array1 = [1,2,3,4]
let array2 = [5,6,7,8]

let TotalArr = [...array1,...array2,9,10]

console.log(TotalArr);


// Object Spread operator - {...}

let object1 = {
    name1 : "a",
    role  : "trainee",
    salary: 1000000
}

let object2 = {
    name1 : "b",
    role  : "developer",
    salary: 4000000
}

let allData = {...object1,...object2}

console.log(allData);





// rest operator

// function - (...)

// we can store n number of argument in single parameter

// example


function one(a,b,...c){
    console.log(a + b + c[0]);

    console.log(c);
    
    
    
    
}

one(1,2,3,4,5,6,7,8)

console.clear();




// destracture


// array destracture

// normal 

let normalArr = [1,2,3,4]

let mem1 = normalArr[0]
let mem2 = normalArr[1]
let mem3 = normalArr[2]
let mem4 = normalArr[3]

console.log(mem1 + mem4);


// destracture 

let [c1,c2,c3,c4] = normalArr

console.log(c1 + c4);


// object destracture 

let normalObj = {
    name1 : "john",
    role  : "developer"
}

let m1 = normalObj.name1
let m2 = normalObj.role

console.log(m1,m2);


// destracture

let {name1, role} = normalObj

console.log(name1,role);


// nested Val 


let nested = [1,2,3,[4,5,[6,7,[8]]]]

let n1 = nested[0]
let n2 = nested[1]
let n3 = nested[2]
let n4 = nested[3][0]
let n5 = nested[3][1]
let n6 = nested[3][2][0]
let n7 = nested[3][2][1]
let n8 = nested[3][2][2][0]

console.log(n5,n8);

// destracture

let [d1,d2,d3,[d4,d5,[d6,d7,[d8]]]] = nested

console.log(d5, d8);


// Advance Array Concept

let arr = [0,1,2,3,4,5,6,"hello",true,undefined,null,[1,2,3],{k:4}]

console.log(arr);
console.log(arr[0]);
console.log(arr[3]);

console.log(arr[0]);
console.log(arr[arr.length-1]);


// homogenious

// hetrogenious

// flexible

console.clear();

// condition :- 

// 1. adding , u can add n number of value

// 2. removing , u can remove only one value  

// Array manipulate method

let sample = [1,2,3,4]

// pop() - we can remove the value , array last side

sample.pop()

// push() - we can add value , array last side

sample.push(4,5,6,7,8)

// unshift() - we can add the value ,  array first side

sample.unshift(0.1,0)

// shift() - we can remove the value , array first side

sample.shift()



console.log(sample);



// splice() // Starting Index , Removing Count , Adding Count

let sample1 = [1,2,3,4,50,60,70,8,9]

sample1.splice(0,3,1,2,3)

console.log(sample1);



// function returnVal(){
//     return 12
// }

// let return1 = returnVal()


// merge array method

// concat(),

let arr4 = [1,2,3,4]
let arr5 = [5,6,7,8]

let concatVal = arr4.concat(arr5,9,10)

console.log(concatVal);


// slice(),

let arr6 = [1,2,3,4,50,60,70,80,9,10,11]

let sliceVal = arr6.slice(4,8) // si , ei + 1

console.log(sliceVal);



// flat(),

let nested1 = [1,2,3,[4,5,[6]]]

let flatVal = nested1.flat(Infinity)

console.log(flatVal);



// fill(),

let arr7 = [1,2,3,4] // 1,2,3,"four"

arr7.fill("four",3,4) // value , si ,ei + 1

console.log(arr7);



// includes(),


let arr8 = [1,2,4,4,65656,3,2,6]

let includesVal = arr8.includes(6)

console.log(includesVal);



// sort(), // drawback

let arr9 = [1,2197,5000,3,7,8,4,9]

let sortVal = arr9.sort()

console.log(sortVal); // 2.197 > 3 = false



// indexOf(), 

let arr10 = [1,2,4,3,2,1]

let indexOfVal = arr10.indexOf(2)

console.log("index number :- ",indexOfVal);


// lastIndexOf(),

let lastIndex = arr10.lastIndexOf(2)

console.log("index number :- ", lastIndex);



// reverse()

let arr11 = [1,2,3,4]

let reverseVal = arr11.reverse()

console.log(reverseVal);







































// // 3. function

// // 4. date