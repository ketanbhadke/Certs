import React,  { Component , RestServices } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFileReader from 'react-file-reader';
import {SERVERS} from './data/servers'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      serverName: 'serverA',
      selectedFile: null,
      myStr: ''
    };
  }

  componentDidMount(){
    //for testing connection between Reactjs and SpringBoot
    // fetch('http://localhost:8080/tags/uploadFiles')
    // .then(res => res.json())
    //   .then(res => this.setState({
    //     myStr: res.myStr
    //   }))
  }

  handleChange(event) {
    this.setState({serverName: event.target.value});
  }

  handleSubmit(){
    const formData = new FormData();
    formData.append('file',this.state.selectedFile)
    var url = `http://localhost:8080/tags/upload/${this.state.serverName}`

    fetch(url,{
      // mode: 'no-cors', // very Important ... used to give error for res=>res.json()
      method:'POST',
       body: formData
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        myStr: res.myStr
      })
    })
  }

  handleFiles = files => {
    this.setState({
      selectedFile: files[0]
    })
  }

  render() {
    return (
      // returns only one div (can be nested though)!
      <div>
       <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Choose your certificate</label>
                       {/* <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={this.fileSelectHandler.bind(this)} /> */}
                        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.txt'}>
                          <button className='btn'>Upload</button>
                        </ReactFileReader>
            <br/> 
            <hr/>
            <div className="form-group">
              <label>Select server to be deployed</label>
              <select className="form-control" id="exampleFormControlSelect1" value={this.state.value} 
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