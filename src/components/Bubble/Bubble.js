import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Bubble.css';

function Bubble(){
    return(
        <div className='container- fluid bubble-container'>
            <div className='my-5 text-center'> 
                <img src='/image/bubble.png' className='fluid-image' id='bubble' width="40%" />
             <h1>Ils y sont allés, ils nous en parlent </h1>
        </div>
        </div>
    )
}
export default Bubble;