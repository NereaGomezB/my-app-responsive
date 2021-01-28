import React, { Component } from 'react'
import DesktopImg from "../img/Imagen_Desktop.png"
import MobileImg from "../img/Imagen_Mobile.png"
import { Card } from 'react-bootstrap'

 export default class container extends Component {

    render() {
        return (
            <>
            <Card className="bg-dark text-white">
                <img src={MobileImg} alt="mobile_image" className="d-lg-none d-xl-none"/>
                <img src={DesktopImg} alt="desktop_image" className="d-none d-md-block"/>
                <Card.ImgOverlay className="p-5">
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>Dolor sit amet consec tetur adipiscing elit</Card.Text>
                </Card.ImgOverlay>
            </Card>            
        </>
        )
    }
}
 
