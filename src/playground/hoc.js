import React from 'react';
import ReactDOM from 'react-dom';
 const Info=(props)=>(
    <div>
    <h1>Info:{props.info}</h1>
    </div>
)
const withAdminWarning=(WarningComp)=>{
    return(props)=>(
        <div>
       {props.isAdmin&&<p>This is private info.Please dont share</p>} 
        <WarningComp {...props}/>
        </div>
    )
}
const requireAuthentication=(Authenticated)=>{
    return(props)=>(
        <div>
       {props.isAuth?<Authenticated {...props}/>:<p>Please Login to view</p>}
        </div>
    )
}
const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);
 //ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details"/>,document.getElementById('app'));
 ReactDOM.render(<AuthInfo isAuth={true} info="These are the details"/>,document.getElementById('app'));