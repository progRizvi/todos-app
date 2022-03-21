import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	const { userAuth } = useSelector((state) => state.todos);
	const { user, Logout } = userAuth();
	return (
		<Container>
			<Nav
				variant="tabs"
				defaultActiveKey="/home"
				className="mt-5 justify-content-between"
			>
				<div className="d-flex">
					<Nav.Item className="text-decoration-none">
						<NavLink to="/" className="text-decoration-none px-3">
							Home
						</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink to="/todos" className="text-decoration-none px-3">
							Todos
						</NavLink>
					</Nav.Item>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					{user.email && (
						<>
							<Nav.Item className="pe-3">{user.displayName}</Nav.Item>
							<Nav.Item>
								<Button variant="outline-danger" onClick={Logout}>
									Logout
								</Button>
							</Nav.Item>
						</>
					)}
				</div>
			</Nav>
		</Container>
	);
};

export default Navigation;
