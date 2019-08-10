import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Home.css';

const slideImages = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.png'
];
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    
}

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div className="each-slide-1">
                        <img src={require(`${slideImages[0]}`)}/>
                        
                    </div>
                </div>
                <div className="each-slide">
                    <div className="each-slide-1">
                        <img src={require(`${slideImages[1]}`)} />
                        
                    </div>
                </div>
                <div className="each-slide">
                    <div className="each-slide-1">
                        <img src={require(`${slideImages[2]}`)} />
                      
                    </div>
                </div>
                <div className="each-slide">
                    <div className="each-slide-1">
                        <img src={require(`${slideImages[3]}`)} />
                        
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default class Home extends React.Component{
    constructor(props){
        super(props);

    }
    
    

    render(){
        console.log(slideImages);
        return (

            <div className="home-div-master">
                {Slideshow()}
            </div>
            
        )
    }
}

