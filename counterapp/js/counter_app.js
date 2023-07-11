
let counterValue = 0;
function increment() {
  counterValue++;
  updateCounter();
}

function decrement() {
  if (counterValue>0){
    counterValue--;
    updateCounter();
  }
  else{
    alert("Not Possible")
  }
}

function reset() {
  counterValue = 0;
  updateCounter();
}

function updateCounter() {
  document.querySelector('.counter-value').textContent = counterValue;
}