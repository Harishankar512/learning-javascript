//var a=45;
var a=62;
console.log(a);
let b=26;
 b=23;
console.log(b);
const c=29;
console.log(c);
let userData=[10,"hello",false,null];
for(let index= 0; index < userData.length;index++)
{
    console.log(userData[index]);
}
//adding and removing at last
userData.push(20);
userData.pop(10);
console.log(userData);
//adding and removing at first
userData.shift(30);
console.log(userData);
