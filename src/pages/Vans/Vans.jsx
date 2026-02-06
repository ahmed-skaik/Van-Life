import React from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      // (Try) will assume the happy path, while catch will assume the sad path,
      //  finally set loading to false no matter which previouse block of code was running try/catch
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const typeFilter = searchParams.get("type");
  // console.log(typeFilter);

  const displayedVans = typeFilter
    ? vans.filter((char) => char.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} alt={van.name} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>{van.description}</p>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  if (loading) {
    return <h1 aria-live="polite">Loading...</h1>;
  }

  if (error) {
    return <h1 aria-live="assertive">There was an Error: {error.message}</h1>;
  }

  return (
    <div className="van-list-container">
      <nav className="van-list-filter-buttons">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}
        >
          Luxury
        </button>
        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className="van-type clear-filters"
          >
            Clear
          </button>
        ) : null}
      </nav>
      <h1>Explore our van options</h1>

      <div className="van-list">{vanElements}</div>
    </div>
  );
}

// <Link to="?type=simple" className={`van-type simple`}>
//   Simple
// </Link>
// <Link to="?type=rugged" className="van-type rugged">
//   Rugged
// </Link>
// <Link to="?type=luxury" className="van-type luxury">
//   Luxury
// </Link>
// <Link to="." className="van-type clear-filters">
//   Clear Filter
// </Link>
