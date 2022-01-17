import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Search from "./components/searchDestination/searchDestination";
import CurrentLocation from "./components/currentLocation/currentLocation";
import Map from "./components/map/map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/Products";
import How from "./pages/How";

const libraries = ["places"];

const App = function () {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  return (
    <div>
      <h1>WayToGo</h1>

      <CurrentLocation panTo={panTo} />
      {isLoaded && <Search panTo={panTo.bind(this)} />}
      {isLoaded && <Map onMapLoad={onMapLoad}></Map>}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/how" component={How}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
