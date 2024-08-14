import React, { useState, useEffect } from 'react';
import '../style.css';
import Webcam from '../tools/Webcam';
import axios from 'axios';

const FaceDetection = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/face_detection/api/face_detection_table/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data initially
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleCapture = async (imageSrc) => {
    try {
      const formData = new FormData();
      const blob = await fetch(imageSrc).then(res => res.blob());
      formData.append('image', blob, 'capture.jpg');

      const response = await axios.post('http://127.0.0.1:5000/detect_faces', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error.response ? error.response.data : error.message);
    }
    fetchData(); // Refresh data after capturing
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center align-items-center min-vh-100'>
        <div className="col-md-4 text-center">
          <h1>Attendance</h1>
          <Webcam onCapture={handleCapture} />
        </div>
        <div className='col-md-8 text-center'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{new Date(item.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FaceDetection;
