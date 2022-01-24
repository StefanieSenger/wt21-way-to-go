import { useState, useEffect } from "react";
import RouteList from "./Components/RouteList";

function App() {
  const [route, setRoute] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch("http://localhost:5000/route_linestring", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setRoute(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App container m-4">
      <div className="row">
        <div className="text-center">
          <h1>React Frontend - Flask Backend</h1>
        </div>
      </div>

      <RouteList routes={route} />
    </div>
  );
}

export default App;
