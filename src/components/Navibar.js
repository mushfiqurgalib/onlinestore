import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge'
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu'
import {NavLink} from 'react-router-dom';


const Navibar=() => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);};
    return (
        <>
<Navbar bg="dark" variant="dark">
        <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3">FoodShop</NavLink>
          {/* <Navbar.Brand href="#home">FoodShop</Navbar.Brand> */}
          <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
  
</Badge>
          <i className="fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:'pointer'}}></i>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className='card_details'>
        <i className='fas fa-close smallclose'onClick={handleClose} style={{position:'absolute',top:2 ,right:20,fontSize:23,cursor:'pointer'}}></i>
        <p style={{fontSize:22}}>Your cart is empty</p>
        <img src="./102661.png" alt="" className='emptycart_img' style={{width:"5rem",padding:10}}/>



        </div>
      </Menu>
      </Navbar>
</>
    )
}

export default Navibar