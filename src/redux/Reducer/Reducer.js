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
} from "../Actions/DataTypes";

const initialState = {
	members: [],
  memberDetail: {},
	images: [],
	news: [],
  newsDetail: {},
	activities: [],
  comments: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//TRAER
		case ALL_MEMBERS:
			return {
				...state,
				members: payload,
			};
      //Aun no hay endpoint de imagenes
		case ALL_IMAGES:
			return { 
        ...state, 
        images: payload 
      };

		case ALL_NEWS:
			return { 
        ...state, 
        news: payload
      };

		// ELIMINAR Y EDITAR
		case UPDATE_MEMBER:
			return { 
        ...state 
      };
    
		case DELETE_MEMBER:
			return { ...state };

		//BUSCAR
		case SEARCH_SEARCH:
			const buscar = (name, arr) => {
				return arr.filter((e) => e.name.toLowerCase() === name.toLowerCase());
			};

			return { ...state, news: buscar(payload, state.news) }; // REVISAR QUE BUSCAMOS
		case DETAIL_NEWS:
			return {
				...state,
				detail_news: payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
