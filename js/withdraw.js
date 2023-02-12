// Add Event Listner To the Withdraw Button
// Get The Withdraw ammount

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newWithdrawField = document.getElementById('withdraw-input-field');
    const newWithdrawAmountString = newWithdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Clear Input Field Value
    newWithdrawField.value = '';

    // 
    const oldWithdrawamountElement = document.getElementById('total-withdraw');
    const oldWithdrawamountString = oldWithdrawamountElement.innerText;
    const oldWithdrawamount = parseFloat(oldWithdrawamountString);

    const totalWithdrawAmount = oldWithdrawamount + newWithdrawAmount;
    oldWithdrawamountElement.innerText=totalWithdrawAmount




    // Total Balance Section

    const oldTotalBalanceElement = document.getElementById('balance-total');
    const oldTotalBalanceString = oldTotalBalanceElement.innerText;
    const oldTotalBalance = parseFloat(oldTotalBalanceString)
    
    const totalBalance = oldTotalBalance - newWithdrawAmount;
    oldTotalBalanceElement.innerText = totalBalance;




})
