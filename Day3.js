//1 problem
//Expected output: 
// [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 104, name: 'Tablet' },
//   { id: 106, name: 'Camera' }
// ]
let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];
let seen = [];
let cleanedInventory = inventory.filter(item => {
  let nameLower = item.name.toLowerCase();
  if (seen.includes(nameLower)) {
    return false; // duplicate
  } else {
    seen.push(nameLower); // mark as seen
    return true; // keep first occurrence
  }
});
console.log(cleanedInventory);


//2problem
//Expected output: { Food: 200, Transport: 120, Shopping: 300 }

let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];

let grouped = transactions.reduce((acc, curr) => {
  if (acc[curr.category]) {
    acc[curr.category] += curr.amount;
  } else {
    acc[curr.category] = curr.amount;
  }
  return acc;
}, {});

console.log(grouped);