import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const SceneModel = ({ textures }) => {
  const { nodes } = useGLTF('/scene.gltf');

  // Load textures based on the provided props
  const loadedTextures = Object.fromEntries(
    Object.entries(textures).map(([key, value]) => [
      key, useLoader(THREE.TextureLoader, value)
    ])
  );

  console.log("Loaded Textures: ", loadedTextures); // Debugging line

  return (
    <group dispose={null}>
      {/* Glove Base */}
      {nodes.Object_2 && (
        <mesh geometry={nodes.Object_2.geometry}>
          <meshStandardMaterial map={loadedTextures.gloveBase} />
        </mesh>
      )}
      {/* Fingers Red */}
      {nodes.Object_3 && (
        <mesh geometry={nodes.Object_3.geometry}>
          <meshStandardMaterial map={loadedTextures.fingersRed} />
        </mesh>
      )}
      {nodes.Object_4 && (
        <mesh geometry={nodes.Object_4.geometry}>
          <meshStandardMaterial map={loadedTextures.fingersRed} />
        </mesh>
      )}
      {/* Fingers Blue */}
      {nodes.Object_5 && (
        <mesh geometry={nodes.Object_5.geometry}>
          <meshStandardMaterial map={loadedTextures.fingersBlue} />
        </mesh>
      )}
      {nodes.Object_6 && (
        <mesh geometry={nodes.Object_6.geometry}>
          <meshStandardMaterial map={loadedTextures.fingersBlue} />
        </mesh>
      )}
      {/* Thumb */}
      {nodes.Object_7 && (
        <mesh geometry={nodes.Object_7.geometry}>
          <meshStandardMaterial map={loadedTextures.thumbGreen} />
        </mesh>
      )}
      {/* Padding */}
      {Array.from({ length: 5 }, (_, i) => (
        nodes[`Object_${8 + i}`] && (
          <mesh key={`padding-${i}`} geometry={nodes[`Object_${8 + i}`].geometry}>
            <meshStandardMaterial map={loadedTextures.paddingBlack} />
          </mesh>
        )
      ))}
      {/* Index */}
      {nodes.Object_13 && (
        <mesh geometry={nodes.Object_13.geometry}>
          <meshStandardMaterial map={loadedTextures.indexYellow} />
        </mesh>
      )}
      {nodes.Object_14 && (
        <mesh geometry={nodes.Object_14.geometry}>
          <meshStandardMaterial map={loadedTextures.indexYellow} />
        </mesh>
      )}
      {/* Back */}
      {nodes.Object_15 && (
        <mesh geometry={nodes.Object_15.geometry}>
          <meshStandardMaterial map={loadedTextures.backPurple} />
        </mesh>
      )}
      {/* Straps */}
      {Array.from({ length: 4 }, (_, i) => (
        nodes[`Object_${16 + i}`] && (
          <mesh key={`strap-${i}`} geometry={nodes[`Object_${16 + i}`].geometry}>
            <meshStandardMaterial map={loadedTextures.strapsBrown} />
          </mesh>
        )
      ))}
      {/* Web */}
      {Array.from({ length: 7 }, (_, i) => (
        nodes[`Object_${20 + i}`] && (
          <mesh key={`web-${i}`} geometry={nodes[`Object_${20 + i}`].geometry}>
            <meshStandardMaterial map={loadedTextures.webOrange} />
          </mesh>
        )
      ))}
    </group>
  );
};

useGLTF.preload('/scene.gltf');

export default SceneModel;
