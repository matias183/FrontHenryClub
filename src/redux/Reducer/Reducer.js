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
  GET_PROFILE,
  CLEAR_COMMENTS,
  ALL_EVENTO,
  DETAIL_EVENTO,
  GET_SPORT,
  GET_TEACHER,
  GET_CATEGORY,
  JWT,
  // FILTER_NEWS,
} from '../Actions/DataTypes';

const initialState = {
  members: [],
  memberDetail: {},
  images: [],
  news: [],
  newsDetail: {},
  activities: [],
  comments: [],
  contacts: [],
  evento: [],
  sport: [],
  teacher: [],
  sport: [],
  category: [],
  jwt: [],
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
        images: payload,
      };

    case ALL_NEWS:
      return {
        ...state,
        news: payload,
      };

    case ALL_COMMENTS:
      return {
        ...state,
        comments: payload,
      };

    case ALL_CONTACTS:
      return {
        ...state,
        contacts: payload,
      };
    case ALL_EVENTO:
      return {
        ...state,
        evento: payload,
      };
    case GET_SPORT:
      return {
        ...state,
        sport: payload,
      };

    case GET_TEACHER:
      return {
        ...state,
        teacher: payload,
      };

    case GET_CATEGORY:
      return {
        ...state,
        category: payload,
      };

    case JWT:
      return {
        ...state,

        jwt: payload,
      };
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
      };
    case DETAIL_EVENTO:
      return {
        ...state,
        evento: payload,
      };
    //BUSCAR
    case SEARCH_SEARCH:
      //functión para buscar en el estado
      return {
        ...state,
        news: payload,
      };

    case CLEAR_PAGE:
      return {
        ...state,
        memberDetail: {},
        newsDetail: {},
        comments: [],
      };

    //Reducers pendientes de ver si se usan

    case CLEAR_COMMENTS:
      return {
        ...state,
        comments: [],
      };

    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    //		El filtro se está haciendo desde el back
    // case FILTER_NEWS:
    // 	return{
    // 		...state,
    // 		//Asumiendo que la tabla tenga una columna sport que indique el tipo de deporte de la noticia
    // 		news: state.news.filter(news => news.sportId === payload)
    // 	}

    default:
      return state;
  }
};

export default rootReducer;
