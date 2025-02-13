import {
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
  import DogList from './dogList.js';
  import FilterDogDetails from './filterDogDetails.js';
  
  function RouteList({dogs}) {
    return (
      <Routes>
        <Route
          path="/dogs"
          element={<DogList dogs={dogs} />}
        />
  
        <Route
          path="/dogs/:name"
          element={<FilterDogDetails dogs={dogs} />}
        />
  
        <Route
          path="/*"
          element={<Navigate to="/dogs" />}
        />
      </Routes>
    );
  }
  
  export default RouteList;
  
  