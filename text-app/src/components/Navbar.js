import { Link } from "react-router-dom";
const Navbar = ({ color, handle, showalert }) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  navbar-${color} : bg-${color}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div
              class={`form-check form-switch text-${
                color === `light` ? `dark` : `light`
              }`}
            >
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onChange={handle}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                {color === `light` ? `Enable Dark` : `Enalbe light`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
