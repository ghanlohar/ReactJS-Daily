import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Incrementer from './components/Incrementer';
import UserForm from './userlist/UserForm';
import CardList from './userlist/CardList';
import Main from './game/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component {

  constructor(props){
        super(props);
        this.state = {
            cards: [{
              id: '1',
              name: 'Ghan Lohar',
              avatar_url: "https://avatars1.githubusercontent.com/u/5575651?v=4",
              company: 'Cognizant'
            },{
              id: '2',
              name: 'Ben Alpert',
              avatar_url: "https://avatars2.githubusercontent.com/u/1448984?v=4",
              company: 'facebook'
            }]
        }
    };

  AddUserToCards = (data) => {
    console.log(data);
    this.setState(prevState=>
      {
        return {
        cards: prevState.cards.concat(data)
      }});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h2>Game</h2>
        <Main />
        <br/>
        <div>
          <Incrementer></Incrementer>
          <UserForm onSubmit={this.AddUserToCards}/>
          <CardList cards={this.state.cards}/>
        </div>

        
      </div>
    );
  }
}

export default App;
