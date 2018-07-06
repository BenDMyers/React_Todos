import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Well} from 'react-bootstrap';

class TodoSubtask extends Component {
	constructor(props) {
		super(props);

		this.state = {checked: false};
		this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
	}

	onChangeCheckbox(event, checked) {
		this.setState({checked});
	}

	render() {
		return (
			<div style={{paddingLeft: '20px', paddingRight: '20px', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray'}}><Well>
				<FormControlLabel
					  control={<Checkbox checked={this.state.checked} onChange={this.onChangeCheckbox}
					  color="default"/>}
					label={this.props.name}
        		/>
			</Well></div>
		);
	}
}

export default TodoSubtask;