import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

type NewTodoType = {
	addTodo: (todoText: string) => void;
};
const NewTodo: React.FC<NewTodoType> = (props) => {
	const textInput = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const userInput = textInput.current!.value;
		props.addTodo(userInput);
	};
	return (
		<>
			<Form onSubmit={todoSubmitHandler}>
				<Form.Group>
					<Form.Label></Form.Label>
					<Form.Control
						ref={textInput}
						placeholder="Todo Text"
						type="text"
						id="todo-text"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Add New Todo
				</Button>
			</Form>
		</>
	);
};

export default NewTodo;
