import "./InquiryForm.css";

import { useState } from "react";
import * as inquiryAPI from "../../utilities/inquiry-api";

export default function InquiryForm({ propertyId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await inquiryAPI.createInquiry({ ...formData, property: propertyId });
      setSuccessMsg("Inquiry submitted successfully!");
      setErrorMsg("");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Inquiry error:", err);
      setErrorMsg("Failed to submit inquiry.");
      setSuccessMsg("");
    }
  }

  return (
    <div className="inquiry-form-card">
      <h3>Inquire about this property</h3>
      <form onSubmit={handleSubmit} className="inquiry-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {successMsg && <p className="success">{successMsg}</p>}
      {errorMsg && <p className="error">{errorMsg}</p>}
    </div>
  );
}
