import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//to provide store to components
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';



const store=configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 4500}));
console.log(store.getState());
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill',createdAt: 1000 }));
console.log(store.getState());
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 15000}));
console.log(store.getState());
store.dispatch(setTextFilter('bill'));
setTimeout(()=>{
    store.dispatch(setTextFilter('water'));
},3000)
console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log("visible expenses:"+JSON.stringify(visibleExpenses));

const jsx = (
   <Provider store={store}>
         <AppRouter />
   </Provider>
     

  );
ReactDOM.render(jsx,document.getElementById("app"));

