//for
for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(i);
    if(index==5){
        // console.log("5 is the best number");
    }
}
for (let index = 0; index < 10; index++) {
    // console.log(`Outer loop values: ${i}`);
    for(let j=0; j<10; ++j){
        // console.log(`Inner loop values ${j}`);
    }
}
let myArray = ["Sneha", "Shivangi", "Pankti"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
//   console.log(element);
}
let index =0;
while(index <=10){
    // console.log(`${index}`);
    index+=2;
}
index = 0;
while(index<myArray.length){
    // console.log(myArray[index]);
    index ++;
}
let score = 1;
do{
    // console.log(score);
    score++;
}while(score<10)
// break, continue;
const Arr =[1,2,3,4,5];
for (const val of Arr) {
    // console.log(num);
}
const greetings = "Hello World";
for (const chr of greetings) {
    // console.log(chr);
}
// for in loop -> by the help of this 
const languageSyntax ={
    js : 'JavaScript',
    cpp: 'C++',
    java: "Java",
    py: "Pythons"
}
for (const key in languageSyntax) {
    // console.log(key,' ', languageSyntax[key]);
}

const arr =[1,2,3,4,5];
for(let key in arr){
    // console.log(key);
}
const map = new Map();  // as map is not itteratable we can't use for in loop on map
map.set(1,'sneha');
map.set(2,'Rahul');
map.set(3,'shivangi');
map.set(4,'pankti');
for(let [key,value] of map){   
    // console.log(value);
}

// for each loop
// arr.forEach( function (item){
//     console.log(item);
// })
arr.forEach((item)=>{    //for each loop by using arrow function
    // console.log(item);
})

function calculateSquare(item){
    // console.log(item*item);
}
arr.forEach(calculateSquare);
arr.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})
const myArr =[
    {
        language: "java",
        fileName: "A"
    },
    {
        language: "Python",
        fileName: "P"
    },
    {
        language: "C++",
        fileName: "C"
    }
]
myArr.forEach((item)=>{
    // console.log(item.language, item.fileName);
})

// filter is just kind of loop in that each item of data structure we can return 
const newNums = [1,2,3,4,5,6,7,8,9,10];
// const x = newNums.filter((num)=> num>4);
// const x = newNums.filter((num) => (num > 4));  
const x = newNums.filter((num) =>{
    return num > 4;
});
// above are the way by the help of which u can use fillter

// we can also do the things of fillter function by the help of any loop
const y =[];
newNums.forEach((nums)=>{
    if(nums>5){
        y.push(nums);
    }
})

const books=[
    {
        title:"Process Manager",
        genre:"IT",
        publish:1960
    },
    {
        title:"Radar Principle",
        genre:"Astronomy",
        publish:1980
    },
    {
        title:"Singal and System",
        genre:"ECE",
        publish:2020
    }
];
const BookWHichSnehaRead = books.filter((bk)=> bk.genre==='Astronomy' && bk.publish>2000)
console.log(BookWHichSnehaRead);

