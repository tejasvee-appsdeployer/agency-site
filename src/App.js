import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CarouselC from "./components/CarouselC";
import { Services } from "./components/Services";
import AboutUs from "./components/AboutUs";

function App() {
	return (
		<div className="App">
			<NavBar />
			<CarouselC />
			<Services />
			<AboutUs />
		</div>
	);
}

export default App;
