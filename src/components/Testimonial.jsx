import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'
import { Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Card from './Card'


const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "black", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "black", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div className="test" style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>

      <div style={{ width: '50%' }}>
        <Slider
          prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots >


          <Card src img="https://i.postimg.cc/RVhZ24t8/img1.jpg" />
          <Card src img="https://i.postimg.cc/3R93bcxY/img2.jpg" />
          <Card src img="https://i.postimg.cc/5NQMw0Lx/img4.jpg" />

        </Slider>
        <div style={{ textAlign: "center", color: "grey", marginTop: 50 }}>
          <h1>TESTIMONIALS</h1>

        </div>

      </div>
    </div>
  )
};


export default Testimonial;


