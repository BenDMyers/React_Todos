import React, {Component} from 'react';
import FlipMove from 'react-flip-move';
// import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';
import TodoInput from './TodoInput';

class App extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {todos: [
	// 		<TodoItem key={`${new Date().getTime()}`} name="My first todo!" percent={1} show={true}/>
	// 	]};
	// }

	// addRandomTodo = () => {
	// 	const todo = <TodoItem key={`${new Date().getTime()}`} name={`Todo #${this.state.todos.length + 1}`} percent={Math.random()} />
	// 	this.setState({todos: [todo, ...this.state.todos]});
	// }

	// deleteRandomTodo = () => {
	// 	var array = [...this.state.todos]; // make a separate copy of the array
	// 	var index = Math.floor(Math.random() * this.state.todos.length)
	// 	array.splice(index, 1);
	// 	this.setState({todos: array});
	// }

	render() {
		return (
			<div className="container">
				{/* <button onClick={this.addRandomTodo}>Add Random Todo</button>
				<button onClick={this.deleteRandomTodo}>Delete Random Todo</button> */}
				<TodoInput/>
				<FlipMove>
					{this.props.todos}
				</FlipMove>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {todos: state.todos};
}

export default connect(mapStateToProps)(App);