import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFileReader from 'react-file-reader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
    // Use reader.result
    alert(reader.result)
    }
  reader.readAsText(files[0]);
}

  render() {

    return (
      // returns only one div (can be nested though)!
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.txt'}>
    <button className='btn'>Upload</button>
</ReactFileReader>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default App;
