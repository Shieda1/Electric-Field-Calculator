// https://calculator.swiftutors.com/electric-field-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const electricFieldRadio = document.getElementById('electricFieldRadio');
const forceRadio = document.getElementById('forceRadio');
const chargeRadio = document.getElementById('chargeRadio');

let electricField;
let force = v1;
let charge = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

electricFieldRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Force (N)';
  variable2.textContent = '(q) Charge (C)';
  force = v1;
  charge = v2;
  result.textContent = '';
});

forceRadio.addEventListener('click', function() {
  variable1.textContent = '(E) Electric Field (N/C)';
  variable2.textContent = '(q) Charge (C)';
  electricField = v1;
  charge = v2;
  result.textContent = '';
});

chargeRadio.addEventListener('click', function() {
  variable1.textContent = '(E) Electric Field (N/C)';
  variable2.textContent = '(F) Force (N)';
  electricField = v1;
  force = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(electricFieldRadio.checked)
    result.textContent = `Electric Field = ${computeElectricField().toFixed(2)} N/C`;

  else if(forceRadio.checked)
    result.textContent = `Force = ${computeForce().toFixed(2)} N`;

  else if(chargeRadio.checked)
    result.textContent = `Charge = ${computeCharge().toFixed(2)} C`;
})

// calculation

function computeElectricField() {
  return Number(force.value) / Number(charge.value);
}

function computeForce() {
  return Number(electricField.value) * Number(charge.value);
}

function computeCharge() {
  return Number(force.value) / Number(electricField.value);
}