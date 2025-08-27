


//Expected output: ['Laptop', 'Mobile', 'Watch']

let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2, 2);
console.log(products); 



// Expected output:  ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1, 0, 'Nina', 'Omar');
console.log(students); 



// Expected output: ['Zainab', 'Ali', 'Farhan']

let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
let topPerformers = scores.slice(0, 3);
console.log(topPerformers); 



// Expected output: [390, 310]

let sales = [220, 300, 280, 150, 400, 390, 310];
let last2Days = sales.slice(-2);
console.log(last2Days); 





//Expected output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]

let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
let activeUsers = users.filter(user => user.active);
console.log(activeUsers); 


//Expected output:['1234567890', '9876543210']

let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let validNumbers = phoneNumbers.filter(num => num.length >= 10);
console.log(validNumbers); 


//Expected output:[118, 236, 354]

let prices = [100, 200, 300];
let pricesWithTax = prices.map(price => price * 1.18);
console.log(pricesWithTax); 


//Expected output:  ['google.com', 'amazon.com', 'microsoft.com']

let sites = ['google', 'amazon', 'microsoft'];
let domains = sites.map(site => site + '.com');
console.log(domains); 


//Expected output:2896

let cart = [499, 1299, 299, 799];
let total = cart.reduce((sum, price) => sum + price, 0);
console.log(total); 


//Expected output:{ A: 3, B: 2, C: 1 }

let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let voteCount = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});
console.log(voteCount); 
