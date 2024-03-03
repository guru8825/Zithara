import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecordsTable from './RecordsTable';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <RecordsTable />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;