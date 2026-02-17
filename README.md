Create a README file to answer the following questions-

1) What is the difference between null and undefined?
= null হলো একটি ইচ্ছাকৃতভাবে খালি মান। অর্থাৎ ডেভেলপার নিজে ভেরিয়েবলকে খালি রাখতে `null` ব্যবহার করে।  
undefined হলো একটি ডিফল্ট মান, যা বোঝায় যে ভেরিয়েবলটি ডিফাইন করা হয়েছে কিন্তু কোন মান দেয়া হয়নি।  
উদাহরণ:
javascript
let a; // undefined, মান দেয়া হয়নি
let b = null; // null, ইচ্ছাকৃতভাবে খালি

2. What is the use of the map() function in JavaScript? How is it different from forEach()?
= map() ফাংশন একটি array-এর প্রতিটি element এ কাজ করে এবং একটি নতুন array return করে।
forEach() শুধুমাত্র প্রত্যেক element এর উপর কাজ করে, কিন্তু কোনো value return করে না।
উদাহরণ:
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
numbers.forEach(num => console.log(num)); // কোনো নতুন array return হয় না

3. What is the difference between == and ===?What is the difference between == and ===?
== → value চেক করে, type না দেখেই। (loose equality)
=== → value এবং type দুটোই চেক করে। (strict equality)
উদাহরণ:
5 == "5";  // true
5 === "5"; // false

4. What is the significance of async/await in fetching API data?
= async/await ব্যবহারে asynchronous কোডকে synchronous-এর মতো লেখা যায়, যা কোডকে পরিষ্কার এবং পড়তে সহজ করে।
API call বা network request করার সময়, এটি promise handle করা সহজ করে এবং error management ভালো হয়।
উদাহরণ:
async function fetchData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

৫. Explain the concept of Scope in JavaScript (Global, Function, Block).
= let globalVar = 10; // global scope
Function Scope: শুধু function এর ভিতরে accessable।

function test() {
  let localVar = 5; // function scope
}
console.log(localVar); // Error
Block Scope: শুধু { } ব্লকের ভিতরে accessable। (let, const এর ক্ষেত্রে)

{
  let blockVar = 20; // block scope
}
console.log(blockVar); // Error
