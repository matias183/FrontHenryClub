
import {
  ALL_MEMBERS, ALL_IMAGES,ALL_NEWS,SEARCH_SEARCH,
} from "./DataTypes";


const initialState = {
members:[],
images:[],
news:[],
activities:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_MEMBERS:
      return { ...state, 
        members: action.payload,
      }
    case ALL_IMAGES:
      return { ...state, images: action.payload };
      
    case ALL_NEWS:
      return { ...state, news: action.payload };

    case SEARCH_SEARCH:
      const buscar = (name, arr) => {
        return arr.filter((e) => e.name.toLowerCase() === name.toLowerCase());}

        return { ...state,
           news: buscar(action.payload, state.news)}; // REVISAR QUE BUSCAMOS
      
    default:
      return state;
  }
};

export default rootReducer;
