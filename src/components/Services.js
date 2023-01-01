import React from "react";

export const Services = () => {
	return (
		<div>
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
									Short title, long jacket
								</h3>
								<ul className="d-flex list-unstyled mt-auto">
									<li className="me-auto d-flex align-items-center me-3">
										<svg className="bi me-2" width="1em" height="1em">
											<use xlinkHref="#geo-fill"></use>
										</svg>
										<small>Earth</small>
									</li>
									<li className="d-flex align-items-center">
										<svg className="bi me-2" width="1em" height="1em">
											<use xlinkHref="#calendar3"></use>
										</svg>
										<small>3d</small>
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
									Much longer title that wraps to multiple lines
								</h3>
								<ul className="d-flex list-unstyled mt-auto">
									<li className="me-auto d-flex align-items-center me-3">
										<svg className="bi me-2" width="1em" height="1em">
											<use xlinkHref="#geo-fill"></use>
										</svg>
										<small>Pakistan</small>
									</li>
									<li className="d-flex align-items-center">
										<svg className="bi me-2" width="1em" height="1em">
											<use xlinkHref="#calendar3"></use>
										</svg>
										<small>4d</small>
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
									Another longer title belongs here
								</h3>
								<ul className="d-flex list-unstyled mt-auto">
									<li className=" me-auto d-flex align-items-center me-3">
										<svg className="bi me-2" width="1em" height="1em">
											<use xlinkHref="#geo-fill"></use>
										</svg>
										<small>California</small>
									</li>
									<li className="d-flex align-items-center">
										<svg className="bi me-2" width="1em" height="1em">
											<use xlinkHref="#calendar3"></use>
										</svg>
										<small>5d</small>
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
