import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import './Slider.css'



function CenterMode() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
        <Card className="card"> 
             <Card.Title>Avis sur le Nord Ouest </Card.Title>
             <Card.Img className="card_img" src="/image/bretagne.jpg" width="20px" height="100px" />   
             <Card.Text>bienvenu ici, je suis si heureux d'avoir pu participer a ce road trip </Card.Text>
        </Card>
        <Card className="card"> 
             <Card.Title>Avis sur le Sud Ouest </Card.Title>
             <Card.Img className="card_img" src="/image/mimizan.avif" width="20px" height="100px" />   
             <Card.Text>bienvenu ici, je suis si heureux d'avoir pu participer a ce road trip </Card.Text>
        </Card>
        <Card className="card"> 
             <Card.Title>Avis sur le Sud Est </Card.Title>
             <Card.Img className="card_img" src="/image/marseille.jpg" width="20px" height="100px" />   
             <Card.Text>bienvenu ici, je suis si heureux d'avoir pu participer a ce road trip </Card.Text>
        </Card>
        <Card className="card"> 
             <Card.Title>Avis sur le Nord Est </Card.Title>
             <Card.Img className="card_img" src="/image/opale.jpeg" width="20px" height="100px" />   
             <Card.Text>bienvenu ici, je suis si heureux d'avoir pu participer a ce road trip </Card.Text>
        </Card>
        </Slider>
      </div>
    );
  }
  
  export default CenterMode;