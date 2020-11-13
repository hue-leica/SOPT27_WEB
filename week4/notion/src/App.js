import './App.scss';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import MainHeader from './components/header/MainHeader';
import Member from './pages/members/Member';


function App() {
  return (
    <Router>
      <div className="App">
        <Route component={MainHeader}></Route>
        <Switch>
          <Route exact path='/'>
            <div className="main">
              SOPT27th <br />WEB PART NOTION
            </div>
            </Route>
          <Route path='/members' component={Member}></Route>
          <Route path='/*'>404 NOT FOUND</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
