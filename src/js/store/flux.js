const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			datos: []
		},

		actions: {
			saveLogin: (data, history) => {
				const store = getStore();
				setStore({ datos: data });
				console.log(store.datos);

				fetch("https://api.reversso.cl/login", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						"X-auth": "clave123"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});
				history.push("/userAdmin");
				getActions().getDatos();
			},
			getDatos: () => {
				const store = getStore();
				fetch("https://api.reversso.cl/user", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ avisos: data }));
			},

			saveDatos: data => {
				const store = getStore();

				console.log(store.datos);

				fetch("https://api.reversso.cl/user", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {})
					.catch(error => {
						alert("no se pudo completar la operacion");
					});
			}
		}

		//reset the global store
		//setStore({ demo: demo });
	};
};

export default getState;
