import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers/';

import App from './components/App';
import TodoItem from './components/TodoItem';

const store = createStore(reducers, {todos: [<TodoItem key={`${new Date().getTime()}`} name="My first todo!" percent={1} show={true}/>]});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);