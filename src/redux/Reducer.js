
import {
  ALL_MEMBERS, ALL_IMAGES,ALL_NEWS,SEARCH_SEARCH, DETAIL_NEWS,PUT_MEMBER,DELETE_MEMBER
} from "./DataTypes";


const initialState = {
members:[
  {
    name: "Jon",
    surname: "Snow",
    dni: 21361313235,
  },
  {
    name: "Jamie ",
    surname: "Lannister",
    dni: 22361313235,
  },

],
images:[],
news:[],
activities:[],
detail_news: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //TRAER
    case ALL_MEMBERS:
      return { ...state, 
        members: action.payload,
      }
    case ALL_IMAGES:
      return { ...state, images: action.payload };
      
    case ALL_NEWS:
      return { ...state, news: action.payload };

    // ELIMINAR Y EDITAR
    case PUT_MEMBER:
      return { ...state, };
      case DELETE_MEMBER:
      return { ...state,};

    //BUSCAR
    case SEARCH_SEARCH:
      const buscar = (name, arr) => {
        return arr.filter((e) => e.name.toLowerCase() === name.toLowerCase());}

        return { ...state,
           news: buscar(action.payload, state.news)}; // REVISAR QUE BUSCAMOS
    case DETAIL_NEWS:
      return {
        ...state,
        detail_news: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
