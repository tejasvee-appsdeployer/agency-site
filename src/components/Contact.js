import React from "react";
import "./Contact.css";

function Contact() {
	return (
		<div className="contact p-5" id="contact">
			<div className="container">
				<div className="text-center text-light mb-5">
					<h2 className="section-heading text-uppercase">Contact Us</h2>
					<h3 className="section-subheading text-muted">
						Lorem ipsum dolor sit amet consectetur.
					</h3>
				</div>
				<form id="contactForm">
					<div className="row align-items-stretch mb-5">
						<div className="col-md-6">
							<div className="form-group">
								<input
									className="form-control"
									id="name"
									type="text"
									placeholder="Your Name *"
									data-sb-validations="required"
								/>
								<div
									className="invalid-feedback"
									data-sb-feedback="name:required"
								>
									A name is required.
								</div>
							</div>
							<div className="form-group mt-2">
								<input
									className="form-control"
									id="email"
									type="email"
									placeholder="Your Email *"
									data-sb-validations="required,email"
								/>
								<div
									className="invalid-feedback"
									data-sb-feedback="email:required"
								>
									An email is required.
								</div>
								<div
									className="invalid-feedback"
									data-sb-feedback="email:email"
								>
									Email is not valid.
								</div>
							</div>
							<div className="form-group mb-md-0 mt-2">
								<input
									className="form-control"
									id="phone"
									type="tel"
									placeholder="Your Phone *"
									data-sb-validations="required"
								/>
								<div
									className="invalid-feedback"
									data-sb-feedback="phone:required"
								>
									A phone number is required.
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group form-group-textarea mb-md-0">
								<textarea
									className="form-control"
									id="message"
									placeholder="Your Message *"
									data-sb-validations="required"
								></textarea>
								<div
									className="invalid-feedback"
									data-sb-feedback="message:required"
								>
									A message is required.
								</div>
							</div>
						</div>
					</div>
					<div className="text-center">
						<button
							className="btn btn-primary btn-xl text-uppercase disabled"
							id="submitButton"
							type="submit"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
