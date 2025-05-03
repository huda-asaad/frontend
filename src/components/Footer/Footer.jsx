// src/components/Footer/Footer.jsx
import "./Footer.css";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Aqar Real Estate. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
            <SiTiktok />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
