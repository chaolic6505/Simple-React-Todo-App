import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
interface TodoListType {
	items: { id: string; text: string }[];
	deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListType> = (props) => {
	return (
		<>
			{props.items.map((todo, index) => (
				<Card key={index}>
					<Card.Body>{todo.text}</Card.Body>
					<Button
						onClick={props.deleteTodo.bind(null, todo.id)}
						size="sm"
						variant="light"
					>
						Delete
					</Button>
				</Card>
			))}
		</>
	);
};

export default TodoList;
