import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const selected_id = id;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${selected_id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <div className="items_img">
          <img variant="top" src={data.image} alt=""  style={{height:"16rem"}}  className="mt-3"/>
        </div>
        {<section className="container mt-3">
          <div className="details">
            <Table>
              <tr>
                <td>
                  <p>

                    <strong>Product</strong> : {data.title}
                  </p>
                  <p>

                    <strong>Price</strong> : $ {data.price}
                  </p>

                  <div
                    className="mt-5 d-flex justify-content-between align-items-center"
                    style={{
                      width: 100,
                      cursor: "pointer",
                      // background: "#ddd",
                      // color: "#111",
                    }}
                  ></div>
                </td>
                <td>
                  
                  <p>
                    <strong>Rating :</strong>
                    <span    style={{
                        background: "green",
                        color: "#fff",
                        padding: "2px 5px",
                        borderRadius: "5px",
                      }}
                   
                    >
                      {JSON.stringify(data.rating)} ★
                    </span>
                  </p>
                  <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                </td>
              </tr>
            </Table>
          </div>
        </section>}
      </div>
    </>
  );
};
export default CardsDetails;