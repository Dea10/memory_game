import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import GameScreen from '../components/GameScreen';
import HomeScreen from '../components/Home/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import RankingScreen from '../components/RankingScreen';

const AppRouter = () => {
    // TODO: Separate Navbar into another component
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/game">Game</Link>
                        </li>
                        <li>
                            <Link to="/ranking">Ranking</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/home">
                        <HomeScreen />
                    </Route>
                    <Route path="/login">
                        <LoginScreen />
                    </Route>
                    <Route path="/ranking">
                        <RankingScreen />
                    </Route>
                    <Route path="/game">
                        <GameScreen />
                    </Route>
                    <Route path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;