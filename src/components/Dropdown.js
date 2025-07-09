import { Link } from "react-router-dom";

function Dropdown({ labels, urls }) {

  return (
    <div className="absolute">
      <ul className="dropdown-container ">
        {urls.map((url, i) => (
          <Link to={url} key={i}>
            <li className="shadow-md shadow-white p-2 rounded-xl">{labels[i]}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown;