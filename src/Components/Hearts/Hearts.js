import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BirthdayCard from '../BirthdayCard/BirthdayCard'
import './Hearts.css';


class heartObj {
	constructor(val1, val2){
		this.valX = val1;
		this.valY = val2
	}

	log(){
		console.log(this.valX+","+this.valY)
	}

	show() {
		this.log()
		let randNum = Math.random()*10
		if(randNum > 0){
			let div = document.createElement("div");
			div.setAttribute('id', 'text')
			div.setAttribute("style", `left: ${this.valX}px; top: ${this.valY}px;`)
			document.getElementById('appBackground').appendChild(div);
			setTimeout(() => {  
				document.getElementById('text').remove();
			},
			randNum*100);
		}
	}
}

class Hearts extends Component {
	state = { 
		x: 0,
		y: 0 
	};

	_onMouseMove = (e) => {
		this.setState({x:e.pageX, y: e.pageY})
		let hearts = new heartObj(e.pageX, e.pageY)
		hearts.show()
	}

	render() {
		return (
			<div onMouseMove={this.onMouseMove} id="appBackground">
				{/*<div>{this.state.x} , {this.state.y}</div>*/}
				<BirthdayCard />

			</div>
		)
	}

}


export default Hearts;