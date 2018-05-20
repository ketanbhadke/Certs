import React,  { Component , RestServices } from 'react';
import logo from './logo.svg';
import './components/css/app.css';
import ReactFileReader from 'react-file-reader';
import {SERVERS} from './data/servers'
import {DeploymentInfo} from './components/deploymentInfo'
import {DeploymentHistory} from './components/deploymentHistory'
import { Header } from './components/header'
import { CertificateUpload } from './components/certs-upload'

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
        <Header />
          <div class="row">
            <div class="container">
              <div class="card-group">
                  <div class="col-lg-6">
                        <div class="card-group-vertical">
                            <DeploymentInfo />
                            <DeploymentHistory />
                        </div>
                  </div>
                  <div class="col-lg-6">
                            <CertificateUpload />    
                  </div>
              </div>
            </div>
          </div>
         
      </div>
    );
  }
}

export default App;