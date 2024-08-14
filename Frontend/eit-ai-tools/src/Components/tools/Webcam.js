import React, { useEffect, useRef, useState } from 'react';
import '../style.css';

const Webcam = ({ onCapture }) => {
  const videoRef = useRef(null);
  const [videoDevices, setVideoDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(true);

  // Effect to start the video stream with the default webcam
  useEffect(() => {
    const startDefaultVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
          };
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
        alert("Error accessing webcam. Please check your permissions.");
      }
    };

    startDefaultVideo();
  }, []);

  // Effect to get video devices after the default video starts
  useEffect(() => {
    const getVideoDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        setVideoDevices(videoDevices);

        // Set default device if not already set
        if (videoDevices.length > 0 && !selectedDeviceId) {
          setSelectedDeviceId(videoDevices[0].deviceId);
        }
      } catch (err) {
        console.error("Error enumerating devices:", err);
        alert("Error retrieving video devices. Please check your device settings.");
      }
    };

    getVideoDevices();
  }, []);

  // Effect to handle device change
  useEffect(() => {
    const startVideo = async () => {
      if (selectedDeviceId && isCameraOn) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: { exact: selectedDeviceId } }
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play();
            };
          }
        } catch (err) {
          console.error("Error accessing webcam:", err);
          alert("Error accessing webcam. Please check your permissions and try again.");
        }
      }
    };

    startVideo();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [selectedDeviceId, isCameraOn]);

  const handleDeviceChange = (event) => {
    setSelectedDeviceId(event.target.value);
  };

  const handleCameraToggle = () => {
    setIsCameraOn(prev => !prev);
  };

  const handleCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageSrc = canvas.toDataURL('image/jpeg');
      onCapture(imageSrc);
    }
  };

  return (
    <div>
      <select className='mb-2' onChange={handleDeviceChange} value={selectedDeviceId || ''}>
        {videoDevices.map(device => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label || 'Unnamed Device'}
          </option>
        ))}
      </select>
      <video ref={videoRef} autoPlay width="100%" height="auto" className="video-style" />
      <button type="button" className="btn btn-dark mt-3" onClick={handleCapture}>Capture</button>
      <button type="button" className="btn btn-secondary mt-3" onClick={handleCameraToggle}>
        {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
      </button>
    </div>
  );
};

export default Webcam;



// import React, { useEffect, useRef } from 'react';
// import '../style.css';

// const Webcam = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const startVideo = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//           videoRef.current.onloadedmetadata = () => {
//             videoRef.current.play();
//           };
//         }
//       } catch (err) {
//         console.error("Error accessing webcam:", err);
//         alert("Error accessing webcam. Please check your permissions.");
//       }
//     };

//     startVideo();

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         const stream = videoRef.current.srcObject;
//         const tracks = stream.getTracks();
//         tracks.forEach(track => track.stop());
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <video ref={videoRef} autoPlay width="100%" height="auto" className="video-style" />
//     </div>
//   );
// };

// export default Webcam;
