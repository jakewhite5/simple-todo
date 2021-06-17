function addItem() {
let input = document.getElementById('input-item').value;
//document.getElementById('input-item').value = '';

let newElem = document.createElement('li');
newElem.className = 'strike-through'
// let innerElem = document.createTextNode(item);
// newElem.appendChild(innerElem)
const targetList = document.getElementById('todo-list')
targetList.appendChild(newElem)
newElem.innerHTML = input

}

// const addItem = (item) => {
//   let newElem = document.createElement('li');
//   console.log('whatever text')
//   // let innerElem = document.createTextNode(item);
//   // newElem.appendChild(innerElem)
//   let targetList = document.getElementById('todo-list')
//   targetList.appendChild(newElem)
//   newElem.innerHTML = item
  


