import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { Update_data } from "../redux/actions/action";
import Modal from "react-bootstrap/Modal"
const Cards = () => {
  const [posts, setPosts] = useState([]);

  const [show,setShow]=useState(false)

  const [update,setUpdate]=useState("")

  const [ind,setind]=useState("")

  const handleClose = () => setShow(false);

  const handleShow=(element)=>{
    setShow(true);
    setUpdate(element);
    setind(element.id);
    
    console.log(ind)
  }

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

  const usertask_update = (update,ind)=>{
    dispatch(Update_data(update,ind));
    handleClose()
}
  return (
    <>
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {posts.map((element,k) => {
          return (<>
          <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" key={element} src={element.image} style={{height:"16rem"}}  className="mt-3"/>
          <Card.Body>
            <Card.Title key={element}>{element.title}</Card.Title>
            <Card.Text > 
             $ {element.price}
            </Card.Text>
            <i className="fa-regular fa-pen-to-square" onClick={()=>{handleShow(element)}} style={{ fontSize: 25, cursor: "pointer" }}></i>

            <Button variant="primary"  onClick={()=>send(element)} className="col-lg-12">Add to Cart</Button>
          </Card.Body>
        </Card></>)
        })}
        
      </div>
      <Modal show={show} onHide={handleClose}>
        <h3 className="text-center mt-2">Update product</h3>
        <Modal.Header closeButton>
          <Modal.Title>Product Price</Modal.Title>
          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
            <input name="name" value={update.price}
            onChange={(e)=>setUpdate(e.target.value)} className='form-control col-lg-5 mt-2' />
          </div>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>usertask_update(update,ind)}>
                            Save Changes
                        </Button>
                        
        </Modal.Footer>
      </Modal>

    </div>
    </>
  );
};
export default Cards;
