// listen for submit

document.getElementById('loan-form').addEventListener('submit',calculateResults);

// Calculte results

function calculateResults(e){
   // UI variables
   const amount = document.getElementById('amount');
   const interest = document.getElementById('interest');
   const years = document.querySelector("#years");
   const monthlyPayment = document.querySelector("#monthly-payment");
   const totalPayment = document.querySelector("#total-payment");
   const totalInterest = document.querySelector("#total-interest");
   
   const princpal = parseFloat(amount.value);
   const calculatedInterest = parseFloat(interest.value)/100 /12;
   const calculatedPayment = parseFloat(years.value) *12;

   // Computr monthly payment
   const x = Math.pow( 1 + calculatedInterest, calculatedPayment);
   const monthly = (princpal*x*calculatedInterest)/(x-1);
    // Validation

    if(isFinite(monthly)){
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly* calculatedPayment).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayment) - princpal).toFixed(2);
    }else {
        showError('Please Check Your Values');
    }

   e.preventDefault();
}

//show error function

function showError(error){
  // Create div
  const errorDiv = document.createElement('div');

  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add class 
  errorDiv.className = 'alert alert-danger';
  // create text node and append to div

  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above Heading
  card.insertBefore(errorDiv, heading);
  // e.preventDefault();

  // Clear error after three second

  setTimeout(clearError, 3000);
}

// Clear Error

function clearError(){
  document.querySelector('.alert').remove();
}