// key of operator
// kisi bhi ppt ki key nikalna

interface person12{
    name : string;
    age : number;
    email : string;
}
// key chahiye

type PersonKeys = keyof person12;
const a:PersonKeys = 'email'
console.log(a);