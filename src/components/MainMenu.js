import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import BeginGame from "./BeginGame";
import TimeTrial from "./TimeTrial";

export default class Target extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hideMenu: false,
            timeTrial: false,
            settings: false,
            leaderBoards: false,
            difficulty: false,
            pause: false
        }

        this.bindMethods()
    }

    bindMethods(){
        this.onTimeTrialClick = this.onTimeTrialClick.bind(this);
        this.onCompeteClick = this.onCompeteClick.bind(this);
        this.onLeaderboardsClick = this.onLeaderboardsClick.bind(this);
        this.onSettingsClick = this.onSettingsClick.bind(this);
        this.showMenuBox = this.showMenuBox.bind(this);
        this.hideMenuBox = this.hideMenuBox.bind(this);
    }

    hideMenuBox(){
        this.setState({
            hideMenu: true
        })
    }

    showMenuBox(){
        this.setState({
            hideMenu: false
        })
    }

    onTimeTrialClick(){
        this.setState({
            timeTrial: true
        })
        this.hideMenuBox()
    }

    onCompeteClick(){
        this.hideMenuBox()
    }

    onLeaderboardsClick(){
        this.hideMenuBox()
    }

    onSettingsClick(){
        this.hideMenuBox()
    }

    render(){
        if(!this.state.hideMenu){
            return (
                <div className={"MainMenuContainer"}>
                    <Grid container justify="center" alignItems="center" spacing={1}>
                        <Grid item xs={12}>
                            <h1>Aim Trainer</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={"mainMenuBox"} onClick={this.onTimeTrialClick}>
                                Time Trial
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={"mainMenuBox"} >
                                Compete
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={"mainMenuBox"} >
                                Leaderboards
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={"mainMenuBox"} >
                                Settings
                            </div>
                        </Grid>
                    </Grid>
                </div>
            )
        }

        if(this.state.timeTrial){
            return (
                <TimeTrial startStatus={this.state.timeTrial} pause={this.props.pause}/>
            )
        }

        else{
            return null
        }

    }
}