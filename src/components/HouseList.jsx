import useHouses from "../hooks/useHouses";
import HouseRow from "./HouseRow";
import LoadingIndicator from "./LoadingIndicator";
import loadingStatus from "../helpers/loadingStatus";
import ErrorBoundary from "./ErrorBoundary";
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

const HouseList = ({ selectHouse }) => {
  const { houses, setHouses, loadingState } = useHouses();

  if (loadingState !== loadingStatus.loaded) {
    return <LoadingIndicator loadingState={loadingState} />;
  }
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
          <ErrorBoundary fallback="Error loading house rows!">
            {houses.map((h) => (
              <HouseRow house={h} selectHouse={selectHouse} key={h.id} />
            ))}
          </ErrorBoundary>
        </tbody>
      </table>
      <button onClick={addHouse} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default HouseList;
