import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-10"
            />
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Header;
