const btnCalculate = document.getElementById('buttonCalculate');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const box = document.getElementById('box');
var result = document.createElement('div');

btnCalculate.addEventListener('click', () => {
  const bmi = weight.value / Math.pow(height.value, 2);
    document.body.insertBefore(result, btnCalculate);
})