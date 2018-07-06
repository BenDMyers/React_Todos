import React, {Component} from 'react';
import {Line as ProgressBar} from 'rc-progress';
import {Collapse} from 'react-bootstrap';

import TodoSubtask from './TodoSubtask';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
		this.toggleCollapse = this.toggleCollapse.bind(this);

		this.red = [231, 76, 60];
		this.orange = [243, 156, 18];
		this.yellow = [241, 196, 15];
		this.green = [46, 204, 113];
		this.brightGreen = [114, 229, 0];
	}

	toggleCollapse() {
		this.setState({show: !this.state.show});
		console.log('Ping!');
	}

	blendTwoColors(left, right, skew) {
		return [(1-skew)*left[0] + skew*right[0], (1-skew)*left[1] + skew*right[1], (1-skew)*left[2] + skew*right[2]];
	}

	getColorFromPercent(percent) {
		if(percent < 0 || percent > 1) {return [1, 1, 1]};
		if(percent <= 0.33) {return this.blendTwoColors(this.red, this.orange, percent*3)}
		if(percent <= 0.67) {return this.blendTwoColors(this.orange, this.yellow, (percent-0.33)*3)}
		if(percent < 1) {return this.blendTwoColors(this.yellow, this.brightGreen, (percent-0.67)*3)}
		else {return this.green}
	}

	render() {
		const [r, g, b] = this.getColorFromPercent(this.props.percent);
		const color = `rgb(${r}, ${g}, ${b})`;
		return (
			<div className="card">
				<div className="card-header">
					<h5 className="card-title" style={{fontFamily: 'Roboto', fontWeight: 'bolder'}}>{this.props.name}</h5>
					<ProgressBar percent={this.props.percent * 100} strokeColor={color}/>
				</div>
				<Collapse in={this.props.show || this.state.show}>
					<div>
						<TodoSubtask checked={true} name="Walk the dog" />
						<TodoSubtask checked={true} name="Feed the dog" />
					</div>
				</Collapse>
				<div className="card-footer"><h6 style={{fontFamily: 'Roboto', fontWeight: 'bold'}}>+ Add New Subtask</h6></div>
				{/* <button onClick={this.toggleCollapse}>Toggle</button> */}
			</div>
		);
	}
}

export default TodoItem