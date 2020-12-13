var expenseList = [];
var id = 0;

function addExpense() {
    var { expenseName, expenseDate, expenseAmount } = getFields();
    expenseList.push([id, expenseName, expenseDate, expenseAmount])
    id += 1;
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
    for ( let expense in expenseList ) {
        var expenseName = expenseList[expense][1]
        var expenseDate = expenseList[expense][2]
        var expenseAmount = expenseList[expense][3]
        var expenseTable = document.getElementById("main-table").innerHTML
        expenseTable = 
        `${expenseTable}
        <tr>
            <td>${expenseName}</td>
            <td>${expenseDate}</td>
            <td>${expenseAmount}</td>
        </tr>
        `
    }
    document.getElementById("main-table").innerHTML = expenseTable
}