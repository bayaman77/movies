import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { videosContext } from "../../contexts/videosContext";
import "./Card.css";

const Card = ({ item }) => {
  // console.log(props);
  const { deleteMovie } = useContext(videosContext);
  console.log(deleteMovie);
  return (
    <div className="m-4 text-center">
      <img className="card-image" src={item.imageTitle} alt="" />
      <Link to={`/movies/${item.id}`}>
        <div className="card-title">{item.title}</div>
      </Link>
      <img
        style={{ cursor: "pointer" }}
        onClick={() => deleteMovie(item.id)}
        width="20px"
        src="https://icons-for-free.com/iconfiles/png/512/delete+24px-131985190578721347.png"
        alt="delete icon"
      />
      <Link to={`/edit/${item.id}`}>
        <img
          style={{ cursor: "pointer" }}
          width="20px"
          src="https://cdn.iconscout.com/icon/free/png-256/edit-2653317-2202989.png"
          alt="edit icon"
        />
      </Link>
    </div>
  );
};

export default Card;
