import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ArticleList} />
                <Route path="/articles/:id" component={Article} />
            </Switch>
        </Router>
    );
}

export default App;
