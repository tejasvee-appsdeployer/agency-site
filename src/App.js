import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CarouselC from "./components/CarouselC";
import { Services } from "./components/Services";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import Customer from "./components/Customer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<CarouselC />
			<Services />
			<AboutUs />
			<Team />
			<Customer />
		</div>
	);
}

export default App;
