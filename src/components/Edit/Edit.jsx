import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { videosContext } from "../../contexts/videosContext";
import Loading from "../Loading/Loading";
const Edit = () => {
  const [edited, setEdited] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { getEdit, updateEditMovie, edit } = useContext(videosContext);
  useEffect(() => {
    getEdit(params.id);
  }, []);
  useEffect(() => {
    setEdited(edit);
  }, [edit]);
  function handleValues(e) {
    let editedMovie = {
      ...edited,
      [e.target.name]: e.target.value,
    };
    setEdited(editedMovie);
  }
  function checkValues() {
    if (
      !edited.title ||
      !edited.description ||
      !edited.imageDescription1 ||
      !edited.imageDescription2 ||
      !edited.imageDescription3 ||
      !edited.imageTitle ||
      !edited.genre
    ) {
      alert("Заполните поля!");
      return;
    }
    updateEditMovie(params.id, edited);
    navigate('/movies')
  }
  return edited ? (
    <div className="container d-flex flex-column align-items-center">
      <input
        value={edited.title}
        type="text"
        className="m-1 col-4"
        name="title"
        onChange={handleValues}
        placeholder="Title"
      />
      <input
        value={edited.genre}
        type="text"
        className="m-1 col-4"
        name="genre"
        onChange={handleValues}
        placeholder="Genre"
      />
      <input
        value={edited.imageTitle}
        type="text"
        className="m-1 col-4"
        name="imageTitle"
        onChange={handleValues}
        placeholder="Image for title"
      />
      <input
        value={edited.imageDescription1}
        type="text"
        className="m-1 col-4"
        name="imageDescription1"
        onChange={handleValues}
        placeholder="Image for description"
      />
      <input
        value={edited.imageDescription2}
        type="text"
        className="m-1 col-4"
        name="imageDescription2"
        onChange={handleValues}
        placeholder="Image for description"
      />
      <input
        value={edited.imageDescription3}
        type="text"
        className="m-1 col-4"
        name="imageDescription3"
        onChange={handleValues}
        placeholder="Image for description"
      />
      <input
        value={edited.description}
        type="text"
        className="m-1 col-4"
        name="description"
        onChange={handleValues}
        placeholder="Description"
      />
      <button onClick={() => checkValues()} className="btn btn-success col-4">
        Save
      </button>
    </div>
  ) : (
    <Loading />
  );
};

export default Edit;
