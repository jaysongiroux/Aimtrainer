import React,{Component} from 'react';
const electron = require('electron')
const remote = electron.remote
import {ipcRenderer} from 'electron';

export default class Target extends Component{
    constructor(props) {
        super(props);
        this.state = {
            x: undefined,
            y: undefined,
            counter: false
        };

        this.placeTarget = this.placeTarget.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.counter !== this.state.counter){
            this.setState({
                counter: prevProps.counter
            })
        }
        if(this.state.counter === 1){
            this.placeTarget()
        }
    }

    placeTarget(){
        let windowSize = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds()
        console.log(windowSize)
        let x = Math.random() * windowSize.height;
        let y = Math.random() * windowSize.width;


    }

    render(){
        if(this.state.x){
            return (
                <div className={"targetContainer"}>
                    <div className={"Target"} />
                </div>
            )
        } else {
            return null
        }

    }
}