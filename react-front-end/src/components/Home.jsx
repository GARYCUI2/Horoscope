import React, { useState } from "react";
import "../index.css"
import Aries from "./zodiac_signs/Aries";
import Taurus from "./zodiac_signs/Taurus";
import Gemini from "./zodiac_signs/Gemini";
import Cancer from "./zodiac_signs/Cancer";
import Leo from "./zodiac_signs/Leo";
import Virgo from "./zodiac_signs/Virgo";
import Libra from "./zodiac_signs/Libra";
import Scorpio from "./zodiac_signs/Scorpio";
import Sagittarius from "./zodiac_signs/Sagittarius";
import Capricorn from "./zodiac_signs/Capricorn";
import Aquarius from "./zodiac_signs/Aquarius";
import Pisces from "./zodiac_signs/Pisces";


function Home() {
  const [aries, setAries] = useState(false);
  const [showAries, setShowAries] = useState(true);
  const [taurus, setTaurus] = useState(false);
  const [showTaurus, setShowTaurus] = useState(true);
  const [gemini, setGemini] = useState(false);
  const [showGemini, setShowGemini] = useState(true);
  const [cancer, setCancer] = useState(false);
  const [showCancer, setShowCancer] = useState(true);
  const [leo, setLeo] = useState(false);
  const [showLeo, setShowLeo] = useState(true);
  const [virgo, setVirgo] = useState(false);
  const [showVirgo, setShowVirgo] = useState(true);
  const [libra, setLibra] = useState(false);
  const [showLibra, setShowLibra] = useState(true);
  const [scorpio, setScorpio] = useState(false);
  const [showScorpio, setShowScorpio] = useState(true);
  const [sagittarius, setSagittarius] = useState(false);
  const [showSagittarius, setShowSagittarius] = useState(true);
  const [capricorn, setCapricorn] = useState(false);
  const [showCapricorn, setShowCapricorn] = useState(true);
  const [aquarius, setAquarius] = useState(false);
  const [showAquarius, setShowAquarius] = useState(true);
  const [pisces, setPisces] = useState(false);
  const [showPisces, setShowPisces] = useState(true);

  const ariesClick = () => {
    setAries(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const taurusClick = () => {
    setTaurus(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const geminiClick = () => {
    setGemini(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const cancerClick = () => {
    setCancer(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const leoClick = () => {
    setLeo(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const virgoClick = () => {
    setVirgo(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const libraClick = () => {
    setLibra(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const scorpioClick = () => {
    setScorpio(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const sagittariusClick = () => {
    setSagittarius(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const capricornClick = () => {
    setCapricorn(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const aquariusClick = () => {
    setAquarius(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const piscesClick = () => {
    setPisces(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowVirgo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const onDoubleClick = () => {
    setAries(false)
    setShowAries(true)
    setTaurus(false)
    setShowTaurus(true)
    setGemini(false)
    setShowGemini(true);
    setCancer(false)
    setShowCancer(true);
    setLeo(false)
    setShowLeo(true);
    setVirgo(false)
    setShowVirgo(true);
    setLibra(false)
    setShowLibra(true);
    setScorpio(false)
    setShowScorpio(true);
    setSagittarius(false)
    setShowSagittarius(true);
    setCapricorn(false)
    setShowCapricorn(true);
    setAquarius(false)
    setShowAquarius(true);
    setPisces(false)
    setShowPisces(true);
  }


  return (
    <div className="home">
      <div className="container-fluid">
        <div className="d-flex flex-row">
          <div className="col-lg-12">
            <h1 className="font-weight-light text-center">Welcome to Lucky Star Astrology</h1>
            <p className="text-center">
              Click on your zodiac sign and receive your horoscope!
            </p>
            <br />
            {/* <form className="form-group justify-content-center" onSubmit={handleSubmit}>
              <label>Enter Your Birthday</label>
              <input type="text" name="date "placeholder="MM/DD" className="form-control" onChange={handleChange}/>
              <br />
              <button className="btn btn-dark">Submit</button>
            </form> */}
            <div className="container">
            <div className="d-flex flex-row">

          {/* Aries Sign */}

            <div className="d-flex flex-column text-center">
            <section onDoubleClick={onDoubleClick}>
            { showAries ? (
              <div className="zodiac-div">
            <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              name="aries"
              src="https://i.imgur.com/nCh1QNM.jpg"
              alt="Aries Symbol"
              onClick={ariesClick}
            />
            <p className="img__description">March 21 - April 19</p>
            </div>
            ) : null}
            { aries ? <Aries /> : null }
            </section> 
            </div>

            {/* Taurus Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showTaurus ? (
              <div className="zodiac-div">
            <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/lLRrN8E.jpg"
              alt="Taurus Symbol"
              height="300"
              width="200"
              onClick={taurusClick}
            />
            <p className="img__description">April 20 - May 20</p>
            </div>
            ) : null}
            { taurus ? <Taurus /> : null }
            </section> 
            </div>

            {/* Gemini Sign */}
              
            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showGemini ? (
              <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/pK90QqW.jpg"
              alt="Gemini Symbol"
              height="300"
              width="200"
              onClick={geminiClick}
            />
            <p className="img__description">May 21 - June 21</p>
            </div>
            ) : null}
            { gemini ? <Gemini /> : null }
            </section> 
            </div>
            </div>

            <div className="d-flex flex-row justify-content-center">

            {/* Cancer Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showCancer ? (
              <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/G6AQTIA.jpg"
              alt="Cancer Symbol"
              height="300"
              width="200"
              onClick={cancerClick}
            />
            <p className="img__description">June 22 - July 22</p>
            </div>
            ) : null}
            { cancer ? <Cancer /> : null }
            </section>  
            </div>

            {/* Leos Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showLeo ? (
              <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/3qaB5KP.jpg"
              alt="Leo Symbol"
              height="300"
              width="200"
              onClick={leoClick}
            />
            <p className="img__description">July 23 - August 22</p>
            </div>
            ) : null}
            { leo ? <Leo /> : null }
            </section> 
            </div>

            {/* Virgo Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showVirgo ? (
            <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/ZJQ3HRo.jpg"
              alt="Virgo Symbol"
              height="300"
              width="200"
              onClick={virgoClick}
            />
            <p className="img__description">August 23 - September 22</p>
            </div>
            ) : null}
            { virgo ? <Virgo /> : null }
            </section>  
            </div>
            </div>

            <div className="d-flex flex-row justify-content-center">

            {/* Libra Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showLibra ? (
              <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/ba4d5YZ.jpg"
              alt="Libra Symbol"
              height="300"
              width="200"
              onClick={libraClick}
            />
            <p className="img__description">September 23 - October 22</p>
            </div>
            ) : null}
            { libra ? <Libra /> : null }
            </section>  
            </div>

            {/* Scorpio Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showScorpio ? (
              <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/8D4YBd3.jpg"
              alt="Scorpio Symbol"
              height="300"
              width="200"
              onClick={scorpioClick}
            />
            <p className="img__description">October 23 - November 22</p>
            </div>
            ) : null}
            { scorpio ? <Scorpio /> : null }
            </section> 
            </div> 

            {/* Sagittarius Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showSagittarius ? (
              <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/9U4cvOF.jpg"
              alt="Sagittarius Symbol"
              height="300"
              width="200"
              onClick={sagittariusClick}
            />
            <p className="img__description">November 23 - December 21</p>
            </div>
            ) : null}
            { sagittarius ? <Sagittarius /> : null }
            </section> 
            </div>
            </div>

            <div className="d-flex flex-row justify-content-center">
            <div className="d-flex flex-column">

            {/* Capricorn Sign */}

            <section onDoubleClick={onDoubleClick}>
            { showCapricorn ? (
              <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/HTfYL00.jpg"
              alt="Capricorn Symbol"
              height="300"
              width="200"
              onClick={capricornClick}
            />
            <p className="img__description">December 22 - January 19</p>
            </div>
            ) : null}
            { capricorn ? <Capricorn /> : null }
            </section> 
            </div>

            {/* Aquarius Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showAquarius ? (
              <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/gmNacde.jpg"
              alt="Aquarius Symbol"
              height="300"
              width="200"
              onClick={aquariusClick}
            />
            <p className="img__description">January 20 - February 18</p>
            </div>
            ) : null}
            { aquarius ? <Aquarius /> : null }
            </section>
            </div>

            {/* Pisces Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showPisces ? (
              <div className="zodiac-div">
             <img
              id="zodiac-img"
              className="img-fluid rounded mb-lg img-responsive"
              src="https://i.imgur.com/bFNe3kF.jpg"
              alt="Pisces Symbol"
              height="300"
              width="200"
              onClick={piscesClick}
            />
            <p className="img__description">February 19 - March 20</p>
            </div>
            ) : null}
            { pisces ? <Pisces /> : null }
            </section>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Home;
