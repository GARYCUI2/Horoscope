import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Scorpio() {
  const [state, setState] = useState({});
  const [item, setItem] = useState({});

  const URL = `https://aztro.sameerkumar.website/?sign=scorpio&day=today`;
  useEffect(() => {
      axios.post(URL)
          .then((res) => {
              setState(res.data)
          })
  }, []);

  const recommendedItem = (item) => {
    const keys = Object.keys(item);
    return item[keys[keys.length * Math.random() << 0]];
  }

  useEffect(() => {
    axios.get(`/api/products`)
    .then((res) => {
      setItem(recommendedItem(res.data))
    })
  },[])

  return (
    <div className="zodiac-description">
    <img 
    className="img-fluid rounded mb-12 img-responsive text center"
    src="/scorpio.jpeg"
    alt="Scorpio Symbol"
    height="400"
    width="600"
    />
      <p className='text-md-left text-center'>
        <b>Date Range:</b> {state.date_range} <br />
        <b>Current Date:</b> {state.current_date} <br />
        <b>Compatibility:</b> {state.compatibility} <br />
        <b>Lucky Number:</b> {state.lucky_number} <br />
        <b>Lucky Time:</b> {state.lucky_time} <br />
        <b>Color:</b> {state.color} <br />
        <b>Mood:</b> {state.mood} <br />
        <b>Description:</b> {state.description} <br />
        <b>Your Recommended Item:</b> <Link to="/shop">{item.name}</Link> <br />
      </p>
        <br />
        <p>Double click to view another sign!</p>
    </div>
  )
}

export default Scorpio
