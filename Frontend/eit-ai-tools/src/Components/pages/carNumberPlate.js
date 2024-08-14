import React, { useState, useEffect } from 'react';
import '../style.css';
import Webcam from '../tools/Webcam';
import axios from 'axios';

const CarNumberPlate = () => {
  const [records, setRecords] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/number_plate_detection/api/number_plate_detection_table/');
      setRecords(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  const handleCapture = async (imageSrc) => {
    try {
      const formData = new FormData();
      const blob = await fetch(imageSrc).then(res => res.blob());
      formData.append('image', blob, 'capture.jpg');

      const response = await axios.post('http://127.0.0.1:5000/api/capture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error.response ? error.response.data : error.message);
    }
    fetchData();
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center align-items-center min-vh-100'>
        <div className="col-md-4 text-center">
          <h1>Number Plate</h1>
          <Webcam onCapture={handleCapture} />
        </div>
        <div className='col-md-8 text-center'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Timestamp</th>
                <th scope="col">Number Plate</th>
                <th scope="col">Car</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{new Date(record.timestamp).toLocaleString()}</td>
                  <td>
                    <img src={record.number_plate_image} alt={`Number Plate ${index + 1}`} width="100" height="75" />
                  </td>
                  <td>
                    <img src={record.car_image} alt={`Car ${index + 1}`} width="100" height="75" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CarNumberPlate;
