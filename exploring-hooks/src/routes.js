import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ReducerEx from './components/useReducerEx';
import Form from './components/DynamicForm/Form';
import DynamicForm from './components/DynamicForm/DevToForm';
import Counter from './components/Counter';
import DataLoader from './components/DataLoader';

export default function Routes(){
    let routess = [
        {label: "Form", link: "/form"},
        {label: "reducerEx", link: "/reducer-ex"},
        {label: "DynamicForm", link: "/"},
        {label: "Counter", link: "/counter"}
    ];
    return(
        <div>
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    {routess.map(r => <li>
                        <Link to={r.link}>{r.label}</Link>
                    </li>)}
                </ul>
            </nav>
        <Switch>
            <Route exact path="/"><DynamicForm /></Route>
            <Route path="/reducer-ex"><ReducerEx /></Route>
            <Route path="/form"><Form /></Route>
            <Route path="/counter">
                <Counter />
                <DataLoader />
            </Route>
            <Route path="*"><div>404 wrong routes</div></Route>
        </Switch>
        </div>
    )
}