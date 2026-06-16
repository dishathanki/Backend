// Fundamentals of java script
    // 1 arrays and objects
    // 2 function return 
    // 3 async js coding


                            // foreach map filter find indexOf
var arr = [1,2,3,4]
    // arr.forEach(function(val)
    //     console.log(val+" hello");
        
    // })

// map :- used to create new array from exisiting array
    // var newarr = arr.map(function(val){
    //     return 12;
    // })

    // console.log(newarr);

// filter :- create new array by changing the value from orginal array but it doesn't change the orginal array
    // var ans = arr.filter(function(val){
    //     if(val>=3){
    //         return true;  
    //     }else{return false;}
    // })
    // console.log(ans);
    
// find :- find element from array and return it based on user requirement
    // var ans = arr.find(function(val){
    //     if(val===2){return val;}
    // })
    // console.log(ans);

// indexOf :- it returns the index of given element is presnet in the array

                            // OBJECTS
// simple {} is also an null or empty object
// var obj = {
//     name:"disha",
//     age:21,
//     marks:90
// }
// how to access elements of object 
    // 1. obj.name 
    // 2. obj['name']

// if we don't wanna change the value of it we can simply freez that particular object
    // Object.freeze(obj)

// how to update the value :-> if objs is marked as freeze then we can not change the value 
    // obj.age = 25
    // console.log(obj);
    

                            // Async JS Coding


async function abcd() {
    var data = await fetch('https://randomuser.me/api/')                            
    var response = await data.json()
    console.log(response.results[0].name);    
}                            
abcd()