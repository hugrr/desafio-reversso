import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="gtco-nav" role="navigation">
				<div className="gtco-container  ">
					<div className="row">
						<div className="col-sm-4 col-xs-12">
							<div id="gtco-logo float left">
								<a className="title">
									Reversso SpA{" "}
									<span className="icon1">
										<i className="fas fa-clipboard-check" />
									</span>
								</a>
							</div>
						</div>
						<div className="col-xs-10 text-right menu-1">
							<span className="icon2">
								<i className="fas fa-user-astronaut" />
							</span>

							<Link to="/userAdmin">
								<input type="submit" value="Perfiles" className="btn btn" />
							</Link>

							<span className="icon2">
								<i className="fas fa-home" />
							</span>

							<Link to="/">
								<input id="inputNav" type="submit" value="inicio" className="btn btn" />
							</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
