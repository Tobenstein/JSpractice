let amount1;
let amount2;
let amount3;
 
function calculateAmount() {
    amount1 = parseFloat(document.getElementById('Grocery-1').value);
    amount2 = parseFloat(document.getElementById('Grocery-2').value);
    amount3 = parseFloat(document.getElementById('Grocery-3').value);
   
   let amount = amount1 + amount2 + amount3;
   document.getElementById('result').innerText = `The total amount is: ${amount}`;
   }