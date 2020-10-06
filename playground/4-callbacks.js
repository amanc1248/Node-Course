// const { constants } = require("buffer");
// const { setTimeout } = require("timers");

const { setTimeout } = require("timers")

// setTimeout(
//     ()=>{
//         console.log("Two seconds are up");
//     },2000
// )

// const theMissionData = ["Dasa", "Ecommerce"]
// const theMision = theMissionData.filter((name)=>{
//     return name.length<=3
// })

// const geocode = (address,callback)=>{
//     setTimeout(() => {
//         const data = {
//             latitude:0,
//             longitude:0
//         }
//          callback(data)
//     }, 2000);
// }
// console.log(geocode("Kathmandu",(data)=>{
//     console.log(data)
// }));

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a,b,callback)=>{
    setTimeout(() => {
        console.log("Two seconds delay");
         callback(a+b)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})