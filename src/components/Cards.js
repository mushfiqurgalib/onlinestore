import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Routes,Route} from "react-router-dom" 

const Cards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {posts.map((element, id) => {
          return (<>
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={element.image} style={{height:"16rem"}}  className="mt-3"/>
          <Card.Body>
            <Card.Title>{element.Title}</Card.Title>
            <Card.Text>
             $ {element.price}
            </Card.Text>
            <Button variant="primary" className="col-lg-12">Add to Cart</Button>
          </Card.Body>
        </Card></>)
        })}
        
      </div>
    </div>
  );
};
export default Cards;
