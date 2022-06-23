import axios from "axios";
import {
    ALL_MEMBERS, ALL_IMAGES,ALL_NEWS,SEARCH_SEARCH, DETAIL_NEWS,PUT_MEMBER,DELETE_MEMBER
  } from "./DataTypes";

//traer

export function getMembers() {
    return async function (dispatch) {
      let res = await axios(`http://localhost:3001/user`);
      return dispatch({
        type: ALL_MEMBERS,
        payload: res.data,
      });
    };
  }


export function getGalery() {
    return async function (dispatch) {
      let res = await axios(`traer fotos de galeria`);
      return dispatch({
        type: ALL_IMAGES,
        payload: res.data,
      });
    };
  }
  
export function getNews() {
  return async function (dispatch) {
    let res = await axios(`http://localhost:3001/news`);
    return dispatch({
      type: ALL_NEWS,
      payload: res.data,
    });
  };
}


//buscar
export const search = (name) => {
  return {
    type: SEARCH_SEARCH,
    payload: name,
  };
};  

//delete - update members
export function deleteMember(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/user/${id}`);
      return dispatch({ type: DELETE_MEMBER,});
    } catch (error) {
      console.log(error);
    }
  };
}

export const updateMember = (id, input) => {
  return async function (dispatch) {
    await axios.put(`http://localhost:3001/user/${id}`, input);
    return dispatch({
      type: PUT_MEMBER,
    });
  };
};


//crear 
export function CreateNews(input) {
    return async function () {
      const res = await axios.post("ruta crear anuncio",input);
      return res.data;
    };
  }

  export function CreateActivity(input) {
    return async function () {
      const res = await axios.post("ruta crear antividad",input);
      return res.data;
    };
  }
  export function CreateMember(input) {
    return async function () {
      const res = await axios.post("ruta crear usuario",input);
      return res.data;
    };
  }

  export function Loginmember (input) {
    return async function () {
      const res = await axios.post("ruta crear usuario",input);
      return res.data;
    };
  }

//detalle

export function DetailNews (id) {
  return async function(dispatch) {
    const json = await axios.get(`http://localhost:3001/news/${id}`)
    dispatch({
      type: DETAIL_NEWS,
      payload: json.data
    })
  }
}