//timestamp represented in milliseconds
//0 timestamp ---jan 1st 1970
//33400---33.4 seconds after jan 1st 1970

const expenseReducerDefaultState=[];
const expenseReducer=(state=expenseReducerDefaultState,action)=>{
   switch(action.type){
    case 'ADD_EXPENSE':
       return[...state,action.expense];
    case 'REMOVE_EXPENSE':{
          return state.filter((item)=>action.id!=item.id)  
    }
    case 'EDIT_EXPENSE':{
        return state.map((expense)=>{
            if(expense.id==action.id){
               return {
                   ...expense,
                   ...action.updates
               };
            }
            else{
                return expense;
            }
        })  
    }
       default:
           return state
   }
}
export default expenseReducer;