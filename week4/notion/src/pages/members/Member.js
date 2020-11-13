import { Switch, Route } from 'react-router-dom';
import MemberDetail from './MemberDetail';
import MemberList from './MemberList';

function Member({match}) {
    console.log(match);
    return (
        <section>
            <Switch>
                <Route exact path={match.path} component={MemberList}></Route>
                <Route path={`${match.path}/:id`} component={MemberDetail}></Route>
            </Switch>
        </section>
    )      
}

export default Member
