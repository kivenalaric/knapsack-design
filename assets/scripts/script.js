const maximumWeight = document.getElementById('weight')
const itemLists = document.querySelector('#select')
const doneBtn = document.querySelector('#done')
const addedItems = document.getElementById('knapsack')
const refillBtn = document.querySelector('#refill')
const addButton = document.getElementById('add')
const allItems = document.querySelector('.itemsadded')
const display = document.querySelector('.display');
const max = document.querySelector('.max');
const alert = document.querySelector('.alert');
let weights = '';;
let selectedObjects;;

const bagItems = [
  { name: 'Apple', weight: 10, value: 1 },
  { name: 'banana', weight: 15, value: 2 },
  { name: 'Pear', weight: 35, value: 3 },
  { name: 'Cashew', weight: 20, value: 4 },
  { name: 'Guava', weight: 23, value: 5 },
  { name: 'Coconut', weight: 24, value: 6 },
  { name: 'Pineaple', weight: 18, value: 7 },
  { name: 'Cocoa', weight: 15, value: 8 },
  { name: 'Cassava', weight: 17, value: 9 },
  { name: 'Yam', weight: 25, value: 10 },
  { name: 'Kolanut', weight: 5, value: 11 },
  { name: 'Carrot', weight: 10, value: 12 },
  { name: 'Stone', weight: 50, value: 13 },
  { name: 'Phone', weight: 33, value: 14 },
  { name: 'Bag', weight: 7, value: 15 },
  { name: 'Papaye', weight: 8, value: 16 },
  { name: 'Orange', weight: 20, value: 17 },
  { name: 'Waterlon', weight: 9, value: 18 },
  { name: 'Pawpaw', weight: 10, value: 19 },
  { name: 'Cucumber', weight: 20, value: 20 }
];;

const knapsack = {
  capacity: 0,
  weight: 0,
  value: 0,
  items: []
};

function doneFxn () {
  maximumWeight.disabled = true;;
  weights = maximumWeight.value;;
}

function resetFxn () {
  window.location.reload();
}

addButton.addEventListener('click', () => {
  if (weights <= 0) {
    alert.style.background = 'white';;
    alert.innerHTML = 'please input a weight';;
  } else {
    for (let i = 0; i < bagItems.length; i++) {
      if (itemLists.value === bagItems[i].name) {
        selectedObjects = bagItems[i];;
        knapsack.capacity = weights;;
        knapsack.weight += selectedObjects.weight;;
        knapsack.value += selectedObjects.value;;
        knapsack.items.push(selectedObjects);;

        if (knapsack.weight <= knapsack.capacity) {
          display.style.background = 'red';
          display.innerHTML =
            'total weight:' +
            ' ' +
            knapsack.weight +
            ' ' +
            'total value:' +
            ' ' +
            knapsack.value +
            ' ' +
            'capacity:' +
            ' ' +
            knapsack.capacity +
            ' ' +
            ' Remaining space:' +
            ' ' +
            (knapsack.capacity - knapsack.weight);
          addedItems.innerHTML +=
            'Item:' +
            ' ' +
            selectedObjects.name +
            ' Weight:' +
            ' ' +
            selectedObjects.weight +
            ' Value:' +
            ' ' +
            selectedObjects.value +
            ' ' +
            '<br>' +
            ' ' +
            '<br>';
          console.log(selectedObjects);
        } else {
          addedItems.style.background = 'red';
          max.style.background = 'red';
          max.innerHTML = `maximum capacity has been exceeded`;
        }
      }
    }
    itemLists.remove(itemLists.selectedIndex);
    console.log(`${knapsack.weight}`);
    console.log(`${knapsack.capacity}`);
  }
});
