import { Link } from "react-router-dom";

function Dropdown({ labels, urls }) {
  return (
    <div
      className=" w-full fixed bottom-0 left-0  bg-white border-t border-gray-300 md:absolute md:top-full md:left-0 md:w-max md:bg-transparent md:border-none md:pt-2"

    >
      <ul className="flex md:flex-col justify-around md:justify-start p-2 md:p-0">
        {urls.map((url, i) => (
          <Link to={url} key={i} className="w-full">
            <li className="opacity-80 hover:opacity-100 text-center md:text-left shadow-md shadow-white p-2 rounded-xl bg-gradient-to-b from-[rgb(129,155,167)] to-[rgb(172,194,204)] hover:text-blue-600 hover:shadow-blue-400 transition w-full">
              {labels[i]}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
