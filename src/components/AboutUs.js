import React from "react";
import img1 from "../assests/img/about/1.jpg";
import img2 from "../assests/img/about/2.jpg";
import img3 from "../assests/img/about/3.jpg";
import "./AboutUs.css";

const AboutUs = () => {
	return (
		<section class="page-section" id="about">
			<div class="container">
				<div class="text-center pb-2 mb-3 border-bottom">
					<h2 class="section-heading text-uppercase">About</h2>
					<h3 class="section-subheading text-muted">
						Lorem ipsum dolor sit amet consectetur.
					</h3>
				</div>
				<ul class="timeline">
					<li>
						<div class="timeline-image">
							<img class="rounded-circle img-fluid" src={img1} alt="..." />
						</div>
						<div class="timeline-panel">
							<div class="timeline-heading">
								<h4>2009-2011</h4>
								<h4 class="subheading">Our Humble Beginnings</h4>
							</div>
							<div class="timeline-body">
								<p class="text-muted">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
									ut voluptatum eius sapiente, totam reiciendis temporibus qui
									quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
									dolore laudantium consectetur!
								</p>
							</div>
						</div>
					</li>
					<li class="timeline-inverted">
						<div class="timeline-image">
							<img class="rounded-circle img-fluid" src={img2} alt="..." />
						</div>
						<div class="timeline-panel">
							<div class="timeline-heading">
								<h4>March 2011</h4>
								<h4 class="subheading">An Agency is Born</h4>
							</div>
							<div class="timeline-body">
								<p class="text-muted">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
									ut voluptatum eius sapiente, totam reiciendis temporibus qui
									quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
									dolore laudantium consectetur!
								</p>
							</div>
						</div>
					</li>
					<li>
						<div class="timeline-image">
							<img class="rounded-circle img-fluid" src={img3} alt="..." />
						</div>
						<div class="timeline-panel">
							<div class="timeline-heading">
								<h4>December 2015</h4>
								<h4 class="subheading">Transition to Full Service</h4>
							</div>
							<div class="timeline-body">
								<p class="text-muted">
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
