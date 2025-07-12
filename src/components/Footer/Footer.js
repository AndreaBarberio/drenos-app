import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="flex flex-col w-full bg-black bg-opacity-70 text-white p-4">
      <div className=" p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h2 className="text-lg font-semibold mb-2">Drenos</h2>
          <p className="text-gray-400">
            Un sito versatile per ogni tipo di attività. Affidabilità e stile al tuo servizio.
          </p>
        </div>


        <div>
          <h2 className="text-lg font-semibold mb-2">Contatti</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <Link to="mailto:info@drenos.com" className="hover:underline">info@drenos.com</Link></li>
            <li>Tel: <Link to="telto:+39 312345678" className="">+39 123 456 789</Link></li>
            <li>Instagram: <Link className="hover:text-blue-400">@drenos.app</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        {new Date().getFullYear()} Drenos. Tutti i diritti riservati ad Andrea Barberio.
      </div>
    </footer>
  );
}