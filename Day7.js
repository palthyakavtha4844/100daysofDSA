//problem 1
// // Initial array of delivery orders
let orders = [
    { orderId: 1, deliveryTime: "12:00" },
    { orderId: 2, deliveryTime: "12:30" }
];

// New order that we want to insert
let newOrder = { orderId: 3, deliveryTime: "12:15" };

// Function to insert the new order at the correct position
function insertOrder(orders, newOrder) {
    // Loop through the array to find the right position
    for (let i = 0; i < orders.length; i++) {
        if (newOrder.deliveryTime < orders[i].deliveryTime) {
            // Insert at the found position
            orders.splice(i, 0, newOrder);
            return orders;
        }
    }
    // If not inserted, add to the end
    orders.push(newOrder);
    return orders;
}

// Calling the function
let updatedOrders = insertOrder(orders, newOrder);
console.log(updatedOrders);

//problem 2

// Array of user objects
let users = [
    { username: "ali", isActive: true },
    { username: "sara", isActive: false },
    { username: "john", isActive: true }
];

// Function to filter only active users
function getActiveUsers(users) {
    // Use filter to return only users with isActive true
    let activeUsers = users.filter(function(user) {
        return user.isActive === true;
    });
    return activeUsers;
}

// Calling the function
let result = getActiveUsers(users);
console.log(result);


//problem 3

let movieDurations = [90, 85, 75, 60, 120, 150, 125];
let targetTime = 250;

// Function to find the movie pair
function findMoviePair(movies, target) {
    // Sort the array first
    movies.sort((a, b) => a - b);  // ascending order

    let left = 0;  // start pointer
    let right = movies.length - 1;  // end pointer

    while (left < right) {
        let sum = movies[left] + movies[right];

        if (sum === target) {
            return [movies[left], movies[right]]; // Found pair
        } else if (sum < target) {
            left++;  // Move left pointer to get bigger sum
        } else {
            right--; // Move right pointer to get smaller sum
        }
    }

    return null; // If no pair found
}

let pair = findMoviePair(movieDurations, targetTime);
console.log(pair);
