// import { Outlet, Link } from "react-router-dom";
import './layout.css'

const Layout = () => {
  return (
    <>
      <div class="sidenav">
        <a href="/">Home</a>
        <a href="/reduxCalculator">Redux Calculator</a>
        <a href="/catPhotoApp">Cat Photo App</a>
        <a href="/camperCafe">Camper Cafe</a>
        <a href="/colouredMarkers">Coloured Markers</a>
        <a href="/rothkoPainting">Rothko Painting</a>
        <a href="/photoGallery">Photo Gallery</a>
        <a href="/nutritionLabel">Nutritional Label</a>
        <a href="/registrationForm">Registration Form</a>
        <a href="/surveyForm">Survey Form</a>
        <a href="/NoPage">No Page</a>
      </div>
    </>
  );
};

export default Layout;
