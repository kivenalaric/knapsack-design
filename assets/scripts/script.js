const maximumWeight = document.getElementById('weight')
const itemLists = document.querySelector('#select')
const addedItems = document.getElementById('knapsack')
const addButton = document.getElementById('add')
// const allItems = document.querySelector('#knapsack')
const display = document.querySelector('.display')
const alert = document.querySelector('.alert')
const setBtn = document.querySelector('#set')
const refillBtn = document.querySelector('#refill')
const doneBtn = document.querySelector('#done')
let weights = ''
let selectedObjects

const bagItems = [
  { name: 'Apple', weight: 10, value: 1 },
  { name: 'banana', weight: 15, value: 2 },
  { name: 'Pear', weight: 5, value: 3 },
  { name: 'Cashew', weight: 9, value: 4 },
  { name: 'Guava', weight: 3, value: 5 },
  { name: 'Coconut', weight: 10, value: 6 },
  { name: 'Pineaple', weight: 7, value: 7 },
  { name: 'Cocoa', weight: 12, value: 8 },
  { name: 'Cassava', weight: 17, value: 9 },
  { name: 'Yam', weight: 15, value: 10 },
  { name: 'Kolanut', weight: 5, value: 11 },
  { name: 'Carrot', weight: 10, value: 12 },
  { name: 'Stone', weight: 10, value: 13 },
  { name: 'Phone', weight: 13, value: 14 },
  { name: 'Bag', weight: 15, value: 15 },
  { name: 'Papaye', weight: 8, value: 16 },
  { name: 'Orange', weight: 10, value: 17 },
  { name: 'Waterlon', weight: 10, value: 18 },
  { name: 'Pawpaw', weight: 9, value: 19 },
  { name: 'Cucumber', weight: 12, value: 20 }
]

const knapsack = {
  capacity: 0,
  weight: 0,
  value: 0,
  items: []
}

setBtn.addEventListener('click', () => {
  maximumWeight.disabled = true
  weights = maximumWeight.value
  if (weights <= 0) {
    alert.style.background = 'white'
    alert.innerHTML = 'please input a weight'
  }
})

doneBtn.addEventListener('click', () => {
  for (let i = 0; i < bagItems.length; i++) {
    if (itemLists.value === bagItems[i].name) {
      // selectedObjects = bagItems[i]
      // knapsack.capacity = weights
      // knapsack.weight += selectedObjects.weight
      // knapsack.value += selectedObjects.value
      // knapsack.items.push(selectedObjects)

      if (knapsack.weight <= knapsack.capacity) {
        display.style.background = 'green'
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
          (knapsack.capacity - knapsack.weight)
        // console.log(selectedObjects)
      } else {
        display.style.background = 'red'
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
          'max capacity exceeded'
      }
    }
  }
})

refillBtn.addEventListener('click', () => {
  window.location.reload()
})

addButton.addEventListener('click', () => {
  if (weights <= 0) {
    alert.style.background = 'white'
    alert.innerHTML = 'please input a weight'
  } else {
    for (let i = 0; i < bagItems.length; i++) {
      if (itemLists.value === bagItems[i].name) {
        selectedObjects = bagItems[i]
        knapsack.capacity = weights
        knapsack.weight += selectedObjects.weight
        knapsack.value += selectedObjects.value
        knapsack.items.push(selectedObjects)
        addedItems.style.border = '2px solid black'

        // if (knapsack.weight <= knapsack.capacity) {
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
            '<br>'
        // console.log(selectedObjects)
        // }
        if (knapsack.weight >= knapsack.capacity) {
          addedItems.style.border = '2px solid red'
        }
      }
    }
  }
  itemLists.remove(itemLists.selectedIndex)
  // console.log(`${knapsack.weight}`)
  // console.log(`${knapsack.capacity}`)
  // }
})
