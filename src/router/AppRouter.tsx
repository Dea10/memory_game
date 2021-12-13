import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import GameScreen from '../components/Game/GameScreen';
import HomeScreen from '../components/Home/HomeScreen';
import RankingScreen from '../components/RankingScreen/RankingScreen';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
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
            <Footer />
        </Router>
    );
};

export default AppRouter;