import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CarouselC from "./components/CarouselC";
import { Services } from "./components/Services";

function App() {
	return (
		<div className="App">
			<NavBar />
			<CarouselC />
			<Services />
		</div>
	);
}

export default App;
