

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
                            <a className="nav-link text-primary" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#">Weekly Results</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#">Scoring Leaders</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;