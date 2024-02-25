const map = new Map();
map.set('In', 'India');
map.set('USA', 'United States of America');
map.set('Fr', "France");
console.log(map);
// for (const element of map) {
//     console.log(element);
// }
for (const [key, value] of map) {
    console.log(key, '->' , value);
}
const myObj ={ // by the help of for of loop we can't itterate on itterator
    'Game1': 'NFS',
    'Game2': 'syz',
}

