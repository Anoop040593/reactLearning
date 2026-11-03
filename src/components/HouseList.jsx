import HouseRow from "./HouseRow";
import { useEffect, useState } from "react";
// const houseArray = [
//   {
//     id: 1,
//     address: "12 Valley of Kings, Geneva",
//     country: "Switzerland",
//     price: 900000,
//   },
//   {
//     id: 2,
//     address: "89 Road of Forks, Bern",
//     country: "Switzerland",
//     price: 500000,
//   },
// ];

export const HouseList = () => {
  const [houses, setHouses] = useState([]);
  //houses is readonly here. change only using set funciton

  useEffect(() => {
    //ideally no need to write fetchHouses method,
    //but the initial function inside the useEffect can't be async.
    const fetchHouses = async () => {
      const response = await fetch("http://localhost:5000/house"); //fetch is async.
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  },);
  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 6,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow house={h} key={h.id} />
          ))}
        </tbody>
      </table>
      <button onClick={addHouse} className="btn btn-primary">
        Add
      </button>
    </>
  );
};
