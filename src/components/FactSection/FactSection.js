import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS CSS
import PureCounter from '@srexi/purecounterjs'; // PureCounter
import "./FactSection.css"
import {FACT_NOTE, FactsData} from "../../constants/constants"
import Fact from "./Fact"

const FactsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Initialize PureCounter
    new PureCounter();
  }, []);

  const visibleFact = FactsData.filter((x)=>x.val>0)
  let lg = visibleFact.length < 4?Math.floor(12/visibleFact.length):3
  let gridClass = `col-lg-${lg} col-md-${visibleFact.length===1?12:6}`

  return (
    <div id="facts" className="facts" key={""}>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            {FACT_NOTE}
          </p>
        </div>

        <div className="row">
          { 
            visibleFact.map((fact)=>{
              return (
                <Fact props={fact} gridClass={gridClass}></Fact>  
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
