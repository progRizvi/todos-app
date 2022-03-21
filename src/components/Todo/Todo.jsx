import { Button, Col, Container, ListGroup } from "react-bootstrap";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions/todoActions";

const Todo = ({ todo }) => {
	const dispatch = useDispatch();
	return (
		<Container>
			<Col md={6}>
				<div className="d-flex align-items-center w-100">
					<ListGroup.Item className="w-100">{todo.todo}</ListGroup.Item>
					<Button
						variant="danger"
						className="px-3 ms-3"
						onClick={() => dispatch(deleteTodo(todo.id))}
					>
						<ImBin />
					</Button>
				</div>
			</Col>
		</Container>
	);
};

export default Todo;
