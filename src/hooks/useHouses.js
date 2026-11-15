import { useState, useEffect } from "react";
import loadingStatus from "../helpers/loadingStatus";
const useHouses = () => {
  const [houses, setHouses] = useState([]);
  //houses is readonly here. change only using set funciton
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
  useEffect(() => {
    //ideally no need to write fetchHouses method,
    //but the initial function inside the useEffect can't be async.
    const fetchHouses = async () => {
      setLoadingState(loadingStatus.isLoading);
      try {
        const response = await fetch("http://localhost:5000/house"); //fetch is async.
        const houses = await response.json();
        setHouses(houses);
        setLoadingState(loadingStatus.loaded);
      } catch {
        setLoadingState(loadingStatus.hasErrored);
      }
    };
    fetchHouses();
  }, []);

  return { houses, setHouses, loadingState };
};

export default useHouses;
