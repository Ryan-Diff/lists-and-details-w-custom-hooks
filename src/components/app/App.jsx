  import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterDetailPage from '../../Pages/CharacterDetailPage';
import CharacterPage from '../../Pages/CharacterPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterPage} />
        <Route exact path="/characters/:CharacterId" component={CharacterDetailPage} />
      </Switch>
    </Router>
  );
}