import React, { useState } from "react";
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
  const [showGemini, setShowGemini] = useState(false);
  const [cancer, setCancer] = useState(false);
  const [showCancer, setShowCancer] = useState(false);
  const [leo, setLeo] = useState(false);
  const [showLeo, setShowLeo] = useState(false);
  const [virgo, setVirgo] = useState(false);
  const [showVirgo, setShowVirgo] = useState(false);
  const [libra, setLibra] = useState(false);
  const [showLibra, setShowLibra] = useState(false);
  const [scorpio, setScorpio] = useState(false);
  const [showScorpio, setShowScorpio] = useState(false);
  const [sagittarius, setSagittarius] = useState(false);
  const [showSagittarius, setShowSagittarius] = useState(false);
  const [capricorn, setCapricorn] = useState(false);
  const [showCapricorn, setShowCapricorn] = useState(false);
  const [aquarius, setAquarius] = useState(false);
  const [showAquarius, setShowAquarius] = useState(false);
  const [pisces, setPisces] = useState(false);
  const [showPisces, setShowPisces] = useState(false);

  const ariesClick = () => {
    setAries(true);
    setShowAries(false)
    setShowTaurus(false);
    setShowGemini(false);
    setShowCancer(false);
    setShowLeo(false);
    setShowLibra(false);
    setShowScorpio(false);
    setShowSagittarius(false);
    setShowCapricorn(false);
    setShowAquarius(false);
    setShowPisces(false);
  }

  const taurusClick = () => {
    setTaurus(true);
    setShowAries(false);
  }

  const geminiClick = () => {
    setGemini(true);
    setShowAries(false);
  }

  const onDoubleClick = () => {
    setAries(false)
    setShowAries(true)
    setTaurus(false)
    setShowTaurus(true)
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
            
            <div className="col-lg-7">
            
            <section onDoubleClick={onDoubleClick}>
            { showAries ? (
            <img
              className="img-fluid rounded mb-4 mb-lg-0 hover-shadow"
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
            <section onDoubleClick={onDoubleClick}>
            { showTaurus ? (
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/taurus.jpeg"
              alt="Taurus Symbol"
              height="300"
              width="200"
              onClick={taurusClick}
            />
            ) : null}
            { taurus ? <Taurus /> : null }
            </section> 

            <section onDoubleClick={onDoubleClick}>
            { showGemini ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/gemini.jpeg"
              alt="Gemini Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { gemini ? <Gemini /> : null }
            </section> 
            
            <section onDoubleClick={onDoubleClick}>
            { showCancer ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/cancer.jpeg"
              alt="Cancer Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { cancer ? <Cancer /> : null }
            </section>  

            <section onDoubleClick={onDoubleClick}>
            { showLeo ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/leo.jpeg"
              alt="Leo Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { leo ? <Leo /> : null }
            </section> 

            <section onDoubleClick={onDoubleClick}>
            { showVirgo ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/virgo.jpeg"
              alt="Virgo Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { virgo ? <Virgo /> : null }
            </section>  

            <section onDoubleClick={onDoubleClick}>
            { showLibra ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/libra.jpeg"
              alt="Libra Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { libra ? <Libra /> : null }
            </section>  

            <section onDoubleClick={onDoubleClick}>
            { showScorpio ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/scorpio.jpeg"
              alt="Scorpio Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { scorpio ? <Scorpio /> : null }
            </section>  

            <section onDoubleClick={onDoubleClick}>
            { showSagittarius ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/sagittarius.jpeg"
              alt="Sagittarius Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { sagittarius ? <Sagittarius /> : null }
            </section> 

            <section onDoubleClick={onDoubleClick}>
            { showCapricorn ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/capricorn.jpeg"
              alt="Capricorn Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { capricorn ? <Capricorn /> : null }
            </section> 

            <section onDoubleClick={onDoubleClick}>
            { showAquarius ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/aquarius.jpeg"
              alt="Aquarius Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { aquarius ? <Aquarius /> : null }
            </section>

            <section onDoubleClick={onDoubleClick}>
            { showPisces ? (
             <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="/pisces.jpeg"
              alt="Pisces Symbol"
              height="300"
              width="200"
            />
            ) : null}
            { pisces ? <Pisces /> : null }
            </section>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;