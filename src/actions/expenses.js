import uuid from 'uuid';
//creating add expense action generator for dispatching
export const addExpense=(
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={}
    )=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
 });
//  export const addExpense = (expense) => ({
//     type: 'ADD_EXPENSE',
//     expense
//   });
 export const removeExpense=({id}={})=>({
     type:'REMOVE_EXPENSE',
     id
  });
 export const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
  });