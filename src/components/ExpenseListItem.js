import react from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const ExpenseListItem=({dispatch,id,description,amount,createdAt})=>{
    console.log("hmmm");
   return(<div>
        <p>{id}</p>
        <Link to={`/edit/${id}`}> <b>{description}</b></Link>      
        <p>{amount}-{createdAt}</p>
        
    </div>
   )
};

export default connect()(ExpenseListItem);
//here we got dispatch prop access by passing expenseLisdtItem

