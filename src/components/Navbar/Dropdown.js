import { Link } from "react-router-dom";

function Dropdown({ labels, urls }) {

  return (
    <div className="absolute pt-2">
      <ul className="dropdown-container">
        {urls.map((url, i) => (
          <Link to={url} key={i}>
            <li className="shadow-md shadow-white p-2 rounded-xl bg-gradient-to-b from-slate-400 hover:text-blue-600 hover:shadow-blue-400 transition ">{labels[i]}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown;