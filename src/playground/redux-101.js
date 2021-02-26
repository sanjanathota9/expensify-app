import { createStore } from 'redux';
const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
    // incrementBy:typeof incrementBy==='number'?incrementBy:1
});
const countReducer=(state={ count:0 },action)=>{
    switch(action.type){
      
        case 'INCREMENT':{
            
            return{
                count:state.count+action.incrementBy
            }; 
        }
        case 'DECREMENT':{
            return{
                count:state.count-1
            }; 
        }
        case 'RESET':{
            return{
                count:0
            }; 
        }
        default:
            return state;
    }
   
};
const store = createStore(countReducer);
store.subscribe(()=>{
    console.log("subscribe:"+JSON.stringify(store.getState()));
})

// store.dispatch({//creating action
//     type:"INCREMENT",
//     incrementBy:5
// })
store.dispatch(incrementCount({incrementBy:6}))
store.dispatch(incrementCount());

store.dispatch({
    type:'DECREMENT'
})

store.dispatch({
    type:'RESET'
})
;