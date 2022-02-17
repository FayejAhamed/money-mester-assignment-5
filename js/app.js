function expensesInput() {
    const foodInputText = document.getElementById('food-input').value;
    const foodInput = parseFloat(foodInputText);
    const rentInputText = document.getElementById('rent-input').value;
    const rentInput = parseFloat(rentInputText);
    const clothesInputText = document.getElementById('clothes-input').value;
    const clothesInput = parseFloat(clothesInputText);
    // expeneses adding
    const totalInputExpenses = foodInput + rentInput + clothesInput;
    const totalExpenses = document.getElementById('total-expenses').innerText = totalInputExpenses;
    // total amount calcalution
    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseFloat(incomeInputText);
    const totalBalance = document.getElementById('total-balance').innerText = incomeInput - totalExpenses;
    // console.log(totalBalance.innerText)
}

// save function 
function saveAmount() {
    const saveInputText = document.getElementById('save-input');
    const saveInput = parseFloat(saveInputText.value);
    const incomeInputText = document.getElementById('income-input');
    const incomeInput = parseFloat(incomeInputText.value);
    const savingAmount = document.getElementById('save-amount');
    const totalSavingAmount = incomeInput / saveInput;
    console.log(totalSavingAmount)

    savingAmount.innerText = totalSavingAmount;

}


// calculate button 
document.getElementById('calculate-button').addEventListener('click', function () {
    // console.log(iputFeild)
    const Expenses = expensesInput();
    // console.log(foodExpenses)

})

// save button 
document.getElementById('save-button').addEventListener('click', function () {
    console.log('clicked save button')
    saveAmount();
})