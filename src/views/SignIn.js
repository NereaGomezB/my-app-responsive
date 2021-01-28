import { Row, Col, Container } from 'react-bootstrap';
import Login from "../components/login";
import Breadcrumb from "../components/breadcrumb";

function Signin() {
  return (
    <>
    <Container>
      <Row  className="justify-content-md-center">
        <Col xs={12} md={4}>
          <Breadcrumb />
          <h3 className="font-weight-bold pb-2">Sign in</h3>
          <Login/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Signin;


