import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import { getServiceFetch } from "./serviceReducer";
const parse =  require("html-react-parser");
import serviceimg from "./assets/serviceicon.svg";
function App() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const isLoading = useSelector((state) => state.services.isLoading);

  useEffect(() => {
    dispatch(getServiceFetch());
  }, [dispatch]);

  const scrolltoContainer = (id) => {
    const container = document.getElementById(id);
    container.scrollIntoView({ behavior: "smooth" });
  };

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
      <div className="topbar text-center">
        <span className="">
          We have been working on several voluntary initiatives during the
          COVID-19 pandemic. Check them out
        </span>
      </div>
      {/* {navigation component} */}
      <Navigation/>
      <header>
        <div className="banner"></div>
        <div className="container header-text">
          <div className="text-wrapper">
            <h2 className="heading2">SERVICES</h2>
            <p className="header-text_highlight">
              At <span className="bluetext">NAXA</span>, we work on{" "}
              <span className="bluetext">ideas</span>; ideas that can provide{" "}
              <span className="bluetext">simple solutions </span>
              to <span className="bluetext">complex problems</span>.
            </p>
            <p className="header-text-sub">
              We work as a team to generate, explore, build and validate ideas.
              We also contextualize innovations around the world to find the
              best fitting solutions to local problems.
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="container ml">
        <div className="services-nav card space-between flex-row">
          {services.map((service, index) => (
            <span
              key={index}
              className="service-nav"
              onClick={(e) => scrolltoContainer(service.id)}
            >
              {service.title}
            </span>
          ))}
        </div>
        {/* fetch data from api and map the data */}
        <div className="flex-column service-container">
        {services.map((service, index) => (
          <div
            className={index % 2 === 0 ? "service-gridBox" : "service-gridBox g-reverse"}
            key={index}
            id={service.id}
          >
            <div className="flexbox s-photo">
              <img src={service.photo} alt={service.title} />
            </div>
            <div className="flex-column s-info">
              <img src={serviceimg} alt="service icon" className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <div className="service-desc1">{parse(service.description1)}</div>
              <div className="card card-text">{parse(service.description2)}</div>
            </div>
          </div>
        ))}
        </div>
        </div>
      </main>
      <section className="letstalk card card-round container">
        <div className="collab-container flex-column">
          <div>
            <h2 className="letstalk-title">Seeking Collaboration?</h2>
          </div>
          <div>
            <p>
              We constantly look forward to exploring ideas, collaborations, and
              technical innovations. If you want to partner with us, we are just
              an email away.
            </p>
          </div>
          <a href="#">
            <button type="button" className="btn-primary">
              <span>Let's Talk</span>
              {/* {icon} */}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
