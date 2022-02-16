import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Horoscope() {
    const [state, setState] = useState({});

    const URL = `https://aztro.sameerkumar.website/?sign=aries&day=today`;
    useEffect(() => {
        axios.post(URL)
            .then((res) => {
                setState(res.data)
            })
    }, []);
    
    
  return (
    <div>
        Current Date: {state.current_date} <br />
        Compatibility: {state.compatibility} <br />
        Lucky Number: {state.lucky_number} <br />
        Lucky Time: {state.lucky_time} <br />
        Color: {state.color} <br />
        Date Range: {state.date_range} <br />
        Mood: {state.mood} <br />
        Description: {state.description} <br />
        <br />
        <p>Double click to view other signs!</p>
    </div>
  )
}

export default Horoscope;