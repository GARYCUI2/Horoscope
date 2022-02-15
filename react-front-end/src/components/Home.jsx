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
            <h1 className="font-weight-light">Horoscope</h1>
            <p>
              Welcome.
            </p>
            <form className="form-group justify-content-center">
              <label>Enter Your Birthday</label>
              <input placeholder="DD/MM/YYYY" className="form-control"/>
              <button className="btn btn-dark">Submit</button>
            </form>
            <label>Or Choose Your Sign</label>
            <div className="container">
            <div class="d-flex flex-row justify-content-center space-around">

          {/* Aries Sign */}

            <div className="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showAries ? (
            <img
              className="img-fluid rounded mb-lg img-responsive"
              name="aries"
              src="/aries.jpeg"
              alt="Aries Symbol"
              height="300"
              width="200"
              onClick={ariesClick}
            />
            ) : null}
            { aries ? <Aries /> : null }
            </section> 
            </div>

            {/* Taurus Sign */}

            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showTaurus ? (
            <img
              class="img-fluid rounded mb-4 mb-lg-0 img-responsive"
              src="/taurus.jpeg"
              alt="Taurus Symbol"
              height="300"
              width="200"
              onClick={taurusClick}
            />
            ) : null}
            { taurus ? <Taurus /> : null }
            </section> 
            </div>

            {/* Gemini Sign */}
              
            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showGemini ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0 img-responsive"
              src="/gemini.jpeg"
              alt="Gemini Symbol"
              height="300"
              width="200"
              onClick={geminiClick}
            />
            ) : null}
            { gemini ? <Gemini /> : null }
            </section> 
            </div>
            </div>

            <div class="d-flex flex-row justify-content-center">

            {/* Cancer Sign */}

            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showCancer ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/cancer.jpeg"
              alt="Cancer Symbol"
              height="300"
              width="200"
              onClick={cancerClick}
            />
            ) : null}
            { cancer ? <Cancer /> : null }
            </section>  
            </div>

            {/* Leos Sign */}

            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showLeo ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/leo.jpeg"
              alt="Leo Symbol"
              height="300"
              width="200"
              onClick={leoClick}
            />
            ) : null}
            { leo ? <Leo /> : null }
            </section> 
            </div>

            {/* Virgo Sign */}

            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showVirgo ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/virgo.jpeg"
              alt="Virgo Symbol"
              height="300"
              width="200"
              onClick={virgoClick}
            />
            ) : null}
            { virgo ? <Virgo /> : null }
            </section>  
            </div>
            </div>

            <div class="d-flex flex-row justify-content-center">

            {/* Libra Sign */}

            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showLibra ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/libra.jpeg"
              alt="Libra Symbol"
              height="300"
              width="200"
              onClick={libraClick}
            />
            ) : null}
            { libra ? <Libra /> : null }
            </section>  
            </div>

            {/* Scorpio Sign */}

            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showScorpio ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/scorpio.jpeg"
              alt="Scorpio Symbol"
              height="300"
              width="200"
              onClick={scorpioClick}
            />
            ) : null}
            { scorpio ? <Scorpio /> : null }
            </section> 
            </div> 

            {/* Sagittarius Sign */}

            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showSagittarius ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/sagittarius.jpeg"
              alt="Sagittarius Symbol"
              height="300"
              width="200"
              onClick={sagittariusClick}
            />
            ) : null}
            { sagittarius ? <Sagittarius /> : null }
            </section> 
            </div>
            </div>

            <div class="d-flex flex-row justify-content-center">
            <div class="d-flex flex-column">

            {/* Capricorn Sign */}

            <section onDoubleClick={onDoubleClick}>
            { showCapricorn ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/capricorn.jpeg"
              alt="Capricorn Symbol"
              height="300"
              width="200"
              onClick={capricornClick}
            />
            ) : null}
            { capricorn ? <Capricorn /> : null }
            </section> 
            </div>

            {/* Aquarius Sign */}

            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showAquarius ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/aquarius.jpeg"
              alt="Aquarius Symbol"
              height="300"
              width="200"
              onClick={aquariusClick}
            />
            ) : null}
            { aquarius ? <Aquarius /> : null }
            </section>
            </div>

            {/* Pisces Sign */}

            <div class="d-flex flex-column">
            <section onDoubleClick={onDoubleClick}>
            { showPisces ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/pisces.jpeg"
              alt="Pisces Symbol"
              height="300"
              width="200"
              onClick={piscesClick}
            />
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