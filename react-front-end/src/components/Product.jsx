import React, {useState, useEffect} from "react";

function Product({match}) {
  useEffect(() => {
    fetchItem();
    console.log({match})
  },[])

  const [item, setItem] = useState({
    images:{}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match}`);
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  }

  return (
    <div className="shop">
    <div className="container" >
      <div className="row align-items-center my-5">
         <React.Fragment key = {item.itemId}>
          <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={item.images}
            alt=""
          />
        </div>
        <div className="col-lg-5">
          <h1 className="font-weight-light" >
            {item.name}
            </h1>
          <p >
          Price:{item.ratings}
          </p>
          <p onClick={()=>{'Click me'}}>
          Add To Cart
          </p>
        </div>
        </React.Fragment>
      </div>
    </div>
    </div>
  );
}

export default Product;