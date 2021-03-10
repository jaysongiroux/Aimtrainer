import Target from './Target'
import React,{Component} from 'react';
import PauseMenu from "./pauseMenu";

export default class BeginGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 5
        };
        this.counterStart = this.counterStart.bind(this);
    }

    counterStart(){
        let i = setTimeout(() => {
            this.setState({
                counter: this.state.counter - 1
            })
        }, 1000)
        if(this.state.counter === 0) {
            clearTimeout(i)
        }
    }

    render() {
        if (this.props.pause){
            return (
                <PauseMenu pause={this.props.pause}/>
            )
        } if (this.props.startStatus) {
            this.counterStart();
            return (
                <div className={'Container'}>
                    <div className={"CounterContainer"}>
                        {this.state.counter > 0 &&
                        this.state.counter
                        }
                        <Target counter={this.state.counter}/>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}