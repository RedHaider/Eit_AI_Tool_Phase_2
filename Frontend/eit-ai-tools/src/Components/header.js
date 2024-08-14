import logo from '../assets/logo.svg';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {
    return (
        <div className="topdiv">
            <div className=" p-0 container d-flex justify-content-start p-0">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </div>
    );
}

export default Header;
