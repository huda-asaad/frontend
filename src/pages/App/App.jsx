import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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
import { getUser } from "../../utilities/users-api"; 

function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const routes = [ "home","about","properties"]
  const mainCSS = routes.filter(r => location.pathname.includes(r) ? r : "").join(" ")

  useEffect(() => {
    async function checkUser() {
      const loggedInUser = await getUser();
      setUser(loggedInUser)
    }
    checkUser()
  }, [])



  return (
    <>
      <Header user={user} setUser={setUser} />  
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          <Route path="/properties" element={<PropertyIndexPage />} />
          <Route path="/properties/:filter" element={<PropertyIndexPage />} />
          <Route path="/properties/" element={<PropertyIndexPage />} />
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
export default App