import React,{Component} from 'react';
import MainMenu from './MainMenu'

export default class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className={"App"}>
				<MainMenu />
			</div>
		)
	}
}