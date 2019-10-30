import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.props.history;
		this.state = {
			userName: "",
			pass: "",
			email: "hurojas.rios@gmail.com"
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		console.log(this.state);
		this.setState({
			[name]: value
		});
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.storeContext = store;
					this.actionsContext = actions;
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
														<input
															type="text"
															name="userName"
															onChange={this.handleInputChange}
															Placeholder="Username"
															required
														/>
													</p>
													<p>
														<span className="fa fa-lock" />
														<input
															type="password"
															name="pass"
															onChange={this.handleInputChange}
															Placeholder="Password"
															required
														/>
													</p>
													<div>
														<span>
															<input
																type="submit"
																value="Sign In"
																onClick={() => {
																	actions.saveLogin(
																		{
																			userName: this.state.userName,
																			pass: this.state.pass,
																			email: this.state.email
																		},
																		this.props.history
																	);
																}}
															/>
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
				}}
			</Context.Consumer>
		);
	}
}
Home.propTypes = {
	history: PropTypes.object
};
