import { Container, Row, Col } from 'react-bootstrap';
import ContainerApp from '../components/container'
import ProductList from '../components/product'

function Home() {
  return (
    <>
      <Container>
          <Row>
          <Col xs={12} md={12} className="p-0">
            <ContainerApp></ContainerApp>
            <ProductList></ProductList>
            </Col>
          </Row>
      </Container>
    </>
  );
}

export default Home;