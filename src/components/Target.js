import React,{Component} from 'react';
const electron = require('electron')
const remote = electron.remote
import {ipcRenderer} from 'electron';

export default class Target extends Component{
    constructor(props) {
        super(props);
        this.state = {
            transform: undefined,
            height: 0,
            width: 0,
            start: false,
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
        if(this.state.counter === 1 && this.state.start===false){
            this.setState({
                start: true
            })
            console.log("placing target")
            this.placeTarget()
        }
    }

    placeTarget(){
        let windowSize = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds()
        console.log(windowSize);
        let x = Math.random() * windowSize.width;
        let y = Math.random() * windowSize.height;
        if(x > windowSize.width -20){
            x = x - 20
        }
        if(x < 20){
            x = 20
        }
        if(y > windowSize.height -20){
            y = y - 20
        }
        if(y<20){
            y = 20
        }
        this.state.transform = 'translate(' + x + 'px,' + y + 'px)';
        this.setState({
            transform: 'translate(' + x + 'px,' + y + 'px)'
        });

        switch(this.props.difficulty){
            case('easy'):
                this.setState({
                    height: '30px',
                    width: '30px'
                });
                break;
            case('medium'):
                this.setState({
                    height:'25px',
                    width: '25px'
                });
                break;
            case('hard'):
                    this.setState({
                        height: '20px',
                        width: '20px'
                    });
                break
        }
        this.props.onClickedTarget();
    }

    render(){
        return (
            <div className={"targetContainer"}>
                {this.state.transform &&
                    <div className={"Target"}
                         style={{transform: this.state.transform, width: this.state.width, height: this.state.height}}
                         onClick={this.placeTarget}
                    />
                }
            </div>
        )
    }
}