import Carousel from "react-bootstrap/Carousel";
import img1 from "../assests/img/img1.jpg";
import img2 from "../assests/img/img2.jpg";
import img3 from "../assests/img/img3.jpg";
import "./CarouselC.scss";

function CarouselC() {
	return (
		<Carousel className="mt-5 carousel">
			<Carousel.Item className="carousel-item">
				<img className="img-fluid" src={img1} alt="First slide" />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carousel-item">
				<img className="img-fluid" src={img2} alt="Second slide" />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carousel-item">
				<img className="img-fluid" src={img3} alt="Third slide" />

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselC;
