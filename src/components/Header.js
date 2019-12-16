import React from "react";
import { Route, Link } from 'react-router-dom';
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <Link to='/'>Welcome</Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/search'>Search</Link>

      <Route exact path='/' component={WelcomePage}></Route>
      <Route exact path='/characters' component={CharacterList}></Route>
      <Route exact path='/search' component={SearchForm}></Route>
    </header>

  );
}