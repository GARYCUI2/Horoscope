import React, { useState, useEffect } from "react";
import axios from 'axios';

function Admin() {
  const [item, setItem] = useState();
  const [category, setCategory] = useState();
  const [catValue, setCatValue] = useState({
    id: '',
    category_name: ''
  })
  const [values, setValues] = useState({ 
    category_id: '',
    id: '',
    description: '',
    img_url: '',
    name: '',
    price: '',
    quantity: '',
   });

  useEffect(() => {
    axios.get(`/api/categories`)
    .then((res) => {
      console.log(res)
     setCategory(res.data)
    })
    .catch((err) => {
      console.error('An error occurred: ', err)
    })
  },[]);

  useEffect(() => {
    axios.get(`/api/products`)
    .then((res) => {
      console.log(res)
      setItem(res.data);
      setValues(res.data);
    })
    .catch((err) => {
      console.error('An error occurred: ', err)
    })
  },[]);

  if (!category) return null;
  if (!item) return null;

  const handleProductChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleCategoryChange = (e) => {
    setCatValue({ ...catValue, [e.target.name]: e.target.value })
  }

  const handleCategorySubmit = (e) => {
    e.preventDefault();
  const categoryData = {
    id: catValue.id,
    category_name: catValue.category_name
  }
  axios.post('/api/categories', categoryData)
        .then(() => {
          setCategory([...category, categoryData])
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
            console.log("server responded");
          } else if (err.request) {
            console.log("network error");
          } else {
            console.log(err);
          }
        })
  }

  const handleCategoryDelete = (categoryID) => {
    let updatedCategories = category.filter( category => category.id !== categoryID )
    axios.delete(`/api/categories/${categoryID}`)
          .then((res) => {
            console.log(res.data)
            setCategory([...updatedCategories])
          })
          .catch((err) => {
            console.log('error: ', err)
          })
  }


const handleProductSubmit = (e) => {
  e.preventDefault();
  const productData = {
    id: values.id,
    name: values.name,
    description: values.description,
    category_id: values.category_id,
    price: values.price,
    img_url: values.img_url,
    quantity: values.quantity
  }
  axios.post('/api/products/add', productData)
        .then(() => {
          setItem([...item, productData])
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
            console.log("server responded");
          } else if (err.request) {
            console.log("network error");
          } else {
            console.log(err);
          }
        })
}

      const handleProductDelete = (productID) => {
        let updatedProducts = item.filter( products => products.id !== productID )
        axios.delete(`/api/products/${productID}`)
          .then((res) => {
            setItem([...updatedProducts])
          })
          .catch((err) => {
            console.log('error: ', err)
          })
      }

  return (
    <div className="about">
      <div className="container">
        <div className="admin-container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          <h1 className="font-weight-light text-center">Admin</h1>
          <h2>Categories:</h2>
          <table className="table">
          <tbody>
            <tr>
            <th scope="col">Category ID</th>
              <th scope="col">Category Name</th>
                <th scope="col">Delete</th>
                </tr>
                </tbody>
                {
                category.map(category => 
                <tbody key = {category.id}>
                  <tr>
                <th scope="row">{category.id}</th>
                <td key={category.id}>{category.category_name}</td>
                 <td><button onClick={() => handleCategoryDelete(category.id)}>Delete</button></td>
                 </tr>
                 </tbody> )
                } 
          </table> 
          <h2>Add A Category</h2>
          <form onSubmit={handleCategorySubmit}>
            <div className="form-group">
            <label>Category ID:</label>
            <input type='text' className='form-control' name="id"  onChange={handleCategoryChange} />
            <label>Category Name:</label>
            <input type='text' className='form-control' name="category_name" onChange={handleCategoryChange} />
            </div>
            <button type="submit">Add</button>
            </form>
            <hr />
          <br />
          <h2>Products:</h2>
          <table className="table">
          <tbody>
            <tr>
            <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Category ID</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
                </tr>
                </tbody>     
                {
                item.map(item => 
                <tbody key = {item.id}>
                  <tr>
                <th scope="row">{item.id}</th>
                <td key={item.id}>{item.name}</td>
                <td>{item.category_id}</td>
                <td><img src={item.img_url} alt=""/></td>
                 <td>${Number(item.price).toFixed(2)}</td>
                 <td>{item.quantity}</td>
                 <td><button onClick={() => handleProductDelete(item.id)}>Delete</button></td>
                 </tr>
                 </tbody> )
                } 
          </table> 
          <br />
          <hr />
          <h2>Add A Product</h2>
          <form onSubmit={handleProductSubmit}>
            <div className="form-group">
            <label>Category ID:</label>
            <input type='text' className='form-control' name="category_id" onChange={handleProductChange} />
            <label>ID:</label>
            <input type='text' className='form-control' name="id" onChange={handleProductChange} />
            <label>Description:</label>
            <input type='text' className='form-control' name="description"  onChange={handleProductChange} />
            <label>Image:</label>
            <input type='text' className='form-control' name="img_url"  onChange={handleProductChange} />
            <label>Name:</label>
            <input type='text' className='form-control' name="name" onChange={handleProductChange} />
            <label>Price:</label>
            <input type='text' className='form-control' name="price" onChange={handleProductChange} />
            <label>Quantity:</label>
            <input type='text' className='form-control' name="quantity" onChange={handleProductChange} />
            </div>
            <button type="submit">Add</button>
          </form>
          </div>
          <div className="col-lg-5">
          </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Admin;

