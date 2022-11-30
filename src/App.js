import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyBeerList from "./components/MyBeerList";
import AllBeerList from "./components/AllBeerList";
import { Container } from "react-bootstrap";

function App() {
  const [key, setKey] = useState("allbeer");

  return (
    <div className="App">
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="allbeer" title="All Beers">
            <AllBeerList />
          </Tab>
          <Tab eventKey="mybeer" title="My Beers">
            <MyBeerList />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
