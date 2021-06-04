import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import GameScreen from '../components/Game/GameScreen';
import HomeScreen from '../components/Home/HomeScreen';
import RankingScreen from '../components/RankingScreen';

const AppRouter = () => {
    // TODO: Separate Navbar into another component
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/home">
                        <HomeScreen />
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