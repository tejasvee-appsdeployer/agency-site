import React from "react";

export const Services = () => {
	return (
		<div id="services" className="mt-5 pt-5">
			<div className="container px-4 py-5" id="custom-cards">
				<h2 className="pb-2 border-bottom">Our Services</h2>

				<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
					<div className="col">
						<div
							className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
							style={{
								backgroundImage:
									"url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-1.jpg')",
							}}
						>
							<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
								<h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
									Locate a Retailer
								</h3>
								<ul className="d-flex list-unstyled mt-auto">
									<li className="me-auto d-flex align-items-center me-3 text-center">
										<small>
											Find the retailer that's conviniently located for you.
										</small>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col">
						<div
							className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
							style={{
								backgroundImage:
									"url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-2.jpg')",
							}}
						>
							<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
								<h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
									Accessories
								</h3>
								<ul className="d-flex list-unstyled mt-auto">
									<li className="me-auto d-flex align-items-center me-3">
										<small>
											Choose from our extensive range of accessories to create a
											bathroom that is perfect fit for your lifestyle.
										</small>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col">
						<div
							className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
							style={{
								backgroundImage:
									"url('https://getbootstrap.com/docs/5.3/examples/features/unsplash-photo-3.jpg')",
							}}
						>
							<div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
								<h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
									Another service.
								</h3>
								<ul className="d-flex list-unstyled mt-auto">
									<li className=" m-auto d-flex align-items-center">
										<small>Own our products.</small>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
