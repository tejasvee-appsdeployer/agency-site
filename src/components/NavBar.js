import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assests/img/favicon.ico";

function NavBar() {
	return (
		<Navbar
			fixed="top"
			bg="dark"
			variant="dark"
			expand="lg"
			className="container-fluid"
		>
			<Container fluid>
				<Navbar.Brand href="#carousel">
					<img src={Logo} alt="" style={{ width: "2rem" }} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="#carousel">Home</Nav.Link>
						<Nav.Link href="#services">Service</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#our_team">Our Team</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
