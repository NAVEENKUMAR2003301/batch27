

// adding value in input tag

// eventHandler

let input = document.querySelector("input")

function adding(a){

    input.value = input.value + a

    // variable =  0 + 9 = in.v = 9
    // variable = "9" + "8" = "98"


}


// clear All Value 

function clr(){
    input.value = ""
}

// Del Functionality


function del(){
    input.value = input.value.slice(0,input.value.length-1)

    ///         = 789.slice(0,2) = 7 - >0 , 8 -> 1 , 9 -> 2.
}


// final eval

function final(){
    input.value = eval(input.value)

}








