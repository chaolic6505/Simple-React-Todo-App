import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import Container from 'react-bootstrap/Container';
import { Todo } from './todo.models';

// FC = funtion component
const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		setTodos((prevTodos) => [
			...prevTodos,
			{ id: Math.random().toString(), text: text },
		]);
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};
	return (
		<>
			<Container>
				<NewTodo addTodo={addTodoHandler} />
				<br />
				<TodoList items={todos} deleteTodo={removeTodoHandler} />
			</Container>
		</>
	);
};

export default App;
