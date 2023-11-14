const express = require("express");

const app = express();

const FOOD_DATA = [
  {
    id: 1,
    foodname: "Apple",
    calorie: 95,
    category: "Fruit",
    protiens: 0.3,
    cab: 25,
  },
  {
    id: 2,
    foodname: "Banana",
    calorie: 105,
    category: "Fruit",
    protiens: 1.3,
    cab: 27,
  },
  {
    id: 3,
    foodname: "Orange",
    calorie: 62,
    category: "Fruit",
    protiens: 1.2,
    cab: 15,
  },
  {
    id: 4,
    foodname: "Pear",
    calorie: 95,
    category: "Fruit",
    protiens: 0.5,
    cab: 25,
  },
  {
    id: 5,
    foodname: "Grapefruit",
    calorie: 42,
    category: "Fruit",
    protiens: 1.1,
    cab: 11,
  },
  {
    id: 6,
    foodname: "Strawberry",
    calorie: 46,
    category: "Fruit",
    protiens: 1.5,
    cab: 10,
  },
  {
    id: 7,
    foodname: "Blueberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.1,
    cab: 14,
  },
  {
    id: 8,
    foodname: "Raspberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.4,
    cab: 15,
  },
  {
    id: 9,
    foodname: "Broccoli",
    calorie: 34,
    category: "Vegetable",
    protiens: 3.3,
    cab: 5,
  },
  {
    id: 10,
    foodname: "Cauliflower",
    calorie: 25,
    category: "Vegetable",
    protiens: 2.6,
    cab: 5,
  },
  {
    id: 11,
    foodname: "Green Beans",
    calorie: 31,
    category: "Vegetable",
    protiens: 2.4,
    cab: 4,
  },
  {
    id: 12,
    foodname: "Asparagus",
    calorie: 20,
    category: "Vegetable",
    protiens: 2.2,
    cab: 2,
  },
  {
    id: 13,
    foodname: "Spinach",
    calorie: 23,
    category: "Vegetable",
    protiens: 3.5,
    cab: 4,
  },
  {
    id: 14,
    foodname: "Kale",
    calorie: 33,
    category: "Vegetable",
    protiens: 4.3,
    cab: 7,
  },
  {
    id: 15,
    foodname: "Sweet Potato",
    calorie: 103,
    category: "Vegetable",
    protiens: 2,
    cab: 27,
  },
  {
    id: 16,
    foodname: "Potato",
    calorie: 161,
    category: "Vegetable",
    protiens: 4.3,
    cab: 37,
  },
  {
    id: 17,
    foodname: "Carrot",
    calorie: 41,
    category: "Vegetable",
    protiens: 0.9,
    cab: 9,
  },
  {
    id: 18,
    foodname: "Onion",
    calorie: 40,
    category: "Vegetable",
    protiens: 1.4,
    cab: 9,
  },
  {
    id: 19,
    foodname: "Egg",
    calorie: 77,
    category: "Protein",
    protiens: 6.3,
    cab: 0.5,
  },
  {
    id: 20,
    foodname: "Chicken Breast",
    calorie: 165,
    category: "Protein",
    protiens: 31,
    cab: 0,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to Health Project!");
});

//1. The '/health-api' route should return { time: time, app: "express-server", status: active }
app.get("/health-api", (req, res) => {
  let time = new Date().toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  res.json({
    time: time,
    app: "express-server",
    status: "active",
  });
});

//2. The '/all' route should return list of all foods items
app.get("/all", (req, res) => {
  res.json(FOOD_DATA);
});

//3. The '/vegetable' route should return list of all foods with category vegetable
app.get("/vegetables", (req, res) => {
  let vegetableFoods = FOOD_DATA.filter(
    (food) => food.category === "Vegetable"
  );
  res.json(vegetableFoods);
});

//4. The '/fruit' route should return list of all foods with category fruit
app.get("/fruits", (req, res) => {
  let FruitsItem = FOOD_DATA.filter((food) => food.category === "Fruit");
  res.json(FruitsItem);
});

//5. The '/protien' route should return list of all foods with category protien
app.get("/proteins", (req, res) => {
  let ProteinItem = FOOD_DATA.filter((food) => food.category === "Protein");
  res.json(ProteinItem);
});

//6. The '/calorie-above-100' route should return list of all foods with calories more than 100 calories
app.get("/calories-above-100", (req, res) => {
  let CalAbove100 = FOOD_DATA.filter((food) => food.calorie > 100);
  res.json(CalAbove100);
});

//7. The '/calorie-below-100' route should return list of all foods with calories less than 100 calories
app.get("/calories-below-100", (req, res) => {
  let CalBelow100 = FOOD_DATA.filter((food) => food.calorie < 100);
  res.json(CalBelow100);
});

app.listen(3000, () => {
  console.log("The Server is running on http://localhost:3000");
});

/*

1. The '/health-api' route should return { time: time, app: "express-server", status: active }
2. The '/all' route should return list of all foods items
3. The '/vegetable' route should return list of all foods with category vegetable
4. The '/fruit' route should return list of all foods with category fruit
5. The '/protien' route should return list of all foods with category protien
6. The '/calorie-above-100' route should return list of all foods with calories more than 100 calories
7. The '/calorie-below-100' route should return list of all foods with calories less than 100 calories

*/
