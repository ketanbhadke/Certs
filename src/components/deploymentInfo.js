import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { DeploymentInfoChild } from './deploymentInfoChild'

export class DeploymentInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showChildComponent: false
        }
    }

    callChildComponent(){
        this.setState({
            showChildComponent: true
        })
    }

    render(){
        return (
                            <div class="cards">
                                  <div class="card-header">
                                    Screen1
                                  </div>
                                  <div class="card-body">
                                    <h5 class="card-title">Certs Deployment Status</h5>
                                    <p class="card-text">Click below to see status of deployment</p>
                                   
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                {this.state.showChildComponent ? <DeploymentInfoChild /> : null}
                                  </div>
                            </div>
        )
    }

}

