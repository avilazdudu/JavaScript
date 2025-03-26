const btnCalculate = document.getElementById('buttonCalculate');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const box = document.getElementById('box');
const result = document.getElementById('result');
const type = document.getElementById('type');

btnCalculate.addEventListener('click', () => {
  const bmi = weight.value / Math.pow(height.value, 2);
  result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  if(bmi < 18.5){
    type.innerHTML = 'You are Underweight';
  }else if(bmi >= 18.5 && bmi <= 24.9){
    type.innerHTML = 'You are Normal weight';
  }else if(bmi >= 25 && bmi <= 29.9){
    type.innerHTML = 'You are Overweight';
  }else if(bmi >= 30 && bmi <= 34.9){
    type.innerHTML = 'You are Obesity I';
  }else if(bmi >= 35 && bmi <= 39.9){
    type.innerHTML = 'You are Obesity II';
  }else if(bmi >= 40){
    type.innerHTML = 'You are Obesity III';
  }
})