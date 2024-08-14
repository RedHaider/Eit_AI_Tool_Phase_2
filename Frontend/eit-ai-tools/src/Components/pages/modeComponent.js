import '../style.css';
import NumberPlateDetection  from '../../assets/car-name-plate-detection.png'; 
import FaceDetection  from '../../assets/face-detection-logo.jpeg'; 
import { useNavigate } from 'react-router-dom';

const ModelComponent = () => {

    const navigate = useNavigate();

    const handleNumberPlateDetection = () => {
        navigate('/dashboard/car-number-plate');
    }

    const handleFaceDetection = () => {
        navigate('/dashboard/face-detection');
    }


    return (
            <div className="container mt-5 mb-5 justify-content-center">
                <div className="row mt-5 justify-content-center">
                <div className="col mt-5 text-center">
                    <div className="heading">
                        <h1>Our Products</h1>
                        <hr className="underline-hr" />
                    </div>
                </div>

                </div>
                <div className="row product-container mt-5">
                    <div className="card border-1 p-0 container col-md-3" style={{ width: '18rem' }} data-category="all woman accessories">
                        <img className="card-img-top fthphaseimg" src={NumberPlateDetection} alt="Card image cap" id="productImage" />

                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <p className="card-text">Number Plate Detection</p>
                                </div>
                                <div className="col-4 text-right">
                                     <button 
                                     onClick={handleNumberPlateDetection} type="button" class="btn btn-outline-dark">
                                       Demo
                                    </button>
                                </div>
                            </div>
                            <div className="text-left">
                                <i className="fa fa-star stars"></i>
                                <i className="fa fa-star stars"></i>
                                <i className="fa fa-star stars"></i>
                                <i className="rating">(ratings)</i>
                            </div>
                        </div>
                    </div>

                    <div className="card border-1 p-0 container col-md-3" style={{ width: '18rem' }} data-category="all woman accessories">
                        <img className="card-img-top fthphaseimg" src={FaceDetection} alt="Card image cap" id="productImage" />

                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <p className="card-text">Face Recognation</p>
                                </div>
                                <div className="col-4 text-right">
                                <button 
                                 onClick={handleFaceDetection}
                                 type="button"
                                 class="btn btn-outline-dark">
                                    Demo
                                </button>
                                </div>
                            </div>
                            <div className="text-left">
                                <i className="fa fa-star stars"></i>
                                <i className="fa fa-star stars"></i>
                                <i className="fa fa-star stars"></i>
                                <i className="rating">(ratings)</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default ModelComponent;
