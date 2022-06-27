import axios from "axios";
import {
	ALL_MEMBERS,
	ALL_IMAGES,
	ALL_NEWS,
	DETAIL_NEWS,
	DETAIL_MEMBER,
	ALL_COMMENTS,
	ALL_CONTACTS,
	UPDATE_NEWS,
	UPDATE_COMMENT,
	UPDATE_MEMBER,
	DELETE_MEMBER,
	DELETE_NEWS,
	DELETE_COMMENT,
	SEARCH_SEARCH,
	CLEAR_PAGE,
	FILTER_NEWS,
	CLEAR_COMMENTS,
	DETAIL_EVENTO,
	ALL_EVENTO,
	GET_SPORT,
	GET_PROFILE,
	GET_CATEGORY,
  GET_TEACHER,
} from "./DataTypes";

//Get

export function getMembers() {
	return async (dispatch) => {
		try {
			let { data } = await axios.get("http://localhost:3001/user");
			return dispatch({ type: ALL_MEMBERS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function getContacts() {
	return async (dispatch) => {
		try {
			let { data } = await axios.get("http://localhost:3001/contact");
			return dispatch({ type: ALL_CONTACTS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function getGallery() {
	return async (dispatch) => {
		try {
			let { data } = await axios.get("Ruta para imagenes");
			return dispatch({ type: ALL_IMAGES, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function getNews() {
	return async (dispatch) => {
		try {
			let { data } = await axios.get("http://localhost:3001/news");
			return dispatch({ type: ALL_NEWS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function getComments(id) {
	return async (dispatch) => {
		try {
			let { data } = await axios.get(`http://localhost:3001/comment/${id}`);
			if (data) return dispatch({ type: ALL_COMMENTS, payload: data });
			//Necesitamos que si no encuentra ningun comentario que el back regrese un array vacío
			// else return dispatch({type:ALL_COMMENTS, payload:[]})
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function getEvents() {
	return async (dispatch) => {
		try {
			let { data } = await axios.get("http://localhost:3001/calendar");
			return dispatch({
				type: ALL_EVENTO,
				payload: data,
			});
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function getSport() {
	return async function (dispatch) {
		const { data } = await axios.get("http://localhost:3001/sport");
		return dispatch({
			type: GET_SPORT,
			payload: data,
		});
	};
}

export function getTeacher() {
	return async function (dispatch) {
		const { data } = await axios.get("http://localhost:3001/teacher");
		return dispatch({
			type: GET_TEACHER,
			payload: data,
		});
	};
}

export function getCategory() {
	return async function (dispatch) {
		const { data } = await axios.get("http://localhost:3001/category");
		return dispatch({
			type: GET_CATEGORY,
			payload: data,
		});
	};
}

//
export function loginMember(input) {
	return async function () {
		try {
			const { data } = await axios.post("ruta crear usuario", input);
			return data;
		} catch (error) {
			alert(error.response.data);
		}
	};
}

//Detail

export function detailMember(id) {
	return async (dispatch) => {
		try {
			let { data } = await axios.get(`http://localhost:3001/user/${id}`);
			return dispatch({ type: DETAIL_MEMBER, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function detailNews(id) {
	return async function (dispatch) {
		try {
			const { data } = await axios.get(`http://localhost:3001/news/${id}`);
			dispatch({
				type: DETAIL_NEWS,
				payload: data,
			});
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function detailEvento(id) {
	return async function (dispatch) {
		try {
			const json = await axios.get(`http://localhost:3001/calendar/${id}`);
			dispatch({
				type: DETAIL_EVENTO,
				payload: json.data,
			});
		} catch (error) {
			alert(error.response.data);
		}
	};
}

//Post
export function createNews(input) {
	return async function () {
		try {
			const { data } = await axios.post(
				"http://localhost:3001/news/crear",
				input
			);
			return data;
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function createActivity(input) {
	return async function () {
		try {
			const { data } = await axios.post("ruta crear actividad", input);
			return data;
		} catch (error) {
			alert(error.response.data);
		}
	};
}
export function createMember(input) {
	return async () => {
		try {
			let { data } = await axios.post("http://localhost:3001/user", input);
			//Despachar accion o regresar mensaje?
			// return dispatch({type: })
			return data;
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function createComment(idNews, input) {
	return async (dispatch) => {
		try {
			await axios.post(
				`http://localhost:3001/comment/comentar/${idNews}`,
				input
			);

			// let {data} = await axios.get("http://localhost:3001/user")

			// return dispatch({type:ALL_COMMENTS,payload:data});
			return;
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function createContact(input) {
	return async () => {
		try {
			let { data } = await axios.post("http://localhost:3001/contact", input);
			return data;
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function postEvento(payload) {
	return async function () {
		const json = await axios.post("http://localhost:3001/calendar", payload);
		return json;
	};
}

//PUT
export function updateNews(id, input) {
	return async (dispatch) => {
		try {
			let { data } = await axios.put(`http://localhost:3001/news/${id}`, input);
			return dispatch({ type: UPDATE_NEWS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function updateComment(id, input) {
	return async (dispatch) => {
		try {
			let { data } = await axios.put(
				`http://localhost:3001/comment/${id}`,
				input
			);
			return dispatch({ type: UPDATE_COMMENT, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function updateMember(id, input) {
	return async (dispatch) => {
		try {
			let { data } = await axios.put(`http://localhost:3001/user/${id}`, input);
			return dispatch({ type: UPDATE_MEMBER, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

//DELETE
export function deleteNews(id) {
	return async (dispatch) => {
		try {
			let { data } = await axios.delete(`http://localhost:3001/news/${id}`);
			return dispatch({ type: DELETE_NEWS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function deleteComment(id) {
	return async (dispatch) => {
		try {
			let { data } = await axios.delete(`http://localhost:3001/comment/${id}`);
			return dispatch({ type: DELETE_COMMENT, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function deleteMember(id) {
	return async (dispatch) => {
		try {
			let { data } = await axios.delete(`http://localhost:3001/user/${id}`);
			return dispatch({ type: DELETE_MEMBER, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}
//Perfil
export function GetProfile(id) {
	return async function (dispatch) {
		try {
			const { data } = await axios.get(
				"http://localhost:3001/profile/:id"
			); /*"http://localhost:3001/profile/" + id lo puse asi para probar como se ve, para que funcione poner el codigo comentado*/
			return dispatch({
				type: "GET_PROFILE",
				payload: data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Buscar
export function search(name) {
	return {
		type: SEARCH_SEARCH,
		payload: name,
	};
}

//Filtrar noticias
export function filterNews(name) {
	return async (dispatch) => {
		let { data } = await axios.get(`http://localhost:3001/news?title=${name}`);
		return dispatch({ type: SEARCH_SEARCH, payload: data });
	};
}

//Limpiar estado de comentarios (Decidir si usamos un clear para cada estado o uno general para todos los estados de detalles)
export function clearComments() {
	return { type: CLEAR_COMMENTS };
}

//Limpiar estado
export const clearPage = () => {
	return {
		type: CLEAR_PAGE,
	};
};
