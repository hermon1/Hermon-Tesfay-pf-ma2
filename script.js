// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log(petArray[1]);

// question 3
petArray.push("sheep");

// question 4
console.log(petArray.length);


// question 5
var catObject = {
  name: "Felix",
  colour: "black",
  age: 3,
};

// question 6
console.log(catObject.age); 

// question 7
var catArray= [catObject]; 


// question 8
var catArray= [
    { 
    
    name: "Felix", 
    colour: "black", 
    age: 3 
    }]
    
    for(var i = 0; i < catArray.length; i++) { 
     
    console.log(catArray[i]); 
    } 
    

// question 9 
function logToConsole(animal) { 

    console.log("animal"); 
    }


// question 10
logToConsole("donkey"); 

function logToConsole() { 
console.log("donkey"); 
} 
 