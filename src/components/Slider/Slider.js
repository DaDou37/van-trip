import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';


function centerMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slick-slide">
          <Card className="card">
            <div className="card-title h5">Avis sur le Sud Est</div>
            <img className="card-img card_img" alt="Marseille" src="/image/marseille.jpg" />
            <p className="card-text">Bienvenu ici, je suis si heureux d'avoir pu participer à ce road trip.</p>
          </Card>
        </div>

        <div className="slick-slide">
          <Card className="card">
            <div className="card-title h5">Avis sur le Nord Est</div>
            <img className="card-img card_img" alt="Opale" src="/image/opale.jpeg" />
            <p className="card-text">Bienvenu ici, je suis si heureux d'avoir pu participer à ce road trip.</p>
          </Card>
        </div>

        <div className="slick-slide slick-active slick-center slick-current">
          <Card className="card">
            <div className="card-title h5">Avis sur le Nord Ouest</div>
            <img className="card-img card_img" alt="Bretagne" src="/image/bretagne.jpg" />
            <p className="card-text">Bienvenu ici, je suis si heureux d'avoir pu participer à ce road trip.</p>
          </Card>
        </div>

        <div className="slick-slide">
          <Card className="card">
            <div className="card-title h5">Avis sur le Sud Ouest</div>
            <img className="card-img card_img" alt="Mimizan" src="/image/mimizan.avif" />
            <p className="card-text">Bienvenu ici, je suis si heureux d'avoir pu participer à ce road trip.</p>
          </Card>
        </div>
        
        <div className="slick-slide">
          <Card className="card">
            <div className="card-title h5">Avis sur le Sud Est</div>
            <img className="card-img card_img" alt="Marseille" src="/image/marseille.jpg" />
            <p className="card-text">Bienvenu ici, je suis si heureux d'avoir pu participer à ce road trip.</p>
          </Card>
        </div>

        <div className="slick-slide">
          <Card className="card">
            <div className="card-title h5">Avis sur le Nord Est</div>
            <img className="card-img card_img" alt="Opale" src="/image/opale.jpeg" />
            <p className="card-text">Bienvenu ici, je suis si heureux d'avoir pu participer à ce road trip.</p>
          </Card>
        </div>

        <div className="slick-slide slick-center slick-cloned">
          <Card className="card">
            <div className="card-title h5">Avis sur le Nord Ouest</div>
            <img className="card-img card_img" alt="Bretagne" src="/image/bretagne.jpg" />
            <p className="card-text">Bienvenu ici, je suis si heureux d'avoir pu participer à ce road trip.</p>
          </Card>
        </div>

        <div className="slick-slide slick-cloned">
          <Card className="card">
            <div className="card-title h5">Avis sur le Sud Ouest</div>
            <img className="card-img card_img" alt="Mimizan" src="/image/mimizan.avif" />
            <p className="card-text">Bienvenu ici, je suis si heureux d'avoir pu participer à ce road trip.</p>
          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default centerMode;
