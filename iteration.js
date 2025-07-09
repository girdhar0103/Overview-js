let salesData = [
    {product: "Laptop", price: 1200},
    {product: "SmartPhone", price: 800},
    {product: "HeadPhone", price: 150},
    {product: "Keyboard", price: 80},
];


let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);




let inventory = [
    {name: "widget A", stock: 30},
    {name: "widget B", stock: 120},
    {name: "widget C", stock: 45},
    {name: "widget D", stock: 70},
];

let lowStockItems = inventory.filter((item) => item.stock < 50);
console.log(lowStockItems);




let userActivity = [
    {user: "Alice", activityCount: 45},
    {user: "Bob", activityCount: 72},
    {user: "Charlie", activityCount: 33},
];

// find most active user

let mostActiveUser = userActivity.reduce((maxUser, user) =>
user.activityCount > maxUser.activityCount ? user : maxUser );
console.log(mostActiveUser);




let expenses = [
   { description: "Groceries", amount: 50, category: "Food"},
   { description: "Electricity Bill", amount: 100, category: "Utilities"},
   { description: "Dinner", amount: 30, category: "Food"},
   { description: "Internet BIll", amount: 50, category: "Utilities"},
]



