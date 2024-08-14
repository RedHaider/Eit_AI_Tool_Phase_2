
import {  Routes, Route } from 'react-router-dom';
import ModelComponent from './pages/modeComponent';
import Navbar from './navBar';
import CarNumberPlate from './pages/carNumberPlate';
import FaceDetection from './pages/faceDetection';

const BodyComponent = () => {
    return ( 
      <div>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ModelComponent />} />
            <Route path="/car-number-plate" element={<CarNumberPlate />} />
            <Route path="/face-detection" element={<FaceDetection />} />
          </Routes>
        </div>
     );
}
 
export default BodyComponent;