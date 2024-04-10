import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArticleDetail from './components/ArticleDetail';
import './styles/App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/articles/:id" component={ArticleDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
