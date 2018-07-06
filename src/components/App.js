import React, {Component} from 'react';
import FlipMove from 'react-flip-move';

import TodoItem from './TodoItem';

class App extends Component {
	constructor(props) {
		super(props);

		// this.state = {todos: [
		// 	<TodoItem name="My first todo!" percent={0.7} show={true}/>,
		// 	<TodoItem name="My second todo!" percent={0.2}/>,
		// 	<TodoItem name="My third todo!" percent={0.97}/>
		// ]};

		this.state = {todos: [
			<TodoItem key={`${new Date().getTime()}`} name="My first todo!" percent={0.7} show={true}/>
		]};
	}

	addRandomTodo = () => {
		const todo = <TodoItem key={`${new Date().getTime()}`} name={`Todo #${this.state.todos.length + 1}`} percent={Math.random()} />
		this.setState({todos: [todo, ...this.state.todos]});
	}

	deleteRandomTodo = () => {
		var array = [...this.state.todos]; // make a separate copy of the array
		var index = Math.floor(Math.random() * this.state.todos.length)
		array.splice(index, 1);
		this.setState({todos: array});
	}

	render() {
		return (
			<div className="container">
				<button onClick={this.addRandomTodo}>Add Random Todo</button>
				<button onClick={this.deleteRandomTodo}>Delete Random Todo</button>
				<FlipMove>
					{this.state.todos}
				</FlipMove>
			</div>
		);
	}
}

export default App;