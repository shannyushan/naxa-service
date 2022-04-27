import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServiceFetch } from "./serviceReducer";
function App() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const isLoading = useSelector((state) => state.services.isLoading);

  useEffect(() => {
    dispatch(getServiceFetch());
  }, [dispatch]);


  const scrolltoContainer = (id)=>{
    const container = document.getElementById(id);
    container.scrollIntoView({behavior:"smooth"});
  }

  if (isLoading)
    return (
      <div>
        <h1>
          Loading!!!<p>Fetching Data Please wait</p>
        </h1>
      </div>
    );

  return (
    <div>
      <div className="topbar">
        <span classname="text-center">
          We have been working on several voluntary initiatives during the
          COVID-19 pandemic. Check them out
        </span>
      </div>
      {/* {navigation component} */}
      <header>
        <div className="banner"></div>
        <div className="header-text">
          <h2 className="heading2">SERVICES</h2>
          <p className="header-text_highlight">
            At <span className="bluetext">NAXA</span>, we work on{" "}
            <span className="bluetext">ideas</span>; ideas that can provide{" "}
            <span className="bluetext">simple solutions</span>
            to <span className="bluetext">complex problems</span>.
          </p>
          <p className="header-text-sub">
            We work as a team to generate, explore, build and validate ideas. We
            also contextualize innovations around the world to find the best
            fitting solutions to local problems.
          </p>
        </div>
      </header>
      <main>
        <div className="services-nav card">
          {services.map((service, index) => (
            <span key={index} className="service-nav" onClick={(e)=>scrolltoContainer(service.id)}>
              {service.title}
            </span>
          ))}
        </div>
        {/* fetch data from api and map the data */}
        {services.map((service, index) => (
          <div
            className={index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
            key={index}
            id={service.id}
          >
            <div className="flexbox">
              <img src={service.photo} alt={service.title} />
            </div>
            <div className="flex-column">
              <img src={service.icon} alt="service icon" />
              <p>{service.title}</p>
              <div>{service.description1}</div>
              <div>{service.description2}</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
