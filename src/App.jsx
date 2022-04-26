import React, { useState, useEffect } from "react";

function App() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });
  return (
    <div>
      <div className="topbar">
        <p>text here</p>
      </div>
      {/* {navigation component} */}
      <header>
        <div className="banner"></div>
        <div className="header-text">
          <h3>SERVICES</h3>
          <p>
            At NAXA, we work on ideas; ideas that can provide simple solutions
            to complex problems.
          </p>
          <p>
            We work as a team to generate, explore, build and validate ideas. We
            also contextualize innovations around the world to find the best
            fitting solutions to local problems.
          </p>
        </div>
      </header>
      <main>{/* fetch data from api and map the data */}</main>
    </div>
  );
}

export default App;
