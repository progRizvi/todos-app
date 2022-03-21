import { Button, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { userAuth } = useSelector((state) => state.todos);
	const { user, isLoading } = userAuth();

	if (isLoading) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "60vh" }}
			>
				<Button variant="primary">
					<Spinner
						as="span"
						animation="grow"
						size="sm"
						role="status"
						aria-hidden="true"
					/>{" "}
					<span className="ps-2">Loading...</span>
				</Button>
			</div>
		);
	}
	return !user.email ? (
		<Navigate
			to={{
				pathname: "/",
				state: { from: location }
			}}
		/>
	) : (
		children
	);
};
export default PrivateRoute;
