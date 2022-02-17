import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Product(props) {
  const params = useParams();
  const [item, setItem] = useState({});
  const {onAdd} = props;
  // console.log(params.id);

  useEffect(() => {
    axios.get(`/api/products/${params.id}`)
    .then((item) => {
      // console.log(item.data);
      setItem(item.data[0]);
    });
  },[]);
//  console.log(item);
  if (!item) return null;
 

  return (
    <div className="shop">
    <div className="container" >
      <div className="row align-items-center my-5">
         <React.Fragment key = {item.id}>
          <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={item.img_url}
            alt={item.name}
          />
        </div>
        <div className="col-lg-5">
          <h2 className="font-weight-light" >
            {item.name}
            </h2>
          <p >
          ${Number(item.price).toFixed(2)}
          </p>
          <p >
          Only {item.quantity} left in stock
          </p>
          <p >
          Description:{item.description}
          </p>
          <section className="appointment__card-right">
        <section className="appointment__actions">
          <button onClick={() => onAdd(item)}>Add To Cart</button>
        </section>
        </section>
        </div>
        </React.Fragment>
      </div>
    </div>
    </div>
  );
}

export default Product;