import React, { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import "./App.css";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
import Backdrop from "./components/Navigation/Backdrop/Backdrop";

function App() {
  let backdrop;
  
  const [sideDrawerOpen,setSideDrawerOpen]=useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
        setSideDrawerOpen(false);
  };

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
    }

    return (

        
        
      <React.Fragment>
        <Navigation
          drawerClickHandler={drawerToggleClickHandler}
        />
        <SideDrawer
          show={sideDrawerOpen}
          click={backdropClickHandler}
        />
        ;{backdrop}
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </React.Fragment>
    );
}

export default App;
