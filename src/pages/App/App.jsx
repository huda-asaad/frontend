import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";  

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import PropertyDetailPage from "../PropertyDetailPage/PropertyDetailPage";
import PropertyIndexPage from "../PropertyIndexPage/PropertyIndexPage";
import PropertyFormPage from "../PropertyFormPage/PropertyFormPage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
// APIs
import * as usersAPI from "../../utilities/users-api";

export default function App() {
  const [user, setUser] = useState(null);  

  console.log(user, "check user in app.jsx")

  return (
    <>
      <Header user={user} setUser={setUser} />  
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          <Route path="/properties" element={<PropertyIndexPage />} />
          <Route path="/properties/villas" element={<PropertyIndexPage filter="villa" />} />
          <Route path="/properties/apartments" element={<PropertyIndexPage filter="apartment" />} />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
          <Route path="/properties/new" element={<PropertyFormPage createProperty={true} />} />
          <Route path="/properties/edit/:id" element={<PropertyFormPage editProperty={true} />} />
          <Route path="/properties/confirm_delete/:id" element={<PropertyFormPage deleteProperty={true} />} />
          <Route path="/signup" element={<SignupPage setUser={setUser} />} /> 
          <Route path="/login" element={<LoginPage setUser={setUser} />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}
