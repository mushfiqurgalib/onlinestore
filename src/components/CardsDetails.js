import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";
import { useDispatch } from "react-redux";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);
  //const selected_id = id;
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata)

  const dispatch = useDispatch();
  const history = useNavigate();
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  }


  // const compare=()=>{
  //   let comparedata = getdata.filter((e)=>{
  //     return id === e.id
  //   });
  //   console.log(comparedata);
  //   setData(comparedata);
  // }

  // useEffect(()=>{
  // compare();}
  // ,[])

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <div className="items_img">
          <img variant="top" src={data.image} alt="" style={{ height: "16rem" }} className="mt-3" />
        </div>
        {<section className="container mt-3">
          <div className="details">
            <Table>
              <tbody>
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
                      <span style={{
                        background: "green",
                        color: "#fff",
                        padding: "2px 5px",
                        borderRadius: "5px",
                      }}

                      >
                        {JSON.stringify(data.rating)} ★
                      </span>
                    </p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(data.id)}></i>	</span></p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </section>}
      </div>
    </>
  );
};
export default CardsDetails;