import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h2 className="footer-title">Drenos</h2>
          <p className="text-gray-400">
            Un sito versatile per ogni tipo di attività. Affidabilità e stile al tuo servizio.
          </p>
        </div>

        <div>
          <h2 className="footer-title">Contatti</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              Email:{" "}
              <Link to="mailto:info@drenos.com" className="hover:underline">
                info@drenos.com
              </Link>
            </li>
            <li>
              Tel:{" "}
              <Link to="tel:+39312345678" className="hover:underline">
                +39 123 456 789
              </Link>
            </li>
            <li>
              Instagram:{" "}
              <Link to="#" className="hover:text-blue-400">
                @drenos.app
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Drenos®</span>
        <span>Tutti i diritti riservati ad Andrea Barberio.</span>
        <span>{time.toLocaleString()}</span>
      </div>
    </footer>
  );
}
