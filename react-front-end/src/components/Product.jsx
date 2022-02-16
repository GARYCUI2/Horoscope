import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Button from './Button';

function Product(props) {
  const params = useParams();
  const [item, setItem] = useState({});
  const {onAdd} = props;

  useEffect(() => {
    axios.get(`/api/products/${params.id}`)
    .then((item) => {
      // console.log(item.data);
      setItem(item.data[`${params.id}`]);
    });
  },[]);

  if (!item) return null;
  // console.log(item);

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
          <h3 className="font-weight-light" >
            {item.name}
            </h3>
          <p >
          Price:{item.price}
          </p>
          <p >
          Quantity:{item.quantity}
          </p>
          <p >
          Description:{item.description}
          </p>
          <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button confirm onClick={() => onAdd(item)}>Add To Cart</Button>
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