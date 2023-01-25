import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Layout from "./layout";
import HOME from "./Components/Pages/Home";
import ReduxCalculator from "./Components/Pages/reduxCalculator/reduxCalculatorHome"
import CatPhotoApp from "./Components/Pages/catPhotoApp";
import CamperCafe from "./Components/Pages/camperCafe";
import ColouredMarkers from "./Components/Pages/colouredMarkers";
import RegistrationForm from "./Components/Pages/registrationForm";
import SurveyForm from "./Components/Pages/surveyForm";
import RothkoPainting from "./Components/Pages/rothkoPainting";
import PhotoGallery from "./Components/Pages/photoGallery";
import NutritionLabel from "./Components/Pages/nutritionLabel";
import NoPage from "./Components/Pages/noPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HOME />} />
          <Route path="reduxCalculator" element={<ReduxCalculator />} />
          <Route path="catPhotoApp" element={<CatPhotoApp />} />
          <Route path="camperCafe" element={<CamperCafe />} />
          <Route path="colouredMarkers" element={<ColouredMarkers />} />
          <Route path="registrationForm" element={<RegistrationForm />} />
          <Route path="surveyForm" element={<SurveyForm />} />
          <Route path="rothkoPainting" element={<RothkoPainting />} />
          <Route path="photoGallery" element={<PhotoGallery />} />
          <Route path="nutritionLabel" element={<NutritionLabel />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
