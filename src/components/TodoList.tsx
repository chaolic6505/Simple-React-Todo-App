import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

interface TodoListType {
	items: { id: string; text: string }[];

}

const TodoList: React.FC<TodoListType> = ({ items }) => {
	return (
		<Container>
			<ListGroup variant="flush">
				{items.map((todo) => (
					<ListGroup.Item key={todo.id}>{todo.text}</ListGroup.Item>
				))}
			</ListGroup>
		</Container>
	);
};

export default TodoList;
