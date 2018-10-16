import './main.css';

const counter = document.getElementById('value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
  counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
});

decrementButton.addEventListener('click', () => {
  counter.innerHTML = parseInt(counter.innerHTML, 10) - 1;
});
