// Add Event Listener to the Deposit Button 

document.getElementById('btn-deposit').addEventListener('click', function () {

    // Get Deposit ammount from the deposit input field
    const depositInputField= document.getElementById('deposit-field');

    // Convert String Deposit amount to Number
    const newDepositAmmountString = depositInputField.value
    const newDepositAmmount=parseFloat(newDepositAmmountString)

    //Step-3:: Clear Deposit Input Field

    depositInputField.value = '';

    //Step-4:: Get Previous Deposit Amount
     const previousDepositElement=document.getElementById('deposit-total');
    const previousDepositString = previousDepositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString)
    
    //Step-5:: Calculate new Deposit to total Deposit & set new value to deposit total

    const depositAmount = newDepositAmmount + previousDeposit;
    previousDepositElement.innerText=depositAmount

    //Step-6:: get Total Current Balance 
    const previousTotalBalanceElement= document.getElementById('balance-total');
    const previousTotalBalanceString = previousTotalBalanceElement.innerText;
    const previousTotalBalance=parseFloat(previousTotalBalanceString)

    //Step-7:: Calculate Previous & New Balance & Set The Total Balanced

    const newTotalBalance = previousTotalBalance + newDepositAmmount;

    previousTotalBalanceElement.innerText = newTotalBalance;

})