document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list');
    const totalExpense = document.getElementById('total-expense');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    const updateTotal = () => {
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        totalExpense.textContent = `Total: $${total}`;
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    };

    const renderExpenses = () => {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${expense.name} - $${expense.amount}
                <div>
                    <button onclick="editExpense(${index})">Edit</button>
                    <button onclick="deleteExpense(${index})">Delete</button>
                </div>
            `;
            expenseList.appendChild(li);
        });
        updateTotal();
    };

    const addExpense = (name, amount) => {
        expenses.push({ name, amount });
        saveToLocalStorage();
        renderExpenses();
    };

    window.editExpense = (index) => {
        const expense = expenses[index];
        expenseNameInput.value = expense.name;
        expenseAmountInput.value = expense.amount;
        expenses.splice(index, 1);
        saveToLocalStorage();
        renderExpenses();
    };

    window.deleteExpense = (index) => {
        expenses.splice(index, 1);
        saveToLocalStorage();
        renderExpenses();
    };

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseNameInput.value;
        const amount = parseFloat(expenseAmountInput.value);

        if (name && !isNaN(amount)) {
            addExpense(name, amount);
            expenseNameInput.value = '';
            expenseAmountInput.value = '';
        }
    });

    renderExpenses();
});
