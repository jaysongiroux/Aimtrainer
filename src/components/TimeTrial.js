import React,{Component} from 'react';
import BeginGame from './BeginGame'
import Grid from '@material-ui/core/Grid';

export default class TimeTrial extends Component {
    constructor(props){
        super(props);
        this.state = {
            timeTrial: false,
            duration: undefined,
            difficulty: undefined
        }
        this.startGame = this.startGame.bind(this);
        this.onDifficultyChange = this.onDifficultyChange.bind(this);
        this.onDurationChnage = this.onDurationChnage.bind(this);
    }

    startGame(){
        this.setState({
            timeTrial: true
        })
    }

    onDifficultyChange(event) {
        // string >> easy, medium, hard
        this.setState({
            difficulty: event.target.value
        })
    }

    onDurationChnage(event) {
        // number >> 1,5,10
        this.setState({
            duration: event.target.value
        })
    }

    render() {
        if(!this.state.timeTrial){
            return (
                <div className={"gameSettingContainer"}>
                    <Grid container justify={'center'} alignItems={'center'} spacing={0}>
                        <Grid item xs={12}>
                            <h1>Game Settings</h1>
                        </Grid>
                        <Grid item xs={6} className={'DurationBox'}>
                            <Grid container spacing={1} onChange={this.onDurationChnage}>
                                <Grid item xs={12} className={'durationBox'}>
                                    <input type="radio" id="1min" name="duration" value={1} />
                                    <label htmlFor="1min">1 Minute</label>
                                </Grid>
                                <Grid item xs={12} className={'durationBox'}>
                                    <input type="radio" id="5min" name="duration" value={5} />
                                    <label htmlFor="5min">5 Minutes</label>
                                </Grid>
                                <Grid item xs={12} className={'durationBox'}>
                                    <input type="radio" id="10min" name="duration" value={10} />
                                    <label htmlFor="10min">10 Minutes</label>
                                </Grid>
                            </Grid>
                        </Grid>
                        <br /><br />
                        <Grid item xs={6} className={"gameDifficulty"}>
                            <Grid container spacing={1} onChange={this.onDifficultyChange}>
                                <Grid item xs={12} className={'durationBox'}>
                                    <input type="radio" id="easy" name="difficulty" value={'easy'} />
                                    <label htmlFor="easy">Easy</label>
                                </Grid>
                                <Grid item xs={12} className={'durationBox'}>
                                    <input type="radio" id="medium" name="difficulty" value={'medium'} />
                                    <label htmlFor="medium">Medium</label>
                                </Grid>
                                <Grid item xs={12} className={'durationBox'}>
                                    <input type="radio" id="hard" name="difficulty" value={'hard'} />
                                    <label htmlFor="hard">Hard</label>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className={'startGameContainer'}>
                            <Grid item xs={12} className={'startGame'} onClick={this.startGame}>
                                Start Game
                            </Grid>
                        </div>
                    </Grid>
                </div>
            )
        } else {
            return (
                <BeginGame
                    startStatus={this.state.timeTrial}
                    duration={this.state.duration}
                    difficulty={this.state.difficulty}
                    endGame={this.props.endGame}
                />
            )
        }

    }
}