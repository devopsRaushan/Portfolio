import React, { Suspense } from "react";
import Navbar from "./components/Header/Navbar/Navbar";

import { useDelayRender } from "./Hooks/delayRender";

// Lazy loading components
const Main_2 = React.lazy(() => import("./components/Main-2/Main"));
const Main = React.lazy(() => import("./components/Main/CareersPath/Main"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));

function App() {
  const delayRender = useDelayRender(200);

  return (
    <>
      <header className="Head_header">
        <Navbar />
      </header>
      {/* Wrap your lazy-loaded components into Suspense to render it */}
      {delayRender && (
        <Suspense>
          <div className="Main_container" style={{ height: "100vh" }}>
            <Main />
            <main className="Main_Qualification_skillSet">
              <Main_2 />
            </main>
          </div>
        </Suspense>
      )}
      <footer className="Footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
