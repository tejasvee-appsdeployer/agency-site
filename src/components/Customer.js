import React from "react";
import img1 from "../assests/img/team/1.jpg";
import img2 from "../assests/img/team/2.jpg";
import img3 from "../assests/img/team/3.jpg";

function Customer() {
	return (
		<div className="container mt-5 pt-5">
			<h2 className="pb-2 border-bottom">What out Customers say</h2>
			<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
				<div className="feature col">
					<div className="d-inline-flex align-items-top justify-content-around bg-gradient fs-2 mb-3">
						<img src={img1} style={{ width: "8rem" }} className="mx-2" alt="" />
						<span className="mt-1">
							<h3 className="fs-4">Aman Khatri</h3>
							<p className="fs-6 text-start">XYZ Consult</p>
						</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					</p>
				</div>
				<div className="feature col">
					<div className="d-inline-flex align-items-top justify-content-around bg-gradient fs-2 mb-3">
						<img src={img2} style={{ width: "8rem" }} className="mx-2" alt="" />
						<span className="mt-1">
							<h3 className="fs-4">Anna Bong</h3>
							<p className="fs-6 text-start">ABC Consult</p>
						</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					</p>
				</div>
				<div className="feature col">
					<div className="d-inline-flex align-items-top justify-content-around bg-gradient fs-2 mb-3">
						<img src={img3} style={{ width: "8rem" }} className="mx-2" alt="" />
						<span className="mt-1">
							<h3 className="fs-4">Alex Ben</h3>
							<p className="fs-6 text-start">JKL Consult</p>
						</span>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					</p>
				</div>
			</div>
		</div>
	);
}

export default Customer;
