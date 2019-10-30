const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			datos: []
		},

		actions: {
			saveLogin: data => {
				const store = getStore();
				setStore({ datos: data });
				console.log(store.datos);

				fetch("https://jsonplaceholder.typicode.com/posts/1", {
					method: "Post",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {});
			},
			getDatos: () => {
				const store = getStore();
				fetch("https://api.reversso.cl/user", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.token.access
					}
				})
					.then(resp => resp.json())
					.then(data => setStore({ avisos: data }))
					.catch(error => setStore({ error }));
			}
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
				.then(resp => {});
			alert("no se pudo completar la operacion");
		}

		//reset the global store
		//setStore({ demo: demo });
	};
};

export default getState;
