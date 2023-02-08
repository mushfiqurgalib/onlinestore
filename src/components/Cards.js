import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

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
  const dispatch = useDispatch();

  const send = (e) =>{
    dispatch(ADD(e));
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {posts.map((element) => {
          return (<>
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" key={element} src={element.image} style={{height:"16rem"}}  className="mt-3"/>
          <Card.Body>
            <Card.Title key={element}>{element.Title}</Card.Title>
            <Card.Text >
             $ {element.price}
            </Card.Text>
            <Button variant="primary"  onClick={()=>send(element)} className="col-lg-12">Add to Cart</Button>
          </Card.Body>
        </Card></>)
        })}
        
      </div>
    </div>
  );
};
export default Cards;
