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
// calculate button 
document.getElementById('calculate-button').addEventListener('click', function () {
    // console.log(iputFeild)
    const Expenses = expensesInput();
    // console.log(foodExpenses)

})

// save button 