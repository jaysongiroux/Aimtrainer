import React,{Component} from 'react';
import {ipcRenderer} from 'electron';

export default class Target extends Component{
    constructor(props) {
        super(props);
        this.state = {
            x: undefined,
            y: undefined
        }

        this.handleTargetInfo = this.handleTargetInfo.bind(this);
        this.onClick = this.onClick.bind(this);
        ipcRenderer.on('target-info', this.handleTargetInfo);
    }

    handleTargetInfo(event, arg){
        this.setState({
            x: arg.x,
            y: arg.y
        })
    }

    onClick(){
        ipcRenderer.send('new-target-ready', null);
        console.log('need new target')
    }

    render(){
        return (
            <div className={"Target"} onClick={this.onClick}>

            </div>
        )
    }
}