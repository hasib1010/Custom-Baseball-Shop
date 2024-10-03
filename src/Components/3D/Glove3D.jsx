import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import SceneModel from "./SceneModel";
import textureImg from "./../../../public/textures/texture.avif";
import redTexture from "./../../../public/textures/redTexture.jpg";
import greenTexture from "./../../../public/textures/greenTexture.png";
import elephantTexture from "./../../../public/textures/elephant.jpg";
import snakeTexture from "./../../../public/textures/snake.jpg";
import whiteSnake from "./../../../public/textures/whiteSnake.jpg";

const Loader = () => (
  <Html center>
    <div className="text-black text-2xl">Loading...</div>
  </Html>
);

const textures = [
  { name: "White", img: textureImg },
  { name: "Red", img: redTexture },
  { name: "Green", img: greenTexture },
  { name: "Elephant Skin", img: elephantTexture },
  { name: "Snake Skin", img: snakeTexture },
  { name: "White Snake", img: whiteSnake },
];

const parts = [
  "Glove Base",
  "Thumb Inner",
  "Fingers (Blue)",
  "Fingers",
  "Web",
  "Index (Yellow)",
  "Back",
  "Straps",
  "Padding",
];

const Glove3D = () => {
  const [texturesState, setTexturesState] = useState({
    gloveBase: textures[0].img,
    fingersRed: textures[0].img,
    fingersBlue: textures[0].img,
    thumbGreen: textures[0].img,
    paddingBlack: textures[0].img,
    indexYellow: textures[0].img,
    backPurple: textures[0].img,
    strapsBrown: textures[0].img,
    webOrange: textures[0].img,
  });

  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [rotateModel, setRotateModel] = useState(false);

  // Automatically rotate model for 1 second on initial load
  useEffect(() => {
    setRotateModel(true);
    const timer = setTimeout(() => setRotateModel(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTextureChange = (newTexture) => {
    const partKey = Object.keys(texturesState)[currentPartIndex];
    setTexturesState((prevTextures) => ({
      ...prevTextures,
      [partKey]: newTexture,
    }));
  };

  const nextPart = () => {
    if (currentPartIndex < parts.length - 1) {
      setCurrentPartIndex(currentPartIndex + 1);
    }
  };

  const prevPart = () => {
    if (currentPartIndex > 0) {
      setCurrentPartIndex(currentPartIndex - 1);
    }
  };

  return (
    <div className="flex lg:h-[700px] flex-col justify-between lg:flex-row bg-gray-100">
      {/* Canvas */}
      <div className="lg:w-2/3 h-[300px] lg:h-full">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight intensity={1.5} position={[5, 5, 5]} />
          <pointLight position={[105, 105, 100]} intensity={0.8} />
          <spotLight position={[10, 10, -210]} intensity={1} angle={0.3} penumbra={0.5} castShadow />

          <Suspense fallback={<Loader />}>
            <SceneModel
              textures={texturesState}
              rotation={rotateModel ? [0, Math.PI, 0] : [0, 0, 0]}
            />
          </Suspense> 
          <OrbitControls makeDefault />

        </Canvas>
      </div>

      {/* Texture Selection */}
      <div className="lg:w-[600px] p-5 bg-white shadow-lg rounded-lg relative">
        <h2 className="text-center text-gray-800 text-lg mb-4">
          Select Color for {parts[currentPartIndex]}
        </h2>

        {/* Color Options */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {textures.map((texture) => (
            <div
              key={texture.name}
              onClick={() => handleTextureChange(texture.img)}
              className="cursor-pointer border p-2 rounded-md"
            >
              <div
                style={{
                  backgroundImage: `url(${texture.img})`,
                  backgroundSize: "cover",
                  height: "60px",
                  width: "80px",
                }}
              ></div>
              <p className="text-sm text-center">{texture.name}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevPart}
            disabled={currentPartIndex === 0}
            className="py-2 px-4 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600 disabled:bg-blue-300"
          >
            Previous
          </button>
          <button
            onClick={nextPart}
            disabled={currentPartIndex === parts.length - 1}
            className="py-2 px-4 bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600 disabled:bg-blue-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Glove3D;
