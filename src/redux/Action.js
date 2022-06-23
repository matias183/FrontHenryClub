import axios from "axios";
import {
	ALL_MEMBERS,
	ALL_IMAGES,
	ALL_NEWS,
	SEARCH_SEARCH,
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
	CLEAR_PAGE,
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
		let { data } = await axios.get("http://localhost:3001/contact");
		return dispatch({ type: ALL_CONTACTS, payload: data });
	};
}

export function getGalery() {
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
			let { data } = axios.get("http://localhost:3001/news");
			return dispatch({ type: ALL_NEWS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function getComments() {
	return async (dispatch) => {
		try {
			let { data } = axios.get("http://localhost:3001/comment");
			return dispatch({ type: ALL_COMMENTS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

//
export function Loginmember(input) {
	return async function () {
		const res = await axios.post("ruta crear usuario", input);
		return res.data;
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
		const json = await axios.get(`http://localhost:3001/news/${id}`);
		dispatch({
			type: DETAIL_NEWS,
			payload: json.data,
		});
	};
}


//Post
export function CreateNews(input) {
	return async function () {
		const { data } = await axios.post(
			"http://localhost:3001/news/crear",
			input
		);
		return data;
	};
}

export function CreateActivity(input) {
	return async function () {
		const { data } = await axios.post("ruta crear actividad", input);
		return data;
	};
}
export function CreateMember(input) {
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

export function createComment(input) {
	return async () => {
		try {
			let { data } = await axios.post(
				"http://localhost:3001/comment/comentar",
				input
			);
			return data;
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

//PUT
export function updateNews(input) {
	return async (dispatch) => {
		try {
			let { data } = axios.put(`http://localhost:3001/news/${id}`, input);
			return dispatch({ type: UPDATE_NEWS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function updateComment(input) {
	return async (dispatch) => {
		try {
			let { data } = axios.put(`http://localhost:3001/comment/${ID}`);
			return dispatch({ type: UPDATE_COMMENT, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function updateMember(input) {
	return async (dispatch) => {
		try {
			let { data } = axios.put(`http://localhost:3001/user/${id}`, input);
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
			let { data } = axios.delete(`http://localhost:3001/news/${id}`);
			return dispatch({ type: DELETE_NEWS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function deleteComment(id) {
	return async (dispatch) => {
		try {
			let { data } = axios.delete(`http://localhost:3001/comment/${id}`);
			return dispatch({ type: DELETE_COMMENT, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function deleteMember(id) {
	return async (dispatch) => {
		try {
			let { data } = axios.delete(`http://localhost:3001/user/${id}`);
			return dispatch({ type: DELETE_MEMBER, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

//Buscar ???
export const search = (name) => {
	return {
		type: SEARCH_SEARCH,
		payload: name,
	};
};

//Limpiar estado
export const clearPage = () => {
	return {
		type: CLEAR_PAGE,
	};
};
