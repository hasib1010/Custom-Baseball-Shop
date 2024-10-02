import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import SceneModel from './SceneModel';
import textureImg from "./../../../public/textures/texture.avif";
import redTexture from "./../../../public/textures/redTexture.jpg";
import greenTexture from "./../../../public/textures/greenTexture.jpg";

const Loader = () => {
  return (
    <Html center>
      <div style={{ color: 'black', fontSize: '24px' }}>Loading...</div>
    </Html>
  );
};

const Glove3D = () => {
  // Define textures for groups of parts
  const [textures, setTextures] = useState({
    gloveBase: textureImg,
    fingersRed: redTexture,
    fingersBlue: textureImg,
    thumbGreen: greenTexture,
    paddingBlack: textureImg,
    indexYellow: textureImg,
    backPurple: textureImg,
    strapsBrown: textureImg,
    webOrange: textureImg,
  });

  // Handle texture change for groups
  const handleTextureChange = (group, newTexture) => {
    setTextures((prevTextures) => ({
      ...prevTextures,
      [group]: newTexture,
    }));
  };

  return (
    <div className='flex' style={{ position: 'relative' }}>
      <div className='border' style={{ width: '1000px', height: '800px' }}>
        <Canvas camera={{ position: [-10,-10,-10], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={5.2} position={[500, 1, 2]} castShadow />
          <pointLight position={[105, 105, 100]} intensity={0.8} />
          <spotLight position={[10, 10, -210]} intensity={1} angle={0.3} penumbra={0.5} castShadow />

          <Suspense fallback={<Loader />}>
            <SceneModel textures={textures} />
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

      {/* Texture Selection Options */}
      <div>
        <div>
          <label>Glove Base: </label>
          <select
            value={textures.gloveBase}
            onChange={(e) => handleTextureChange('gloveBase', e.target.value)}
          >
            <option value={textureImg}>Default Texture</option>
            <option value={redTexture}>Red Texture</option>
            <option value={greenTexture}>Green Texture</option>
            {/* Add more texture options as needed */}
          </select>
        </div>
        <div>
          <label>Fingers (Red): </label>
          <select
            value={textures.fingersRed}
            onChange={(e) => handleTextureChange('fingersRed', e.target.value)}
          >
            <option value={redTexture}>Red Texture</option>
            <option value={greenTexture}>Green Texture</option>
            <option value={textureImg}>Default Texture</option>
            {/* Add more texture options as needed */}
          </select>
        </div>
        <div>
          <label>Fingers (Blue): </label>
          <select
            value={textures.fingersBlue}
            onChange={(e) => handleTextureChange('fingersBlue', e.target.value)}
          >
            <option value={textureImg}>Default Texture</option>
            <option value={redTexture}>Red Texture</option>
            <option value={greenTexture}>Green Texture</option>
            {/* Add more texture options as needed */}
          </select>
        </div>
        <div>
          <label>Thumb: </label>
          <select
            value={textures.thumbGreen}
            onChange={(e) => handleTextureChange('thumbGreen', e.target.value)}
          >
            <option value={greenTexture}>Green Texture</option>
            <option value={textureImg}>Default Texture</option>
            <option value={greenTexture}>Green Texture</option>
            {/* Add more texture options as needed */}
          </select>
        </div>
        <div>
          <label>Padding: </label>
          <select
            value={textures.paddingBlack}
            onChange={(e) => handleTextureChange('paddingBlack', e.target.value)}
          >
            <option value={textureImg}>Default Texture</option>
            <option value={redTexture}>Red Texture</option>
            <option value={greenTexture}>Green Texture</option>
            {/* Add more texture options as needed */}
          </select>
        </div>
        <div>
          <label>Index (Yellow): </label>
          <select
            value={textures.indexYellow}
            onChange={(e) => handleTextureChange('indexYellow', e.target.value)}
          >
            <option value={textureImg}>Default Texture</option>
            <option value={redTexture}>Red Texture</option>
            <option value={greenTexture}>Green Texture</option>
            {/* Add more texture options as needed */}
          </select>
        </div>
        <div>
          <label>Back: </label>
          <select
            value={textures.backPurple}
            onChange={(e) => handleTextureChange('backPurple', e.target.value)}
          >
            <option value={textureImg}>Default Texture</option>
            <option value={redTexture}>Red Texture</option>
            <option value={greenTexture}>Green Texture</option>
            {/* Add more texture options as needed */}
          </select>
        </div>
        <div>
          <label>Straps: </label>
          <select
            value={textures.strapsBrown}
            onChange={(e) => handleTextureChange('strapsBrown', e.target.value)}
          >
            <option value={textureImg}>Default Texture</option>
            <option value={redTexture}>Red Texture</option>
            <option value={greenTexture}>Green Texture</option>
            {/* Add more texture options as needed */}
          </select>
        </div>
        <div>
          <label>Web: </label>
          <select
            value={textures.webOrange}
            onChange={(e) => handleTextureChange('webOrange', e.target.value)}
          >
            <option value={textureImg}>Default Texture</option>
            <option value={redTexture}>Red Texture</option>
            <option value={greenTexture}>Green Texture</option>
            {/* Add more texture options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Glove3D;
