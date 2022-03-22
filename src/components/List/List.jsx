import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { videosContext } from "../../contexts/videosContext";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";

const List = () => {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const { getVideos, videos, pages } = useContext(videosContext);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getVideos();
    setSearchParams({
      q: search,
      _page: activePage,
      _limit: 2,
    });
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: activePage,
      _limit: 2,
    });
  }, [search]);
  useEffect(() => {
    getVideos();
    setSearchParams({
      q: search,
      _page: activePage,
      _limit: 2,
    });
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: activePage,
      _limit: 2,
    });
  }, [activePage]);
  // console.log("from list", videos);
  console.log("from window", window.location.search);
  return (
    <div className="d-flex flex-column align-items-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <div className="d-flex justify-content-center flex-wrap">
        {videos.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Paginate
        activePage={activePage}
        setActivePage={setActivePage}
        pages={pages}
      />
    </div>
  );
};

export default List;