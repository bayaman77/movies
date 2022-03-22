import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { videosContext } from "../../contexts/videosContext";

const Add = () => {
  const navigate = useNavigate()
  const [newProduct, setNewProduct] = useState({
    title: "",
    genre: "",
    description: "",
    imageDescription1: "",
    imageDescription2: "",
    imageDescription3: "",
    imageTitle: "",
  });
  const { createVideo } = useContext(videosContext);
  function handleValues(e) {
    let values = {
      ...newProduct,
      [e.target.name]: e.target.value,
    };
    setNewProduct(values);
    console.log(values);
  }
  function checkValues() {
    if (
      !newProduct.title ||
      !newProduct.description ||
      !newProduct.genre ||
      !newProduct.imageDescription1 ||
      !newProduct.imageDescription2 ||
      !newProduct.imageDescription3 ||
      !newProduct.imageTitle
    ) {
      alert("Заполните поля!");
      return;
    } else {
      createVideo(newProduct);
      navigate('/movies')
    }
  }
  return (
    <div className="container d-flex flex-column align-items-center">
      <input
        value={newProduct.title}
        type="text"
        className="m-1 col-4"
        name="title"
        onChange={handleValues}
        placeholder="Title"
      />
      <input
        value={newProduct.genre}
        type="text"
        className="m-1 col-4"
        name="genre"
        onChange={handleValues}
        placeholder="Genre"
      />
      <input
        value={newProduct.imageTitle}
        type="text"
        className="m-1 col-4"
        name="imageTitle"
        onChange={handleValues}
        placeholder="Image for title"
      />
      <input
        value={newProduct.imageDescription1}
        type="text"
        className="m-1 col-4"
        name="imageDescription1"
        onChange={handleValues}
        placeholder="Image for description"
      />
      <input
        value={newProduct.imageDescription2}
        type="text"
        className="m-1 col-4"
        name="imageDescription2"
        onChange={handleValues}
        placeholder="Image for description"
      />
      <input
        value={newProduct.imageDescription3}
        type="text"
        className="m-1 col-4"
        name="imageDescription3"
        onChange={handleValues}
        placeholder="Image for description"
      />
      <input
        value={newProduct.description}
        type="text"
        className="m-1 col-4"
        name="description"
        onChange={handleValues}
        placeholder="Description"
      />
      
        <button
          onClick={() => checkValues(newProduct)}
          className="btn btn-success col-4"
        >
          Add
        </button>
      
    </div>
  );
};

export default Add;
