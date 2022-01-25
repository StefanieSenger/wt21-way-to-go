import { useState, useEffect } from "react";
import RouteList from "./Components/RouteList";
import axios from "axios";

function DataFetching() {
  const [route, setRoute] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    axios
      .get(`https://localhost:5000/route_linestring${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setRoute(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div className="App container m-4">
      <div className="row">
        <div className="text-center">
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="button" onClick={handleClick}>
            Fetch Route
          </button>
          <div>{route.title}</div>
        </div>
      </div>

      <RouteList routes={route} />
    </div>
  );
}

export default DataFetching;
