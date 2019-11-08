import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Expenses Reducer


// Get visible expense







store.subscribe(() => {
    console.log(store.getState());
});

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters) ;
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 600, createdAt: 21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 400, createdAt: 1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(125));
// store.dispatch(setEndDate());
