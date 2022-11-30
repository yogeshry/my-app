import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hbeer from "../../hbeer.png";
import React from "react";
import Tooltip from "../tooltip/Tooltip";
import { truncate } from "../../utils";
import { ChevronDown } from "react-feather";

import "../../assets/css/list/BeerList.css";

function BeerList({ beerList, isCompleted = true, loadMore }) {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {beerList.map((beer, idx) => (
          <Col key={idx}>
            <Card className="ProductCard">
              <Tooltip
                content={
                  "Ingredients: " + Object.keys(beer.ingredients).join(", ")
                }
                direction="top"
              >
                <div className="ImageWrapper">
                  <Card.Img className="Image" src={beer.image_url || hbeer} />
                </div>
              </Tooltip>
              <Card.Body className="text-start">
                <Card.Title>{beer.name}</Card.Title>
                <Card.Subtitle className="Subtitle">
                  {beer.tagline}
                </Card.Subtitle>
                <Card.Text>{truncate(beer.description, 80)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {isCompleted ? (
        <></>
      ) : (
        <span onClick={loadMore} type="button" className="LoadMore">
          Load More <ChevronDown />
        </span>
      )}
    </>
  );
}

export default BeerList;
