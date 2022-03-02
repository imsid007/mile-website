/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { useEffect, useRef } from "react";

export default function Home() {
	const paralexRef = useRef(null);
	const paralexRef1 = useRef(null);
	const paralexRef2 = useRef(null);

	function handleScroll() {
		var scrollY = window.pageYOffset || document.documentElement.scrollTop;

		paralexRef.current.style.backgroundPosition =
			"center calc(50% + " + scrollY * 0.5 + "px)";
		paralexRef1.current.style.backgroundPosition =
			"center calc(50% + " + scrollY * 0.5 + "px)";
		paralexRef2.current.style.backgroundPosition =
			"center calc(50% + " + scrollY * 0.5 + "px)";
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, false);
		return () => {
			window.removeEventListener("scroll", handleScroll, false);
		};
	}, []);
	return (
		<>
			{" "}
			<Head>
				<meta charset="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<title>Milewalkers</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="apple-touch-icon" href="apple-touch-icon.png" />

				<link
					href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
					rel="stylesheet"
				/>

				{/* <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script> */}
			</Head>
			<div id="test">
				<div className="fixed-side-navbar">
					<ul className="nav flex-column">
						<li className="nav-item">
							<a className="nav-link" href="#home">
								<span>Intro</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#services">
								<span>Services</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#portfolio">
								<span>Portfolio</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#our-story">
								<span>Our Story</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact-us">
								<span>Contact Us</span>
							</a>
						</li>
					</ul>
				</div>
				<div
					ref={paralexRef}
					className="parallax-content baner-content"
					id="home"
				>
					<div className="container">
						<div className="first-content">
							<h1>MileWalkers</h1>
							<span>
								The <em>journey</em> matters more than the destination.
							</span>
							<div className="primary-button">
								<a href="#services">Discover More</a>
							</div>
						</div>
					</div>
				</div>
				<div className="service-content" id="services">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="left-text">
									<h4>More About Vanilla</h4>
									<div className="line-dec" />
									<p>
										Vanilla is free HTML CSS template with Bootstrap v4.2.1 and
										you can apply this theme for your sites. Please share our{" "}
										<a rel="nofollow" href="https://templatemo.com">
											website
										</a>{" "}
										to your friends or collegues. Thank you testing.
									</p>
									<ul>
										<li>- Praesent porta urna id eros</li>
										<li>- Curabitur consectetur malesuada</li>
										<li>- Nam pretium imperdiet enim</li>
										<li>- Sed viverra arcu non nisi efficitur test</li>
									</ul>
									<div className="primary-button">
										<a href="#portfolio">Learn More About Us</a>
									</div>
								</div>
							</div>
							<div className="col-md-8">
								<div className="row">
									<div className="col-md-6">
										<div className="service-item">
											<h4>Classic Modern Design</h4>
											<div className="line-dec" />
											<p>
												Sed lacinia ligula est, at venenatis ex iaculis quis.
												Morbi sollicitudin nulla eget odio pellentesque.
											</p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="service-item">
											<h4>Unique &amp; Creative Ideas</h4>
											<div className="line-dec" />
											<p>
												Sed lacinia ligula est, at venenatis ex iaculis quis.
												Morbi sollicitudin nulla eget odio pellentesque.
											</p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="service-item">
											<h4>Effective Team Work</h4>
											<div className="line-dec" />
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Sed lacinia ligula est, at venenatis ex iaculis quis.
											</p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="service-item">
											<h4>Fast Support 24/7</h4>
											<div className="line-dec" />
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Sed lacinia ligula est, at venenatis ex iaculis quis.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					ref={paralexRef1}
					className="parallax-content projects-content"
					id="portfolio"
				>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div id="owl-testimonials" className="owl-carousel owl-theme">
									<div className="item">
										<div className="testimonials-item">
											<a href="img/1st-big-item.jpg" data-lightbox="image-1">
												<img src="img/1st-item.jpg" alt="" />
											</a>
											<div className="text-content">
												<h4>Awesome Note Book</h4>
												<span>$18.001</span>
											</div>
										</div>
									</div>
									{/* <div className="item">
										<div className="testimonials-item">
											<a href="img/2nd-big-item.jpg" data-lightbox="image-1">
												<img src="img/2nd-item.jpg" alt="" />
											</a>
											<div className="text-content">
												<h4>Antique Decoration Photo</h4>
												<span>$27.00</span>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="testimonials-item">
											<a href="img/3rd-big-item.jpg" data-lightbox="image-1">
												<img src="img/3rd-item.jpg" alt="" />
											</a>
											<div className="text-content">
												<h4>Work Hand Bag</h4>
												<span>$36.00</span>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="testimonials-item">
											<a href="img/4th-big-item.jpg" data-lightbox="image-1">
												<img src="img/4th-item.jpg" alt="" />
											</a>
											<div className="text-content">
												<h4>Smart Watch</h4>
												<span>$45.00</span>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="testimonials-item">
											<a href="img/5th-big-item.jpg" data-lightbox="image-1">
												<img src="img/5th-item.jpg" alt="" />
											</a>
											<div className="text-content">
												<h4>PC Tablet Draw</h4>
												<span>$63.00</span>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="testimonials-item">
											<a href="img/6th-big-item.jpg" data-lightbox="image-1">
												<img src="img/6th-item.jpg" alt="" />
											</a>
											<div className="text-content">
												<h4>Healthy Milkshake</h4>
												<span>$77.00</span>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="testimonials-item">
											<a href="img/2nd-big-item.jpg" data-lightbox="image-1">
												<img src="img/2nd-item.jpg" alt="" />
											</a>
											<div className="text-content">
												<h4>Antique Decoration Photo</h4>
												<span>$84.50</span>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="testimonials-item">
											<a href="img/1st-big-item.jpg" data-lightbox="image-1">
												<img src="img/1st-item.jpg" alt="" />
											</a>
											<div className="text-content">
												<h4>Awesome Notes Book</h4>
												<span>$96.75</span>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tabs-content" id="our-story">
					<div className="container">
						<div className="row">
							<div className="col-md-8 mx-auto">
								<div className="wrapper">
									<section id="first-tab-group" className="tabgroup">
										<div id="tab1">
											<img src="img/1st-tab.jpg" alt="" />
											<p>
												Please do not re-distribute our template ZIP file on
												your template collection sites. You can make a
												screenshot and a link back to our website. This template
												can be used for personal or commercial purposes by
												end-users.
											</p>
										</div>
										<div id="tab2">
											<img src="img/2nd-tab.jpg" alt="" />
											<p>
												Aliquam eu ultrices risus, sed condimentum diam. Duis
												risus nulla, elementum vitae nisi a, ornare maximus
												nisl. Morbi et vehicula est. Cras at vulputate justo.
												Cras eu nulla metus. Ut et pretium velit. Pellentesque
												at neque tristique dui tempor venenatis.
											</p>
										</div>
										<div id="tab3">
											<img src="img/3rd-tab.jpg" alt="" />
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Sed lacinia ligula est, at venenatis ex iaculis quis.
												Morbi sollicitudin nulla eget odio pellentesque, sed
												cursus diam iaculis.
											</p>
										</div>
										<div id="tab4">
											<img src="img/4th-tab.jpg" alt="" />
											<p>
												Duis risus nulla, elementum vitae nisi a, ornare maximus
												nisl. Morbi et vehicula est. Cras at vulputate justo.
												Cras eu nulla metus. Ut et pretium velit. Pellentesque
												at neque tristique.
											</p>
										</div>
									</section>
									<ul className="tabs clearfix" data-tabgroup="first-tab-group">
										<li>
											<a href="#tab1" className="active">
												2008 - 2014
											</a>
										</li>
										<li>
											<a href="#tab2">2014 - 2016</a>
										</li>
										<li>
											<a href="#tab3">2016 - 2019</a>
										</li>
										<li>
											<a href="#tab4">2019 - Now</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					ref={paralexRef2}
					className="parallax-content contact-content"
					id="contact-us"
				>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="contact-form">
									<div className="row">
										<form id="contact" action method="post">
											<div className="row">
												<div className="col-md-12">
													<fieldset>
														<input
															name="name"
															type="text"
															className="form-control"
															id="name"
															placeholder="Your name..."
															required
														/>
													</fieldset>
												</div>
												<div className="col-md-12">
													<fieldset>
														<input
															name="email"
															type="email"
															className="form-control"
															id="email"
															placeholder="Your email..."
															required
														/>
													</fieldset>
												</div>
												<div className="col-md-12">
													<fieldset>
														<textarea
															name="message"
															rows={6}
															className="form-control"
															id="message"
															placeholder="Your message..."
															required
															defaultValue={""}
														/>
													</fieldset>
												</div>
												<div className="col-md-12">
													<fieldset>
														<button
															type="submit"
															id="form-submit"
															className="btn"
														>
															Send Message
														</button>
													</fieldset>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="map">
									{/* How to change your own map point
									 1. Go to Google Maps
									 2. Click on your location point
									 3. Click "Share" and choose "Embed map" tab
									 4. Copy only URL and paste it within the src="" field below
							  */}
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907"
										width="100%"
										height={390}
										frameBorder={0}
										style={{ border: 0 }}
										allowFullScreen
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="primary-button">
									<a href="#home">Back To Top</a>
								</div>
								<ul>
									<li>
										<a href="#">
											<i className="fa fa-facebook" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-twitter" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-linkedin" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-google" />
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-dribbble" />
										</a>
									</li>
								</ul>
								<p>
									Copyright © 2019 <em>MileWalkers</em>
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
			{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')`,
				}}
			></script>
			<script src="scripts/js/vendor/bootstrap.min.js"></script>
			<script src="scripts/js/plugins.js"></script>
			<script src="scripts/js/main.js"></script>
			<script src="scripts/footer.js"> </script> */}
		</>
	);
}
