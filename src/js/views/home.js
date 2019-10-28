import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="container">
					<center>
						<div className="middle">
							<div id="login">
								<form action="javascript:void(0);" method="get">
									<fieldset className="clearfix">
										<p>
											<span className="fa fa-user" />
											<input type="text" Placeholder="Username" required />
										</p>
										<p>
											<span className="fa fa-lock" />
											<input type="password" Placeholder="Password" required />
										</p>
										<div>
											<span>
												<Link to="/userAdmin">
													<input type="submit" value="Sign In" />
												</Link>
											</span>
										</div>
									</fieldset>
									<div className="clearfix" />
								</form>

								<div className="clearfix" />
							</div>
							<div className="logo">LOGIN</div>
						</div>
					</center>
				</div>
			</div>
		);
	}
}
