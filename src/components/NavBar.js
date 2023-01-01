import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
	return (
		<Navbar fixed="top" bg="light" expand="lg" className="container-fluid">
			<Container fluid>
				<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="#action1">Home</Nav.Link>
						<Nav.Link href="#action2">Service</Nav.Link>
						<Nav.Link href="#action2">About</Nav.Link>
						<Nav.Link href="#action2">Our Team</Nav.Link>
						<Nav.Link href="#action2">Portfolio</Nav.Link>
						<Nav.Link href="#action2">Calculator</Nav.Link>
						<Nav.Link href="#action2">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
