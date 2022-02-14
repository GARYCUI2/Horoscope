import React, { useState } from "react";
import Aries from "./zodiac_signs/Aries";

function Home() {
  const [show, setShow] = useState(true);
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(true);
    if (setActive === false) {
      setShow(false);
    }
  }

  const onDoubleClick = () => {
    setActive(false);
  }


  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Horoscope</h1>
            <p>
              Welcome.
            </p>
            <form>
              <label>Enter Your Birthday</label>
              <input placeholder="DD/MM/YYYY" />
            </form>
            <label>Or Choose Your Sign</label>
            { show ? (
            <div className="col-lg-7">
            <section onDoubleClick={onDoubleClick}>
            <img
              className="img-fluid rounded mb-4 mb-lg-0 hover-shadow"
              name="aries"
              src="/aries.jpeg"
              alt="Aries Symbol"
              height="300"
              width="200"
              onClick={onClick}
              
            />
            { active ? <Aries /> : null }
            
            </section>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/taurus.jpeg"
              alt="Taurus Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/gemini.jpeg"
              alt="Gemini Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/cancer.jpeg"
              alt="Cancer Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/leo.jpeg"
              alt="Leo Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/virgo.jpeg"
              alt="Virgo Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/libra.jpeg"
              alt="Libra Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/scorpio.jpeg"
              alt="Scorpio Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/sagittarius.jpeg"
              alt="Sagittarius Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/capricorn.jpeg"
              alt="Capricorn Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/aquarius.jpeg"
              alt="Aquarius Symbol"
              height="300"
              width="200"
            />
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/pisces.jpeg"
              alt="Pisces Symbol"
              height="300"
              width="200"
            />
          </div>) : null}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;