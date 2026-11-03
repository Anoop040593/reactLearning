import Banner from "./components/Banner.jsx";
import { HouseList } from "./components/HouseList.jsx";
import "./App.css";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Banner headerText="Providing houses all over the world!" />
      <Suspense fallback={<h3>Loading...</h3>}>
        <HouseList />
      </Suspense>
    </>
  );
}

export default App;
