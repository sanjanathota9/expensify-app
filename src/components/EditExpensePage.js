import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import  {removeExpense} from '../actions/expenses';

const EditExpensePage=(props)=>{
    console.log(props);
    return( 
    // <div>This is from edit expense page{props.match.params.id}</div>
    <div>
      <ExpenseForm expense={props.expenses} onSubmit={(expense)=>{
        console.log("updated:"+expense);
        props.dispatch(editExpense(props.expenses.id,expense));
        props.history.push('/');
      }}/>
      <button onClick={()=>{
        props.dispatch(removeExpense({id:props.expenses.id}));
        props.history.push('/');
    }}>Remove</button>
    </div>
    
);
};
const mapStateToProps=(state,props)=>{
    return{
        expenses:state.expenses.find((expense)=>{
            return expense.id===props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(EditExpensePage);