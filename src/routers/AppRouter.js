import {BrowserRouter,Route, Switch,Link,NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


const AppRouter=()=>(
    <BrowserRouter>
    <div>
       <Header></Header>
       <Switch>
       <Route path='/' component={ExpenseDashboardPage} exact={true}/>
       <Route path='/create' component={AddExpensePage} exact={true}/>
       <Route path='/edit/:id' component={EditExpensePage} exact={true}/>
       <Route path='/help' component={HelpPage} exact={true}/>
       <Route component={NotFound}/>
       </Switch>
    </div>
   
    </BrowserRouter>
)
export default AppRouter;
