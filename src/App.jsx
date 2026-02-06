import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Vans from "./pages/Vans/Vans.jsx";
import NotFound from "./pages/NotFound.jsx";
import VanDetail from "./pages/Vans/VanDetail.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetail from "./pages/Host/HostVanDetail.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPhoto from "./pages/Host/HostVanPhoto.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import Layout from "./components/Layout.jsx";
import AuthRequired from "./components/AuthRequired.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photo" element={<HostVanPhoto />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
