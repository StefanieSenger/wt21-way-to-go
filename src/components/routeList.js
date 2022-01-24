const RouteList = (props) => {
  return (
    <div div className="m-2">
      {/* Display the route details if Route is not display None */}
      {props.routes &&
        props.routes.map((route) => {
          return (
            <div key={route.id}>
              <h2 className="text-primary"> {route.name} </h2>
              <p> {route.lat} </p>
              <p> {route.lon} </p>
            </div>
          );
        })}
    </div>
  );
};

export default RouteList;
