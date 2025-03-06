import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";

export default function FormDataDiri() {
  const [npm, setNpm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{9}$/.test(npm)) {
      alert("NPM Harus 9 Digit");
      return;
    }

    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const sumAge = currentYear - birthYear;
    setAge(sumAge);

    setShow(true);
  };

  return (
    /*Formulir*/
    <div className="container mt-2">
      <Form className="border border-dark p-3" onSubmit={handleSubmit}>
        <h1 className="mb-3">Form Data Diri</h1>
        <Row className="mb-3 text-start">
          <label className="form-label">NPM</label>
          <Form.Group as={Col}>
            <input
              type="text"
              placeholder="NPM"
              className="form-control"
              required
              onChange={(e) => {
                setNpm(e.target.value);
              }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3 text-start">
          <label className="form-label">Full Name</label>
          <Form.Group as={Col} className="col-md-4">
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} className="col-md-4">
            <input
              type="text"
              placeholder="Middle Name"
              className="form-control"
              onChange={(e) => {
                setMiddleName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} className="col-md-4">
            <input
              type="text"
              placeholder="Last Name"
              required
              className="form-control"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3 text-start">
          <label className="form-label">Birth Date</label>
          <Form.Group as={Col} className="mb-3">
            <input
              type="date"
              className="form-control"
              required
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
            />
          </Form.Group>
        </Row>
        <Button type="submit" className="w-100">
          Submit
        </Button>
      </Form>

      <Modal show={show} backdrop="static" onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Form Data Diri</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NPM: {npm}</p>
          <p>
            Fullname: {firstName} {middleName} {lastName}
          </p>
          <p>Age: {age}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    /*Batas Formulir*/
  );
}
