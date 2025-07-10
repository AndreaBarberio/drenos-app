
export default function Footer() {
  return (
    <footer className="flex flex-col bg-black bg-opacity-70 text-white py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Brand & Description */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Drenos</h2>
          <p className="text-gray-400">
            Un sito versatile per ogni tipo di attività. Affidabilità e stile al tuo servizio.
          </p>
        </div>


        <div>
          <h2 className="text-lg font-semibold mb-2">Contatti</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <a href="mailto:info@drenos.com" className="hover:underline">info@drenos.com</a></li>
            <li>Tel: <a className="hover:underline">+39 123 456 789</a></li>
            <li>Instagram: <a href="#" className="hover:text-blue-400">@drenos.app</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        {new Date().getFullYear()} Drenos. Tutti i diritti riservati.
      </div>
    </footer>
  );
}