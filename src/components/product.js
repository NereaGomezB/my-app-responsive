import React, { Component } from 'react'
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import Product1Image from '../img/iphone-silver.png';
import Product2Image from '../img/iphone8-gold.png';

class products extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            products:  [
            {
                image: Product1Image,
                title: 'Product 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                model: [ 
                    {
                        id: 1,
                        color: '#b3b6b6'
                    },
                    {
                        id: 2,
                        color: '#ddc3b1'
                    }
                ]
            }, 
            {
                image: Product2Image,
                title: 'Product 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                model: [ 
                    {
                        id: 3,
                        color: '#ddc3b1'
                    },
                    {
                        id: 4,
                        color: '#b3b6b6'
                    }
                ]
            }
        ],
    };
}

onColorChange (id) {
    this.setState({ activeColor: id });
}

render() {
  return (
    <>
    <Container className="pb-5">
        <Row>
            <h3 className="p-3">Featured Products</h3>
            <Col xs={12}>
                <CardDeck className="pb-5">
                {this.state.products.map((product, index) => (
                    <Card key={index}>
                        <Card.Body>
                            <Row>
                                <Col xs={6}> 
                                    <Card.Img key={index} variant="top" src={product.image}/>
                                </Col>
                                <Col xs={6}>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <div>Color:
                                    {product.model.map((color, i) => (
                                        <span 
                                            key={i} 
                                            className={'color-circle ml-1' + (color.id === this.state.activeColor ? " selected" : "")}
                                            onClick={e => this.onColorChange(color.id)}
                                            style={{backgroundColor: color.color }}/>
                                        ))}
                                   
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    )
                )}
                </CardDeck>
            </Col>
        </Row>
    </Container>    
    </>
    )}
}
export default products;

