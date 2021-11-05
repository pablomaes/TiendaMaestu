import CartWidget from './CartWidget';

function NavBar () {
    return (
          <>
            <CartWidget/>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
              <a className="navbar-brand" href="#">Tienda de té</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                  <a className="nav-link" href="#">Productos</a>
                  <a className="nav-link" href="#">Quiénes Somos</a>
                  <a className="nav-link" href="#">Contacto</a>
                </div>
              </div>
              </div>
            </nav>
            </div>
            </>
            );}
            


export default NavBar;