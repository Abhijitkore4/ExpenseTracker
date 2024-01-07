let amount = document.getElementById("amount");
let balance = document.getElementById("balance");
let income = document.getElementById("income");
let expense = document.getElementById("expense");
let purpose = document.getElementById("purpose");
let date = document.getElementById("date");
let history = document.getElementById("historycontainer");
history.style.display = "none";
creditAction = ()=>{


    amount1 = parseInt(amount.value);
    balance1 = parseInt(balance.innerHTML);
    income1 = parseInt(income.innerHTML);
    expense1 = parseInt(expense.innerHTML);
    
    if(amount.value == "" || date.value=="")
    {
        alert("Fill Amount and Date");
    }
    else{
        balance1 = balance1 + amount1;
        balance.innerHTML = balance1;
        income1 = income1 + amount1;
        income.innerHTML = income1;
        let div = document.getElementById("historycontainer");
        div.className = "historybox";
        div.innerHTML = div.innerHTML+`
        <p>---------------------------------------------------------</p>
        <p>Amount Credited: ${amount1}</p>
        <p>Date:  ${date.value}</p>
        <p>Description: ${purpose.value}</p>
        `;
        document.body.append(div);
        
    
    amount.value = "";
    purpose.value = "";
    date.value = "";
}
}



debitAction= ()=>{
    
    amount1 = parseInt(amount.value);
    balance1 = parseInt(balance.innerHTML);
    income1 = parseInt(income.innerHTML);
    expense1 = parseInt(expense.innerHTML);
    
        if(amount.value == "" || date.value=="")
        {
            alert("Fill Amount and Date");
        }
        else{
        balance1 = balance1 - amount1;
        balance.innerHTML = balance1;
        expense1 = expense1 + amount1;
        expense.innerHTML = expense1;
        let div = document.getElementById("historycontainer");
        div.className = "historybox";
        div.innerHTML = div.innerHTML+`
        <p>---------------------------------------------------------</p>
        <p>Amount Debited: ${amount1}</p>
        <p>Date:  ${date.value}</p>
        <p>Description: ${purpose.value}</p>
        `;
        document.body.append(div);

        amount.value = "";
        purpose.value = "";
        date.value = "";
        }
}

historyAction =()=>{
    
    history.style.display = "block";
}