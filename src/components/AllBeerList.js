import React, { useState, useEffect } from "react";
import BeerList from "./list/BeerList";
import axios from "axios";

function AllBeerList() {
  const [allbeers, setAllbeers] = useState([]);
  const [page, setPage] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
      .then((res) => {
        res.data
          ? setAllbeers(prevState => [...prevState, ...res.data])          
          : setIsCompleted(true);
      })
      .catch((err) => {
        console.log("err");
      });
  }, [page]);

  return (
    <BeerList
      beerList={allbeers}
      isCompleted={isCompleted}
      loadMore={loadMore}
    />
  );
}

export default AllBeerList;
