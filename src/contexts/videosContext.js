import React, { useReducer } from "react";
import axios from "axios";
export const videosContext = React.createContext(); //создаем контекст
const API = "http://localhost:8000/movies";

const INIT_STATE = {
  videos: [],
  details: null,
  edit: null,
  pages: 0
  //здесь пишем начальное значение
};
const reducer = (state = INIT_STATE, action) => {
  // создаем кейсы
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        videos: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 2)
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload.data,
      };
      case "GET_EDIT":
        return {
          ...state,
          edit: action.payload.data,
        };
    default:
      return state;
  }
};
const VideosСontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // получаем dispatch, чтоб менять state
  const createVideo = async (newVideo) => {
    await axios.post(API, newVideo);
    getVideos();
  };
  // пишем функции (пример выше)
  async function getVideos() {
    let res = await axios.get(`${API}${window.location.search}`);
    console.log(res);
    dispatch({
      type: "GET_VIDEOS",
      payload: res,
    });
  }
  async function getDetails(id) {
    let res = await axios.get(`${API}/${id}`);
    console.log(res);
    dispatch({
      type: "GET_DETAILS",
      payload: res
    })
  }
  async function getEdit (id){
    let result = await axios.get(`${API}/${id}`)
    dispatch({
      type: "GET_EDIT",
      payload: result
    })
  }
  async function updateEditMovie (id, editedProduct){
    await axios.patch(`${API}/${id}`, editedProduct)
    getVideos()
  }
  async function deleteMovie (id){
    await axios.delete(`${API}/${id}`)
    getVideos()
  }
  return (
    <videosContext.Provider
      value={{
        videos: state.videos,
        details: state.details,
        edit: state.edit,
        pages: state.pages,
        //  передаем под ключом videos измененный INIT_STATE.videos
        getVideos,
        createVideo,
        getDetails,
        deleteMovie,
        updateEditMovie,
        getEdit
        // передаем функции
      }}
    >
      {children}
    </videosContext.Provider>
  );
};
export default VideosСontextProvider;