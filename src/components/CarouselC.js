import Carousel from "react-bootstrap/Carousel";
import img1 from "../assests/img/img1.jpg";
import img2 from "../assests/img/img2.jpg";
import img3 from "../assests/img/img3.jpg";

function CarouselC() {
	return (
		<Carousel className="mt-5 carousel font-monospace" id="carousel">
			<Carousel.Item className="carousel-item">
				<img className="img-fluid" src={img1} alt="First slide" />
				<Carousel.Caption className="fs-1 fw-light">
					<h1>Atomic Color Perfection</h1>
					<p>The new Physical Vapour Deposition (PVD).</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carousel-item">
				<img className="img-fluid" src={img2} alt="Second slide" />

				<Carousel.Caption className="fs-1 fw-light">
					<h1 className="font-monospace">Simplicity</h1>
					<p>
						Thoughtful reduction of what is obvious is simplicity. And what is
						clarity.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carousel-item">
				<img className="img-fluid" src={img3} alt="Third slide" />

				<Carousel.Caption className="fs-1 fw-light">
					<h1 className="font-monospace">Durability</h1>
					<p>Aesthetic longetivity which avoids deconstructivism.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselC;
