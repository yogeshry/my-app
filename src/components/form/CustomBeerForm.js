import hbeer from "../../assets/image/hbeer.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Image from "react-bootstrap/Image";
import "../../assets/css/form/CustomBeerForm.css"

function CustomBeerForm({ show, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      {" "}
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Beer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="Card">
            {" "}
            <Image src={hbeer} className="Img" />
          </Card>

          <Form.Group className="mb-3" controlId="name">
            <Form.Control type="text" placeholder="Beer name*" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="genre">
            <Form.Control type="text" placeholder="Genre*" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description*"
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CustomBeerForm;
