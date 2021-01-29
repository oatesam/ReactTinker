import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ExampleToast from './ExampleToast.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
      this.callAPI();
  }

  render() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <p className="App-intro">{this.state.apiResponse}</p>
          <ExampleToast>
            We now have Toasts
            <span role="img" aria-label="tada">
              🎉
            </span>
          </ExampleToast>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
