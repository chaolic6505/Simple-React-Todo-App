import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todo } from './todo.models';

// FC = funtion component
const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (text: string) => {
		setTodos([...todos, { id: Math.random().toString(), text: text }]);
	};
	return (
		<>
			<Container className="App">
				<NewTodo addTodo={addTodoHandler} />
				<TodoList items={todos} />
			</Container>
		</>
	);
};

export default App;
