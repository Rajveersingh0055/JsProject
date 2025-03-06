document.addEventListener("DOMContentLoaded",() =>{
   const expenseForm = document.getElementById("expense-form");
   const expenseNameInput = document.getElementById("expense-name");
   const expenseAmountInput = document.getElementById("expense-amount");
   const expenseList = document.getElementById("expense-list");
   const totalAmountDisplay = document.getElementById("total-amount");


let expenses = JSON.parse(localStorage.getItem("expenses") )||[];


let totalAmont = calcualteTotal()
renderExpeses();
 expenseForm.addEventListener('submit' ,(e)=>{
   e.preventDefault();
   const name = expenseNameInput.value.trim();
   const amount = parseFloat(expenseAmountInput.value.trim());

   if (name!= "" && !isNaN(amount) && amount > 0) {//check if the name and amount are valid and not empty and greater than 0 
      const newExpense ={
       id: Date.now(),
       name:name,
       amount:amount
      }
      expenses.push(newExpense);
      renderExpeses();
      saveExpensesToLocal();

      updateTotal();

      expenseNameInput.value ="";
      expenseAmountInput.value = "";
   }
    
 })
function calcualteTotal(){
return expenses.reduce((sum, expense)=> sum + expense.amount,0);//sum the amount of the expenses
}
function saveExpensesToLocal(){
   localStorage.setItem("expenses",JSON.stringify(expenses));//save the expenses in the local storage 
}
 function renderExpeses(){
    expenseList.innerHTML = "";
    expenses.forEach((expense)=>{
      const li = document.createElement("li");
      li.innerHTML = `
      ${expense.name} - $${expense.amount}
      <button data-id="${expense.id}">Delete</button>
      `;
      expenseList.appendChild(li); 
   });
}
function updateTotal(){
   totalAmont = calcualteTotal();
   totalAmountDisplay.textContent = totalAmont.toFixed(2);
}
expenseList.addEventListener("click", (e) => {
   if (e.target.tagName === "BUTTON") {
    const expenseId = parseInt(e.target.getAttribute("data-id"));  
    expenses= expenses.filter(expense => expense.id !== expenseId);
    saveExpensesToLocal();
    renderExpeses();
    updateTotal();
   }  
})

})