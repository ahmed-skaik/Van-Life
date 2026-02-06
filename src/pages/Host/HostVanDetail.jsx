import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  if (currentVan) {
    return (
      <>
        <section>
          <Link to=".." relative="path" className="back-button">
            &larr; <span>Back to all vans</span>
          </Link>
          <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={currentVan.imageUrl} />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${currentVan.type}`}>
                  {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
              </div>
            </div>
            <nav className="host-van-detail-nav">
              <NavLink to="." end>
                Details
              </NavLink>
              <NavLink to="pricing">Pricing</NavLink>
              <NavLink to="photo">Photos</NavLink>
            </nav>
            <Outlet context={[currentVan]} />
          </div>
        </section>
      </>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}
