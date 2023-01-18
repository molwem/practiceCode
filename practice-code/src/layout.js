import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catPhotoApp">Cat Photo App</Link>
          </li>
          <li>
            <Link to="/camperCafe">Camper Cafe</Link>
          </li>
          <li>
            <Link to="/colouredMarkers">Coloured Markers</Link>
          </li>
          <li>
            <Link to="/registrationForm">Registration Form</Link>
          </li>
          <li>
            <Link to="/surveyForm">Survey Form</Link>
          </li>
          <li>
            <Link to="/NoPage">No Page</Link>
          </li>
          <li>
            <Link to="/rothkoPainting">Rothko Painting</Link>
          </li>
          <li>
            <Link to="/photoGallery">Photo Gallery</Link>
          </li>
          <li>
            <Link to="/nutritionLabel">Nutrition Label</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
