import react from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem=({id,description,amount,createdAt})=>{
    console.log("hmmm");
   return(<div>
        <p>{id}</p>
        <Link to={`/edit/${id}`}> <b>{description}</b></Link>      
        <p>{numeral(amount/100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do,YYYY')}</p>
        
    </div>
   )
};

export default connect()(ExpenseListItem);
//here we got dispatch prop access by passing expenseLisdtItem

