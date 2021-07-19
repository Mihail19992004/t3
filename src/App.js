
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import React, {useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Title} from "./components/Title/Title";
import {Footer} from "./components/Footer/Footer";

function App() {


  return (
    <div className="App">
      <BrowserRouter>


      <Switch>
        <Route exact path='/' component={Title}/>
        <Route path='/photo' component={Main} />
        <Route path='/test' component={News}/>
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
