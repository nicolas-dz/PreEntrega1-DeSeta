import CartWidget from "./CartWidget";
import LogoSanSeverino from "./LogoSanSeverino";

const NavBar = () => {
    return (
        <div className="container my-3 bg-info">
            <div className="row">
                <div className="col-md-2 d-flex justify-content-center">
                    <LogoSanSeverino tamano={120} />
                </div>
                <div className="col-md-9 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Quienes somos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Promociones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;