import {
	ALL_MEMBERS,
	ALL_IMAGES,
	ALL_NEWS,
	SEARCH_SEARCH,
	DETAIL_NEWS,
	DETAIL_MEMBER,
	ALL_COMMENTS,
	ALL_CONTACTS,
	// UPDATE_NEWS,
	// UPDATE_COMMENT,
	// UPDATE_MEMBER,
	// DELETE_MEMBER,
	// DELETE_NEWS,
	// DELETE_COMMENT,
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
	contacts: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//GET
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

		case ALL_COMMENTS:
			return {
				...state,
				comments: payload
			}

		case ALL_CONTACTS:
			return {
				...state,
				contacts: payload
			}

		// ELIMINAR Y EDITAR
		// case UPDATE_MEMBER:
		// 	return { 
    //     ...state,
		// 		memberDetail: {}
    //   };
    
		// case DELETE_MEMBER:
		// 	return { 
		// 		...state
		// 		members: state.members.filter(member => member.id ===)
		// 	};
		
		//DETALLES
		case DETAIL_NEWS:
			return {
				...state,
				newsDetail: payload,
			};

		case DETAIL_MEMBER:
			return {
				...state,
				memberDetail: payload,
			}
			
			//BUSCAR
			case SEARCH_SEARCH:
				//functión para buscar en el estado
				const buscar = (name, arr) => {
					return arr.filter((e) => e.title.toLowerCase() === name.toLowerCase());
				};
				return { ...state, news: buscar(payload, state.news) }; // REVISAR QUE BUSCAMOS

			case FILTER_NEWS:
				return{
					...state,
					//Asumiendo que la tabla tenga una columna sport que indique el tipo de deporte de la noticia
					news: state.news.filter(news => news.sport === payload)
				}
			
			case CLEAR_PAGE: 
			return {
				...state,
				memberDetail: {},
				newsDetail: {},
			}

			default:
			return state;
	}
};

export default rootReducer;
