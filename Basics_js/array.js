const myArr = [0,1,2,3,4,5];
const Heros = ["Sneha", "choudhary"];
console.log(myArr[0]);
const myarr2 = new Array(1,2,3,4);
myarr2.push(2);
myarr2.unshift(3);// insert 3 at first position and shoft rest element by one
myarr2.shift(); // remove first element from array and  shift all element by one position in front;
console.log(myarr2.includes(8)); // includes is just like  find operation in js if element is present then it will return true otherwise it will return false
console.log(myarr2.indexOf(8)); // return index of that element in array if that element is not present in array then it will return -1;
const newArr = myArr.join(); // this join operation convert all value of array in string and spearte values with comma
// slice => array ka woh part print hota h usme v upper bound included nhi hota h 
// splice => array ka pura woh part nikal jata hai array se , so wapis se jb original array ko print kre ge toh usme woh part nhi rahe ga and isme upper bound v included hota h
console.log("A ", myArr);
const mynewArr1 = myArr.slice(1,3);
console.log(mynewArr1);
console.log("B ", myArr);
const myNewArr2 = myArr.splice(1,3);
console.log(myNewArr2);
console.log("C ", myArr);
const marvel_hearos = ["thor", "Sneha", "rahul"];
const dc_heros = ["shivangi", "pankti"];
marvel_hearos.push(dc_heros); // inside array you can push any type of value  , if u push array inside array it will treat array as a single element it won't give any error 
console.log(marvel_hearos[3][0]);
// if u do concat dc_heros inside marvel_heros it will merge both array properly and it returns a new array
const newArr1= marvel_hearos.concat(dc_heros);
//spread
const all_new_heros = [...marvel_hearos, ...dc_heros, ... newArr1]; // it also works same as concat here benifts is we can concatinate more that one array in one pass

const another_array = [1,3,2,[4,5,6], 7,[6,7,[4,5]]];
const real_another_array = another_array.flat(3); // flat -> it will spread all value in single array
console.log(Array.isArray("Sneha")); // it will the value is array or not
console.log(Array.from("Sneha")); // it convert inside value into array
console.log(Array.from({name: "Sneha"})); // in this you need to tell of which thing you want to make array i.e. of key or value
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // it convert into array from set of element

