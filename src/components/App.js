import React,{Component} from 'react';
import PauseMenu from './pauseMenu'
import MainMenu from './MainMenu'

export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			pause: false
		};

		this.escFunction = this.escFunction.bind(this);
	}

	escFunction(event){
		if(event.key === 'Escape'){
			console.log('pause')
			this.setState({
				pause: !this.state.pause
			})
		}
	}

	render(){
		return (
			<div className={"App"} onKeyDown={this.escFunction} tabIndex={0}>
				<MainMenu pause={this.state.pause}/>
			</div>
		)
	}
}