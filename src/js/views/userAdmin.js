import React from "react";

import { Context } from "../store/appContext";

import "../../styles/home.scss";

export class UserAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date_event: ""
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
							<div className="container text-center">
								<div className="col -md-6">
									<div className="row">
										<div className="name">
											<div className="icon3">
												<i className="fas fa-user" />

												<h3>{store.datos.userName}</h3>
											</div>

											<div className="icon4">
												<i className="fas fa-envelope" />
												<h3>{store.datos.email}</h3>
											</div>

											<div className="icon4 ">
												<i className="fas fa-calendar-alt" />
												<h3>Fecha Nacimiento</h3>

												<input
													id="date"
													name="date_event"
													onChange={this.handleInputChange}
													type="date"
													className="form-control"
												/>
											</div>
										</div>
										<div id="login3" className="form-group ">
											<input
												type="submit"
												value="Actualizar datos"
												className="btn btn"
												onClick={() => {
													actions.saveDatos({
														date_event: this.state.date_event,
														userName: store.datos.userName,
														email: store.datos.email
													});
												}}
											/>
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
