import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVans } from "../../api";

export default function VanDetail() {
  const [van, setVan] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const params = useParams();
  const location = useLocation();
  // console.log(location.state);

  // React.useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data.vans));
  // }, [params.id]);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans(params.id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [params.id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="van-detail-container">
      <Link
        to={location.state?.search ? `..${location.state.search}` : `..`}
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to {location.state?.type || "all"} vans</span>
      </Link>
      {van && (
        <div className="van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      )}
    </div>
  );
}
