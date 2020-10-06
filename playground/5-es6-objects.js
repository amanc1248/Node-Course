//object property shorthand
const name = "Andrew";
const userAge = 25;

const userDetail = {
  name,
  userAge,
};
console.log(userDetail);

//object destructuring.
const product = {
    label:"Red NoteBook",
    price:25000,
    ship:"Kathmandu"
}
const {label,price,ship,rating=1} = product
console.log(rating);

const transaction = (address, {label,price})=>{
    console.log(address,label,price);
}
transaction("Amahi",product)