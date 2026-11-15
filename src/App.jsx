import Banner from "./components/Banner";
import HouseList from "./components/HouseList";
import House from "./components/House";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";
import { Suspense, useState } from "react";

function App() {
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = (house) => {
    //do checks on house
    setSelectedHouse(house);
  };
  return (
    <ErrorBoundary fallback="Something went wrong!">
      <Banner headerText="Providing houses all over the world!" />
      <Suspense fallback={<h3>Loading...</h3>}>
        {selectedHouse ? (
          <House house={selectedHouse} />
        ) : (
          <HouseList selectHouse={setSelectedHouseWrapper} />
        )}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
