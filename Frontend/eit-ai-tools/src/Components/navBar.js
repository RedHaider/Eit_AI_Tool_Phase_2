import { useNavigate } from 'react-router-dom';
import ModelComponent from './pages/modeComponent';

const Navbar = () => {
    
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/dashboard');
    }

    const handleSignout = () => {
        navigate('/');
    }

    return ( 
        <div className="container p-0 top-section">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" onClick={handleHome} style={{ cursor: 'pointer' }}>AI Tools</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={handleHome} style={{ cursor: 'pointer' }}>Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Models</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About Us</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                </li>

            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn btn-outline-dark" type="submit">Search</button>
                <button onClick={handleSignout} style={{ cursor: 'pointer' }} className="btn ms-2 btn-warning" >Signout</button>
            </form>
            
            </div>
        </div>
        </nav>
        </div>
     );
}
 
export default Navbar;