import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import axios from "axios"
import {useParams} from "react-router-dom"

 const CardsDetails = () => {

    const[data,setData]=useState([])
    const id =useParams();
    useEffect(() => {
        axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .then((res) => {
            console.log(res);
            setData(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
      },[id]);


  return (
    <>
    <div className='container mt-2'>
    <h2 className='text-center'>Items Details Page
        </h2>
        <h2>{JSON.stringify(id)}</h2>
        <section className='container mt-3'>
       

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : {id.rname}</p>
                    <p> <strong>Price</strong>  : ₹{id.price}</p>
                    <p> <strong>Dishes</strong>  : {id.address}</p>
                    <p> <strong>Total</strong>  :₹  {id.price * id.qnty}</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                  

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{id.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >{id.somedata}	</span></p>
                    
                  </td>
                </tr>
              </Table>
            </div>
          
          
          
       


        </section>

    </div>
    </>
  )
}
export default CardsDetails