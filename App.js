import React, { useState } from 'react';
import './App.css';
import 'aframe';
import 'ar.js';

function App() {
  const [isVRMode, setIsVRMode] = useState(false);

  const toggleVRMode = () => {
    setIsVRMode(!isVRMode);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive AR/VR Educational App</h1>
        <p>Explore various 3D models in AR/VR mode!</p>
        <button onClick={toggleVRMode}>
          {isVRMode ? "Exit VR Mode" : "Enter VR Mode"}
        </button>
      </header>

      {isVRMode ? (
        <a-scene embedded arjs>
          <a-marker preset="hiro">
            <a-box position="0 0.5 0" color="#4CC3D9" scale="0.5 0.5 0.5"></a-box>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      ) : (
        <div>
          <p>Select an AR or VR model to explore.</p>
          <a href="/vr_model_link" target="_blank">3D Molecule</a>
        </div>
      )}
    </div>
  );
}

export default App;
