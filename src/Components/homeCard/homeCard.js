import React from "react";
import { homeData } from "../../Data/homeData";
import * as ReactBootStrap from "react-bootstrap";
import './homeCard.css'


function HomeCard() {
  console.log(homeData);
  return (
    <div className="homecard" >
    {homeData.map((data)=>{
        console.log(data.img)
        return(
          <ReactBootStrap.Card style={{ width: '25rem' ,height:"25rem" ,backgroundColor:" rgba(1,1,1,0.2)"}} className="homecard--card">
          <ReactBootStrap.Card.Img variant="top" src={data.img} className="homecard--img" />
          <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title className="homecard--title">Card Title</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text className="homecard--subtitle">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
          </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
            
            
            
        )
    })}
    </div>
  )
  
}

export default HomeCard;
