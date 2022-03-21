import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../../components/Todo/Todo";
import { addTodo } from "../../redux/actions/todoActions";

const Todos = () => {
	const { todos } = useSelector((state) => state.todos);
	const [todo, setTodo] = useState("");

	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		dispatch(
			addTodo({
				id: todos.length + 1,
				todo
			})
		);
		e.preventDefault();
	};
	return (
		<Container>
			<div className="my-5 ">
				<h1>Add Todo</h1>
				<Row>
					<Col md={8}>
						<Form className="d-flex align-items-center" onSubmit={handleSubmit}>
							<Form.Control
								type="text"
								placeholder="Enter your Todo"
								name="todo"
								value={todo}
								onChange={(e) => setTodo(e.target.value)}
							/>
							<Button variant="primary" type="submit" className="px-4 ms-3">
								Add
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
			<Row>
				{todos.length === 0 ? <h1>No Todos</h1> : <h1>Todos</h1>}

				{todos.map((todo) => (
					<Todo key={todo.id} todo={todo} />
				))}
			</Row>
		</Container>
	);
};

export default Todos;
