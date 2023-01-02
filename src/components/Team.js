import React from "react";
import img1 from "../assests/img/team/1.jpg";
import img2 from "../assests/img/team/2.jpg";
import img3 from "../assests/img/team/3.jpg";
import "./Team.css";

function Team() {
	return (
		<section id="our_team" className="mt-5 pt-5">
			<div className="container">
				<div className="text-center pb-2 mb-4 border-bottom">
					<h2 className="text-uppercase">Our Team</h2>
					<h3 className="text-muted">
						Lorem ipsum dolor sit amet consectetur.
					</h3>
				</div>
				<div className="row row-cols-1 row-cols-lg-3 px-3 py-3 card-wrap border-bottom">
					<div className="col img-wrap d-flex align-items-center flex-column">
						<img className="img img-thumbnail mb-3" src={img1} alt="" />
						<div className="w-50">
							<h4 className="text-uppercase">Naveen</h4>
							<h5 className="text-muted">Senior Designer</h5>
							<div className="mt-4 display-6 d-flex align-items-center justify-content-around">
								<i className="fa-brands fa-google-plus"></i>
								<i className="fa-brands fa-facebook"></i>
								<i className="fa-brands fa-linkedin"></i>
							</div>
						</div>
					</div>
					<div className="col img-wrap d-flex align-items-center flex-column">
						<img className="img img-thumbnail mb-3" src={img2} alt="" />
						<div className="w-50">
							<h4 className="text-uppercase">Ava</h4>
							<h5 className="text-muted">Senior Engineer</h5>
							<div className="mt-4 display-6 d-flex align-items-center justify-content-around">
								<i className="fa-brands fa-google-plus"></i>
								<i className="fa-brands fa-facebook"></i>
								<i className="fa-brands fa-linkedin"></i>
							</div>
						</div>
					</div>
					<div className="col img-wrap d-flex align-items-center flex-column">
						<img className="img img-thumbnail mb-3" src={img3} alt="" />
						<div className="w-50">
							<h4 className="text-uppercase">Steve</h4>
							<h5 className="text-muted">Sales Head</h5>
							<div className="mt-4 display-6 d-flex align-items-center justify-content-around">
								<i className="fa-brands fa-google-plus"></i>
								<i className="fa-brands fa-facebook"></i>
								<i className="fa-brands fa-linkedin"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;
