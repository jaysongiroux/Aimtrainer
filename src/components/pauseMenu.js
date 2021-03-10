import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';

export default class PauseMenu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log("pausing...", this.props)

        if(this.props.pause){
            return (
                <div className={"MainMenuContainer"}>
                    <Grid container justify={'center'} alignItems={'center'} spacing={1}>
                        <Grid item xs={12}>
                            <h1>Pause</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={"mainMenuBox"}>
                                Continue
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={"mainMenuBox"}>
                                Exit
                            </div>
                        </Grid>
                    </Grid>
                </div>
            )
        } else {
            return null
        }
    }
}