import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import Table from "react-bootstrap/Table"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";
import { useDispatch } from "react-redux";



const Navibar = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt = (id) => {
    dispatch(DLT(id))
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <NavLink to='/form'>
          <i
            className="fa-solid fa-plus text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i></NavLink> */}
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            OnlineShop
          </NavLink>
          {/* <Navbar.Brand href="#home">FoodShop</Navbar.Brand> */}
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-3">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >

            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>

        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {
            getdata.length ?

              <div className="card-details" style={{ width: "24rem", padding: 10 }}>
                <Table>
                  <thead>
                    <tr>
                      <th>
                        Photo
                      </th>
                      <th>
                        Product
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((e) => {

                        return (
                          <>

                            <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                  <img src={e.image} style={{ width: "5rem", height: "5rem" }} alt="" />
                                </NavLink>
                              </td>
                              <td>
                                <p>{e.title}</p>
                                <p>$ : {e.price}</p>
                              </td>
                              <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)} >
                                <i className='fas fa-trash largetrash'></i>
                              </td>
                            </tr>

                          </>
                        )
                      })
                    }

                  </tbody>
                </Table>
              </div> :
              <div className="card_details">
                <i
                  className="fas fa-close smallclose"
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 20,
                    fontSize: 23,
                    cursor: "pointer",
                  }}
                ></i>
                <p style={{ fontSize: 22 }}>Your cart is empty</p>
              </div>

          }

        </Menu>
      </Navbar>
    </>
  )
}

export default Navibar;
