import "./App.css";
import { Route, Routes } from 'react-router-dom';



import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import PropertyDetailPage from "../PropertyDetailPage/PropertyDetailPage";
import PropertyIndexPage from "../PropertyIndexPage/PropertyIndexPage";
import PropertyFormPage from "../PropertyFormPage/PropertyFormPage";
export default function App() {
  return (
    <>

      <Header />
      <main>
     
      <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          <Route path="/properties" element={<PropertyIndexPage />} />
          <Route path="/properties/villas" element={<PropertyIndexPage filter="villa" />} />
          <Route path="/properties/apartments" element={<PropertyIndexPage filter="apartment" />} />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
          <Route path="/properties/new" element={<PropertyFormPage createProperty={true} />} />
          <Route path="/properties/edit/:id" element={<PropertyFormPage editProperty={true} />} />
          <Route path="/properties/confirm_delete/:id" element={<PropertyFormPage deleteProperty={true} />} />
          <Route path="/*" element={<HomePage />} />  
        </Routes>


      </main>
      <Footer />
    </>
  );
}
