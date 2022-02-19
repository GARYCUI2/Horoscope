// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// function Admin(props) {
//   const [item, setItem] = useState({});
//   const [category, setCategory] = useState({});
//   const [values, setValues] = useState({ 
//     category_id: '',
//     id: '',
//     description: "",
//     img_url: "",
//     name: "",
//     price: "",
//     quantity: ''
//    });

//   useEffect(() => {
//     axios.get(`/api/categories`)
//     .then((res) => {
//      const categoryObject = res.data
//      setCategory(categoryObject[0])
//     }).then(
//     )
//   },[]);

//   useEffect(() => {
//     axios.get(`/api/products`)
//     .then((res) => {
//       setItem(res.data[0]);
//     })
//   },[]);

//   if (!category) return null;
//   if (!item) return null;

//   if (!item) return null;

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value })
//   }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const productData = {
//     // category_id: values.category_id,
//     id: values.id,
//     description: values.description,
//     img_url: values.img_url,
//     name: values.name,
//     price: values.price,
//     quantity: values.quantity
//   }
//   axios.post('/api/products', productData)
//         .then((res) => {
//           setValues({
//             id: values.id,
//             description: values.description,
//             img_url: values.img_url,
//             name: values.name,
//             price: values.price,
//             quantity: values.quantity
//           })
//           console.log(res.status)
//           console.log(res.data.token)
//         }).catch((err) => {
//           if (err.response) {
//             console.log(err.response);
//             console.log("server responded");
//           } else if (err.request) {
//             console.log("network error");
//           } else {
//             console.log(err);
//           }
//         })
//       }

//       console.log(item)
//       console.log(category)

//       const handleDelete = (id) => {
        
//       }

//   return (
//     <div className="about">
//       <div className="container">
//         <div className="row align-items-center my-5">
//           <div className="col-lg-7">
//           <h1 className="font-weight-light text-center">Admin</h1>
//           <h2>Categories:</h2>
//           <table className="text-center">
//             <thead>
//               <tr>
//                 <td>Category ID</td>
//                 <td>Category Name</td>
//               </tr>
//             </thead>
//             <tbody>
//                  <tr key={category.id}>
//                    <td>{category.id}</td>
//                  <td>{category.category_name}</td>
//                </tr>
//             </tbody>
//           </table>
//           <br />
//           <h2>Products:</h2>
//           <table className="text-center">
//             <thead>
//               <tr>
//                 <td>Name</td>
//                 <td>Image</td>
//                 <td>Price</td>
//                 <td>Quantity</td>
//                 <td>Edit</td>
//                 <td>Delete</td>
//               </tr>
//             </thead>
//             <tbody>
//                  <tr>
//                  <td>{item.name}</td>
//                  <td><img src={item.img_url} alt=""/></td>
//                  <td>${Number(item.price).toFixed(2)}</td>
//                  <td>{item.quantity}</td>
//                  <td><button>Edit</button></td>
//                  <td><button>Delete</button></td>
//                </tr>
//             </tbody>
//           </table>
//           <br />
//           <hr />
//           <h2>Add A Product</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//             {/* <label>Category ID:</label>
//             <input type='text' className='form-control' name="category_id" value={values.category_id} onChange={handleChange} /> */}
//             <label>ID:</label>
//             <input type='text' className='form-control' name="id" value={values.id} onChange={handleChange} />
//             <label>Description:</label>
//             <input type='text' className='form-control' name="description"  value={values.description} onChange={handleChange} />
//             <label>Image:</label>
//             <input type='text' className='form-control' name="img_url" value={values.img_url} onChange={handleChange} />
//             <label>Name:</label>
//             <input type='text' className='form-control' name="name" value={values.name} onChange={handleChange} />
//             <label>Price:</label>
//             <input type='text' className='form-control' name="price" value={values.price} onChange={handleChange} />
//             <label>Quantity:</label>
//             <input type='text' className='form-control' name="quantity" value={values.quantity} onChange={handleChange} />
//             </div>
//             <button type="submit">Add</button>
//           </form>
//           </div>
//           <div className="col-lg-5">
//           </div>
//         </div>
//       </div>
//     </div>
//   );
//   }

// export default Admin;

import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Admin(props) {
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

export default Admin;
