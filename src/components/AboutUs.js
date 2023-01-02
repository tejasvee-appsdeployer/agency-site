import React from "react";
import img1 from "../assests/img/about/1.jpg";
import img2 from "../assests/img/about/2.jpg";
import img3 from "../assests/img/about/3.jpg";
import "./AboutUs.css";

const AboutUs = () => {
	return (
		<section className="page-section mt-5 pt-5" id="about">
			<div className="container">
				<div className="text-center pb-2 mb-3 border-bottom">
					<h2 className="section-heading text-uppercase">About</h2>
					<h3 className="section-subheading text-muted">
						Lorem ipsum dolor sit amet consectetur.
					</h3>
				</div>
				<ul className="timeline">
					<li>
						<div className="timeline-image">
							<img className="rounded-circle img-fluid" src={img1} alt="..." />
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h4>2009-2011</h4>
								<h4 className="subheading">Our Humble Beginnings</h4>
							</div>
							<div className="timeline-body">
								<p className="text-muted">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
									ut voluptatum eius sapiente, totam reiciendis temporibus qui
									quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
									dolore laudantium consectetur!
								</p>
							</div>
						</div>
					</li>
					<li className="timeline-inverted">
						<div className="timeline-image">
							<img className="rounded-circle img-fluid" src={img2} alt="..." />
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h4>March 2011</h4>
								<h4 className="subheading">An Agency is Born</h4>
							</div>
							<div className="timeline-body">
								<p className="text-muted">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
									ut voluptatum eius sapiente, totam reiciendis temporibus qui
									quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
									dolore laudantium consectetur!
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="timeline-image">
							<img className="rounded-circle img-fluid" src={img3} alt="..." />
						</div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h4>December 2015</h4>
								<h4 className="subheading">Transition to Full Service</h4>
							</div>
							<div className="timeline-body">
								<p className="text-muted">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
									ut voluptatum eius sapiente, totam reiciendis temporibus qui
									quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
									dolore laudantium consectetur!
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default AboutUs;
