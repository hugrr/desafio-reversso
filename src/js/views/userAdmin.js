import React from "react";

import { Context } from "../store/appContext";

import "../../styles/home.scss";

export class UserAdmin extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.storeContext = store;
					this.actionsContext = actions;
					return (
						<div className="main">
							<div className="container text-center">
								<div className="col -md-6">
									<div clasName="row">
										<div className="name">
											<div className="icon3">
												<i className="fas fa-user" />
												<h3>Hugo Rojas</h3>
											</div>

											<div className="icon4">
												<i className="fas fa-envelope" />
												<h3>Hurojas.rios@gmail.com</h3>
											</div>

											<div className="icon4 ">
												<i className="fas fa-calendar-alt" />
												<h3>Fecha Nacimiento</h3>

												<input
													id="date"
													name="date_event"
													type="date"
													className="form-control"
												/>
											</div>
										</div>
										<div id="login3" className="form-group ">
											<input type="submit" value="Actualizar datos" className="btn btn" />
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
