import React from "react";
import { Route, Link } from 'react-router-dom';
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <Link to='/'>Welcome</Link>
      <Link to='/characters'>characters</Link>

      <Route exact path='/' component={WelcomePage}></Route>
      <Route exact path='/characters' component={CharacterList}></Route>
    </header>

  );
}