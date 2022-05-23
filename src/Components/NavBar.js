import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
	            <a className="navbar-brand" href="#">Navbar</a>
	            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	            <span className="navbar-toggler-icon"></span>
  	            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-primary" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/weeklyresults">Weekly Results</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/scoringleaders">Scoring Leaders</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;