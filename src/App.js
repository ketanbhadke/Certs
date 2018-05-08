import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFileReader from 'react-file-reader';
import {SERVERS} from './data/servers'
// const SERVERS = require('./data/servers');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      // servers: SERVERS
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
    // Use reader.result
    alert(reader.result)
    console.log("cfv" + reader.readAsText(files)); 
    }
    console.log("cfv" + reader.readAsText(files[0]));
}

  render() {
    // let serverList = this.state.servers.map(server => <li>{server}</li>)
    // let serverList = SERVERS.map(server => <li>{server}</li>)
    return (
      // returns only one div (can be nested though)!
      <div>
       <form onSubmit={this.handleSubmit.bind(this)}>
          <div class="form-group">
            <label for="exampleFormControlFile1">Choose your certificate</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            <br/>
            <hr/>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Select server to be deployed</label>
              <select class="form-control" id="exampleFormControlSelect1" value={this.state.value} 
                onChange={this.handleChange.bind(this)}>
                  <option value="serverA">serverA</option>
                  <option value="serverB">serverB</option>
                  <option value="serverC">serverC</option>
                  <option value="serverD">serverD</option>
                  <option value="serverE">serverE</option>
              </select>
            </div>
            
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
