const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "https://3000-ae181a3c-8a6a-4525-b8c5-d32b2883f34f.ws-us0.gitpod.io",
			token: {
				refresh: "",
				access: ""
			},
			avisos: [],
			grupos: [],
			evento: [],
			miembros: [],
			miembro: {},
			usuarios: [
				{
					userName: "danilo"
				}
			],
			password: "",
			password2: "",
			email: "",
			error: {}
		},
		actions: {
			handleChange: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value
				});
			},

			handleMiembro: e => {
				const { name, value } = e.target;
				const store = getStore();
				let miembro = store.miembro;
				miembro[name] = value;
				setStore({
					miembro
				});
			},

			handleLogin: (e, history) => {
				e.preventDefault();
				const store = getStore();
				getActions().login(store.username, store.password, history);
			},
			handleRegister: e => {
				e.preventDefault();
				const store = getStore();
				getActions().register(store.username, store.email, store.password);
			},
			handleUser: (e, history) => {
				e.preventDefault();
				getActions().putMiembro(history);
			},
			login: (username, password, history) => {
				const store = getStore();
				const data = {
					username: username,
					password: password
				};
				fetch(store.apiUrl + "/api/token/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ token: data, username: "", password: "" });

						history.push("/usuarios");
					});
			},
			register: (username, email, password) => {
				const store = getStore();
				const data = {
					username: username,
					email: email,
					password: password
				};
				fetch(store.apiUrl + "/api/registro/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({
							token: data,
							username: "",
							email: "",
							password: "",
							password2: ""
						});
						alert("ya puedes iniciar sesion");
					});
			},
			getAvisos: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/anuncios/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ avisos: data }))
					.catch(error => setStore({ error }));
			},
			getEvento: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/eventos/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ evento: data }))
					.catch(error => setStore({ error }));
			},
			getMiembros: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/miembros", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ miembros: data }));
			},
			getMiembro: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/profile/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ miembro: data });
						console.log(data);
					});
			},
			putMiembro: history => {
				const store = getStore();
				const data = store.miembro;

				fetch(store.apiUrl + "/api/profile/", {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ miembro: data });
						alert("Tus datos se actualizaron");
						history.push("/usuarios");
					});
			},
			getGrupos: () => {
				const store = getStore();
				fetch(store.apiUrl + "/api/grupos/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ grupos: data }));
			},
			SaveAviso: data => {
				const store = getStore();
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);

				fetch(store.apiUrl + "/api/anuncios/", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						getActions().getAvisos();
					});

				//reset the global store
				//setStore({ demo: demo });
			},
			SaveEvento: data => {
				const store = getStore();
				if (data != "") {
				} else {
					alert("INGRESA DATOS");
				}
				console.log(data);
				let url = store.apiUrl + "/api/eventos/";

				fetch(url, {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						Authorization: "Bearer " + getStore().token.access,
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						getActions().getEvento();
					});

				//reset the global store
				//setStore({ demo: demo });
			}
		}
	};
};

export default getState;
