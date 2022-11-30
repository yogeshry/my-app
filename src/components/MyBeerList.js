import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import CustomBeerForm from "./form/CustomBeerForm";
import BeerList from "./list/BeerList";
import "../assets/css/MyBeerList.css";

function MyBeerList() {
  const [show, setShow] = useState(false);
  const beerList = JSON.parse(localStorage.getItem("myBeerList")) || [];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(
      "myBeerList",
      JSON.stringify([
        {
          name: event.target[1].value,
          tagline: event.target[2].value,
          description: event.target[3].value,
          ingredients: { "Custom Ingredients": [] },
        },
        ...beerList,
      ])
    );
    handleClose();
    alert("New Custom Beer added !");
  };

  return (
    <>
      {beerList.length < 1 ? (
        <div className="EmptyPage">
          <p>Nothing to see yet.</p>
          <p>
            <span className="Link" onClick={handleShow}>
              Click here
            </span>{" "}
            to add your first beer!
          </p>
        </div>
      ) : (
        <>
          <div className="AddNewButton">
            <Button variant="primary" onClick={handleShow}>
              Add a new beer
            </Button>{" "}
          </div>
          <BeerList beerList={beerList} />
        </>
      )}
      <CustomBeerForm
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default MyBeerList;
