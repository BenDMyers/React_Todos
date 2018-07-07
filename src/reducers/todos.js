import React from 'react';
import {ADD_TODO} from '../actions/types';
import TodoItem from '../components/TodoItem';

export default function(state=[], action) {
	switch(action.type) {
		case ADD_TODO:
			const newTodo = <TodoItem key={`${new Date().getTime()}`} name={action.payload} percent={0} />;
			return [newTodo, ...state]
		default:
			return state;
	}
}