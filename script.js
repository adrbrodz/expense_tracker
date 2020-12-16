var expenseList = [];

function addExpense() {
    var id = expenseList.length
    var { expenseName, expenseDate, expenseAmount } = getFields();
    expenseList.push([id, expenseName, expenseDate, expenseAmount])
    clearFields();
    generateList();

    function getFields() {
        var expenseName = document.getElementById("name-input").value;
        var expenseDate = document.getElementById("date-input").value;
        var expenseAmount = document.getElementById("amount-input").value;
        if ( expenseName == "" || expenseDate == "" || expenseAmount == "" ) {
            window.alert("Please fill all the fields.");
        } else {
            return { expenseName, expenseDate, expenseAmount };
        }
    }
}

function clearFields() {
    document.getElementById("name-input").value = "";
    document.getElementById("date-input").value = "";
    document.getElementById("amount-input").value = "";
}

function generateList() {
    var expenseTable = "";
    for ( let expense in expenseList ) {
        var expenseId = expenseList[expense][0]
        var expenseName = expenseList[expense][1]
        var expenseDate = expenseList[expense][2]
        var expenseAmount = expenseList[expense][3]
        expenseTable = `${expenseTable}
        <tr>
            <td>${expenseName}</td>
            <td>${expenseDate}</td>
            <td>${expenseAmount}
            <button class="delete-button" onclick="deleteExpense(${expenseId})">x</button></td>
        </tr>
        `
    }
    document.getElementById("expense-table").innerHTML = 
    `<tr><th>Name</th><th>Date</th><th>Amount</th></tr>${expenseTable}`
}

function deleteExpense(expenseId) {
    var newList = expenseList
    .filter( expense => expense[0] != expenseId );
    expenseList = [];
    id = 0;
    for ( expense in newList ) {
        expenseList.push( [id, newList[expense][1],
            newList[expense][2], newList[expense][3]] )
        id += 1;
    }
    generateList();
}