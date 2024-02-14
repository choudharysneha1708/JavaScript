const myNums =[1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.map((num)=>num+10);

// chaning
const newNum = myNums.map((num)=>num*10)
                .map((num)=>num+5).filter((num)=> num>=50)
console.log(newNum);
// map is just like a for each loop but in that every value is returned
// we can perform any operation on value 
// if we start a scope then we need to write return automatically it won't return 

// reducer 
let intialValue = 0;
const SumOfAll = myNums.reduce(function (acc, currVal){
    // console.log(acc, ' ', currVal);
    return acc+ currVal;
}, intialValue)

// reducer by the help of arrow function
const Total = myNums.reduce((acc,currVal)=>(acc+currVal), intialValue)
console.log(Total);
console.log(SumOfAll);
const ShoppingCart =[
    {
        itemName : "js",
        price : 200
    },
    {
        itemName : "react",
        price : 500
    },
    {
        itemName : "python",
        price : 1000
    }
]
const TotalPrice = ShoppingCart.reduce((acc,item)=>(item.price+acc),0)
console.log(TotalPrice);