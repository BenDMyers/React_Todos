import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Button from '@material-ui/core/Button';
import * as actions from '../actions/';

class TodoInput extends Component {
	onSubmit = event => {
		event.preventDefault();
		this.props.addTodo(document.querySelector('.add-todo-input').value);
		document.querySelector('.add-todo-input').value = '';
	}
	render() {
		return (
			<div className="card card-header" style={{marginTop: '10px'}}>
				<form onSubmit={this.onSubmit}>
					<div className="form-control-group">
						<input id="add-todo-input" className="form-control card add-todo-input" placeholder="Save the world"/>
						<label htmlFor="add-todo-input" className="add-todo-label">Todo Name</label>
					</div>
					<button className="btn add-todo-submit">+ Add New Todo</button>

				</form>
			</div>
		);
	}
}

export default connect(null, actions)(TodoInput);