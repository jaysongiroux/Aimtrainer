import Target from './Target'
import React,{Component} from 'react';

export default class BeginGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 5,
            seconds: 0,
            minutes: 0,
            score: 0,
            duration: parseInt(this.props.duration),
            difficulty: this.props.difficulty,
        };
        this.counterStart = this.counterStart.bind(this);
        this.addScore = this.addScore.bind(this)
    }

    counterStart(){
        let i = setTimeout(() => {
            this.setState({
                counter: this.state.counter - 1
            })
        }, 1000)
        if(this.state.counter === 0) {
            clearTimeout(i);

            // timer counting up
            let a = setTimeout(() => {
                if(this.state.seconds === 59){
                    this.setState({
                        seconds: 0,
                        minutes: this.state.minutes + 1
                    })
                } else {
                    this.setState({
                        seconds: this.state.seconds + 1
                    })
                }
            }, 1000)

            // when time runs out
            if(this.state.minutes === this.state.duration){
                clearTimeout(a);
                //end game
                console.log('endgame in side beginGame')
                this.props.endGame();
            }
        }
    }

    addScore(){
        this.setState({
            score: this.state.score + 1
        })
    }

    render() {
        if (this.props.startStatus) {
            this.counterStart();
            let time;
            if(this.state.counter === 0){
                if(this.state.seconds < 10){
                    time = this.state.minutes + ":0" + this.state.seconds
                } else {
                    time = this.state.minutes + ":" + this.state.seconds
                }
            }
            return (
                <div className={'Container'}>
                    <div className={"CounterContainer"}>

                        {this.state.counter > 0 &&
                            this.state.counter
                        }
                    </div>
                    <div className={'timeContainer'}>
                        <h2>{time}</h2>
                    </div>
                    <div className={'scoreContainer'}>
                        <h2>Score: {this.state.score}</h2>
                    </div>
                    <Target
                        onClickedTarget={this.addScore}
                        counter={this.state.counter}
                        difficulty={this.state.difficulty}
                    />
                </div>
            )
        } else {
            return null
        }
    }
}