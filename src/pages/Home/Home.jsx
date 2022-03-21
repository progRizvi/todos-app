import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const { userAuth } = useSelector((state) => state.todos);
	const { LoginWithGoogle, user } = userAuth();
	const navigate = useNavigate();
	if (user.email) navigate("/todos");
	return (
		<Container>
			<Row>
				<Col>
					<div
						className="d-flex justify-content-center align-items-center"
						style={{ height: "100vh" }}
					>
						<Button variant="primary" onClick={LoginWithGoogle}>
							Login with google
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
