let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  result = count + " - ";
  saveEl.textContent += result;
  countEl.textContent = 0;
  count = 0;
}
