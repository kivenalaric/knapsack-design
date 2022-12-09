let maximumWeight = document.getElementById("weight");
let itemLists = document.querySelector("#select");
let doneBtn = document.querySelector("#done");
let addedItems = document.getElementById("knapsack");
let refillBtn = document.querySelector("#refill");
let addButton = document.getElementById("add");
let allItems = document.querySelector(".itemsadded");
let display = document.querySelector(".display")
let max = document.querySelector(".max")
let weights = "";
let selectedObjects;

let bagItems = [
  { name: "Apple", weight: 10, value: 1 },
  { name: "banana", weight: 15, value: 2 },
  { name: "Pear", weight: 35, value: 3 },
  { name: "Cashew", weight: 20, value: 4 },
  { name: "Guava", weight: 23, value: 5 },
  { name: "Coconut", weight: 24, value: 6 },
  { name: "Pineaple", weight: 18, value: 7 },
  { name: "Cocoa", weight: 15, value: 8 },
  { name: "Cassava", weight: 17, value: 9 },
  { name: "Yam", weight: 25, value: 10 },
  { name: "Kolanut", weight: 5, value: 11 },
  { name: "Carrot", weight: 10, value: 12 },
  { name: "Stone", weight: 50, value: 13 },
  { name: "Phone", weight: 33, value: 14 },
  { name: "Bag", weight: 7, value: 15 },
  { name: "Papaye", weight: 8, value: 16 },
  { name: "Orange", weight: 20, value: 17 },
  { name: "Waterlon", weight: 9, value: 18 },
  { name: "Pawpaw", weight: 10, value: 19 },
  { name: "Cucumber", weight: 20, value: 20 },
];

let knapsack = {
  capacity: 0,
  weight: 0,
  value: 0,
  items: [],
};

function done() {
  maximumWeight.disabled = true;
  weights = maximumWeight.value;
}

function reset() {
  window.location.reload()
}
addButton.addEventListener("click", () => {
  if (weights <= 0) {
    alert("please input a weight");
    return;
  } else {
    for (let i = 0; i < bagItems.length; i++) {
      if (itemLists.value == bagItems[i].name) {
        selectedObjects = bagItems[i];
        knapsack.capacity = weights;
        knapsack.weight += selectedObjects.weight;
        knapsack.value += selectedObjects.value;
        knapsack.items.push(selectedObjects);

        if (knapsack.weight  <= knapsack.capacity) {
          display.style.background = "red"
          display.innerHTML = "total weight:"+' '+ knapsack.weight +' '+ "total value:" +' '+ knapsack.value +' '+"capacity:" +' '+ knapsack.capacity
           addedItems.innerHTML += "Item:" + ' ' + selectedObjects.name + " Weight:" + ' ' + selectedObjects.weight + " Value:" + ' ' + selectedObjects.value + ' '+ '<br>'+' '+'<br>';
          console.log(selectedObjects);
        } else {
          addedItems.style.background = "red"
          max.style.background = "red"
          max.innerHTML = (`maximum capacity has been exceeded`);
    
        }
      }
      
    }
    itemLists.remove(itemLists.selectedIndex)
    console.log(`${knapsack.weight}`);
    console.log(`${knapsack.capacity}`);
  }
});

