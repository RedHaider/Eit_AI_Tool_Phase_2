import '../style.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your authentication logic here
        navigate("/dashboard");
    };

    return ( 
        <div className="container mt-5 mb-5 login-style">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label htmlFor="contact">Phone number or Email *</label>
                <input type="text" id="contact" name="contact" required/>

                <label htmlFor="password">Password *</label>
                <input type="password" id="password" name="password" required/>

                <div className="row justify-content-between mb-3">
                    <div className="col-auto">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        <label className="mb-0">
                            <input type="checkbox" className="mr-1"/>
                            Remember me
                        </label>
                    </div>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
