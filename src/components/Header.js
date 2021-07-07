import React from "react";
import { Route, Link } from 'react-router-dom';
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";
import styled from 'styled-components';
import rickandmorty from "./rickandmorty.jpeg";


export default function Header() {

  const HeaderImage = styled.header`
    background-image: url(${rickandmorty});
    background-size: 100%;
    min-height: 100vh;
    
  `
  return (
    <HeaderImage className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <Link to='/'>Welcome</Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/search'>Search</Link>

      <Route exact path='/' component={WelcomePage}></Route>
      <Route exact path='/characters' component={CharacterList}></Route>
      <Route exact path='/search' component={SearchForm}></Route>
    </HeaderImage>

  );
}