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
		if (textInput.current!.value.trim().length !== 0) {
			const userInput = textInput.current!.value;
			props.addTodo(userInput);
			textInput.current!.value = ' ';
		} else {
			alert('Invalid Input');
		}
	};
	return (
		<>
			<Form onSubmit={todoSubmitHandler}>
				<Form.Group>
					<Form.Label></Form.Label>
					<Form.Control
						ref={textInput}
						placeholder="Insert Todo Text"
						type="text"
						id="todo-text"
						required
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
