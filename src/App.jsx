import Banner from "./components/Banner.jsx";
import { HouseList } from "./components/HouseList.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Banner headerText="Providing houses all over the world!" />
      <HouseList />
    </>
  );
}

export default App;
