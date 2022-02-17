

function expensesInput() {
    const foodInputText = document.getElementById('food-input').value;
    const foodInput = parseFloat(foodInputText);
    const rentInputText = document.getElementById('rent-input').value;
    const rentInput = parseFloat(rentInputText);
    const clothesInputText = document.getElementById('clothes-input').value;
    const clothesInput = parseFloat(clothesInputText);
    // expeneses adding
    // if ()
    const totalInputExpenses = foodInput + rentInput + clothesInput;
    const totalExpenses = document.getElementById('total-expenses').innerText = totalInputExpenses;
    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseFloat(incomeInputText);
    if (totalInputExpenses > incomeInput) {
        alert("You can't spend more mony than you have, try again")
    }
    else if (totalInputExpenses < 0) {
        alert('Plese provide a positive number')
    }
    return totalExpenses;
}
function income() {
    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseFloat(incomeInputText);
    const totalBalance = document.getElementById('total-balance').innerText = incomeInput - expensesInput();
}

// save function 
function saveAmount() {
    // saving money
    const saveInputText = document.getElementById('save-input');
    const saveInput = parseFloat(saveInputText.value);
    const incomeInputText = document.getElementById('income-input');
    const incomeInput = parseFloat(incomeInputText.value);
    const savingAmount = document.getElementById('save-amount');
    const totalSavingAmount = (incomeInput * saveInput) / 100;
    savingAmount.innerText = totalSavingAmount;
    // remaining balance after uses 
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceText.innerText);
    const remainingBalance = document.getElementById('remaining-balance').innerText = totalBalance - totalSavingAmount;
    // error message 
    if (remainingBalance > 0) {
        alert('You have very little money')
    }
}
// calculate button 
document.getElementById('calculate-button').addEventListener('click', function () {
    // console.log(iputFeild)
    const Expenses = expensesInput();
    income();

})
// save button 
document.getElementById('save-button').addEventListener('click', function () {
    console.log('clicked save button')
    saveAmount();
})