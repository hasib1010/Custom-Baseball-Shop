import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import SceneModel from './SceneModel';

const Loader = () => {
  return (
    <Html center>
      <div style={{ color: 'black', fontSize: '24px' }}>Loading...</div>
    </Html>
  );
};

const Glove3D = () => {
  // Define colors for groups of parts
  const [colors, setColors] = useState({
    gloveBase: 'white', // Object_2
    fingersRed: 'white', // Object_3, Object_4
    fingersBlue: 'white', // Object_5, Object_6
    thumbGreen: 'white', // Object_7
    paddingBlack: 'white', // Object_8, Object_9, Object_10, Object_11, Object_12
    indexYellow: 'white', // Object_13, Object_14
    backPurple: 'white', // Object_15
    strapsBrown: 'white', // Object_16, Object_17, Object_18, Object_19
    webOrange: 'white', // Object_20 to Object_26
  });

  // Handle color change for groups
  const handleColorChange = (group, newColor) => {
    setColors((prevColors) => ({
      ...prevColors,
      [group]: newColor,
    }));
  };

  return (
    <div className='flex' style={{ position: 'relative' }}>
      <div className='border' style={{ width: '1000px', height: '800px' }}>
        <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={1.2} position={[5, 5, 5]} castShadow />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <spotLight position={[-10, 10, -10]} intensity={1} angle={0.3} penumbra={0.5} castShadow />

          <Suspense fallback={<Loader />}>
            <SceneModel colors={colors} />
          </Suspense>

          <OrbitControls
            minDistance={65}
            maxDistance={12000}
            target={[14.987, 0, 10.464]}
            enableZoom={true}
            enablePan={true}
          />
        </Canvas>
      </div>

      {/* Color Selection Options */}
      <div >
        <div>
          <label>Glove Base: </label>
          <select
            value={colors.gloveBase}
            onChange={(e) => handleColorChange('gloveBase', e.target.value)}
          >
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div>
          <label>Fingers (Red): </label>
          <select
            value={colors.fingersRed}
            onChange={(e) => handleColorChange('fingersRed', e.target.value)}
          >
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div>
          <label>Fingers (Blue): </label>
          <select
            value={colors.fingersBlue}
            onChange={(e) => handleColorChange('fingersBlue', e.target.value)}
          >
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div>
          <label>Thumb: </label>
          <select
            value={colors.thumbGreen}
            onChange={(e) => handleColorChange('thumbGreen', e.target.value)}
          >
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div>
          <label>Padding: </label>
          <select
            value={colors.paddingBlack}
            onChange={(e) => handleColorChange('paddingBlack', e.target.value)}
          >
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div>
          <label>Index (Yellow): </label>
          <select
            value={colors.indexYellow}
            onChange={(e) => handleColorChange('indexYellow', e.target.value)}
          >
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div>
          <label>Back: </label>
          <select
            value={colors.backPurple}
            onChange={(e) => handleColorChange('backPurple', e.target.value)}
          >
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div>
          <label>Straps: </label>
          <select
            value={colors.strapsBrown}
            onChange={(e) => handleColorChange('strapsBrown', e.target.value)}
          >
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div>
          <label>Web: </label>
          <select
            value={colors.webOrange}
            onChange={(e) => handleColorChange('webOrange', e.target.value)}
          >
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
            <option value="orange">Orange</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Glove3D;
