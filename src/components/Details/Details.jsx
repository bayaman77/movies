import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { videosContext } from "../../contexts/videosContext";
import Loading from "../Loading/Loading";
import "./Details.css"

const Details = () => {
  const params = useParams();
  // console.log(params)
  const { getDetails, details } = useContext(videosContext);
  useEffect(() => {
    getDetails(params.id);
  }, []);
  console.log("details", details);
  return (
    <div className="container text-center">
      {details ? (
        <div>
          <h3>{details.title}</h3>
          <h4>{details.genre}</h4>
          <div className="images">
            <img className="m-1 img" src={details.imageDescription1} alt="" />
            <img className="m-1 img" src={details.imageDescription2} alt="" />
            <img className="m-1 img" src={details.imageDescription3} alt="" />
          </div>
          <h5>Описание</h5>
          <div>{details.description}</div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Details;
