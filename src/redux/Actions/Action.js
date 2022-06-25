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
export function loginMember(input) {
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
export function createNews(input) {
	return async function () {
		const { data } = await axios.post(
			"http://localhost:3001/news/crear",
			input
		);
		return data;
	};
}

export function createActivity(input) {
	return async function () {
		const { data } = await axios.post("ruta crear actividad", input);
		return data;
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
export function updateNews(id,input) {
	return async (dispatch) => {
		try {
			let { data } = axios.put(`http://localhost:3001/news/${id}`, input);
			return dispatch({ type: UPDATE_NEWS, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function updateComment(id,input) {
	return async (dispatch) => {
		try {
			let { data } = axios.put(`http://localhost:3001/comment/${id}`, input);
			return dispatch({ type: UPDATE_COMMENT, payload: data });
		} catch (error) {
			alert(error.response.data);
		}
	};
}

export function updateMember(id,input) {
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
//Perfil
export function GetProfile(id){
	return async function (dispatch) {
	  try {
		const json = await axios.get("http://localhost:3001/profile/:id"); /*"http://localhost:3001/profile/" + id lo puse asi para probar como se ve, para que funcione poner el codigo comentado*/  
		return dispatch({
		  type: "GET_PROFILE",
		  payload: json.data,
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
};

//Filtrar noticias
export function filterNews(name){
	return {type: FILTER_NEWS, payload: name}
}

//Limpiar estado
export const clearPage = () => {
	return {
		type: CLEAR_PAGE,
	};
};
