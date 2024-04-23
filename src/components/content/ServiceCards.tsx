import * as Icons from "../utils/Icons";

export const ServiceCards = () => {
	return (
		<article className="ServicesBody">
			<h1>Services</h1>
			<section className="ServicesDesc">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				<section className="Filters">
					<ul>
						<li>
							<select>
								<option value="default">Filter by..</option>
								<option value="filterVal1">FilterVal 1</option>
								<option value="filterVal2">FilterVal 2</option>
								<option value="filterVal3">FilterVal 3</option>
							</select>
						</li>
					</ul>
					<ul>
						<li>
							<select>
								<option value="default">Filter by..</option>
								<option value="filterVal1">FilterVal 1</option>
								<option value="filterVal2">FilterVal 2</option>
								<option value="filterVal3">FilterVal 3</option>
							</select>
						</li>
					</ul>
					<Icons.ThreeDots />
				</section>
			</section>
			<section className="ServiceCards">
				<section className="ServiceCard">
					<section className="cardHeader">
						<section className="ServiceCategory">
							<Icons.Box />
							<ul>
								<li className="Category">Service A</li>
								<ul className="CategoryInfo">
									<li>11 Jan 2022</li>
									<Icons.Dot />
									<li>Category</li>
								</ul>
							</ul>
						</section>
						<Icons.ThreeDots />
					</section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<button className="viewServiceBtn">View</button>
				</section>

				<section className="ServiceCard">
					<section className="cardHeader">
						<section className="ServiceCategory">
							<Icons.Box />
							<ul>
								<li className="Category">Service B</li>
								<ul className="CategoryInfo">
									<li>11 Jan 2022</li>
									<Icons.Dot />
									<li>Category</li>
								</ul>
							</ul>
						</section>
						<Icons.ThreeDots />
					</section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<button className="viewServiceBtn">View</button>
				</section>

				<section className="ServiceCard">
					<section className="cardHeader">
						<section className="ServiceCategory">
							<Icons.Box />
							<ul>
								<li className="Category">Service C</li>
								<ul className="CategoryInfo">
									<li>11 Jan 2022</li>
									<Icons.Dot />
									<li>Category</li>
								</ul>
							</ul>
						</section>
						<Icons.ThreeDots />
					</section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<button className="viewServiceBtn">View</button>
				</section>

				<section className="ServiceCard">
					<section className="cardHeader">
						<section className="ServiceCategory">
							<Icons.Box />
							<ul>
								<li className="Category">Service D</li>
								<ul className="CategoryInfo">
									<li>11 Jan 2022</li>
									<Icons.Dot />
									<li>Category</li>
								</ul>
							</ul>
						</section>
						<Icons.ThreeDots />
					</section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<button className="viewServiceBtn">View</button>
				</section>

				<section className="ServiceCard">
					<section className="cardHeader">
						<section className="ServiceCategory">
							<Icons.Box />
							<ul>
								<li className="Category">Service E</li>
								<ul className="CategoryInfo">
									<li>11 Jan 2022</li>
									<Icons.Dot />
									<li>Category</li>
								</ul>
							</ul>
						</section>
						<Icons.ThreeDots />
					</section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<button className="viewServiceBtn">View</button>
				</section>

				<section className="ServiceCard">
					<section className="cardHeader">
						<section className="ServiceCategory">
							<Icons.Box />
							<ul>
								<li className="Category">Service F</li>
								<ul className="CategoryInfo">
									<li>11 Jan 2022</li>
									<Icons.Dot />
									<li>Category</li>
								</ul>
							</ul>
						</section>
						<Icons.ThreeDots />
					</section>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<button className="viewServiceBtn">View</button>
				</section>
			</section>
		</article>
	);
};
