import React from 'react';
import { useGLTF } from '@react-three/drei';

const SceneModel = ({ colors }) => {
  const { nodes } = useGLTF('/scene.gltf');

  return (
    <group dispose={null}>
      {/* Glove Base */}
      {nodes.Object_2 && (
        <mesh geometry={nodes.Object_2.geometry}>
          <meshStandardMaterial color={colors.gloveBase} />
        </mesh>
      )}
      {/* Fingers Red */}
      {nodes.Object_3 && (
        <mesh geometry={nodes.Object_3.geometry}>
          <meshStandardMaterial color={colors.fingersRed} />
        </mesh>
      )}
      {nodes.Object_4 && (
        <mesh geometry={nodes.Object_4.geometry}>
          <meshStandardMaterial color={colors.fingersRed} />
        </mesh>
      )}
      {/* Fingers Blue */}
      {nodes.Object_5 && (
        <mesh geometry={nodes.Object_5.geometry}>
          <meshStandardMaterial color={colors.fingersBlue} />
        </mesh>
      )}
      {nodes.Object_6 && (
        <mesh geometry={nodes.Object_6.geometry}>
          <meshStandardMaterial color={colors.fingersBlue} />
        </mesh>
      )}
      {/* Thumb */}
      {nodes.Object_7 && (
        <mesh geometry={nodes.Object_7.geometry}>
          <meshStandardMaterial color={colors.thumbGreen} />
        </mesh>
      )}
      {/* Padding */}
      {Array.from({ length: 5 }, (_, i) => (
        nodes[`Object_${8 + i}`] && (
          <mesh key={`padding-${i}`} geometry={nodes[`Object_${8 + i}`].geometry}>
            <meshStandardMaterial color={colors.paddingBlack} />
          </mesh>
        )
      ))}
      {/* Index */}
      {nodes.Object_13 && (
        <mesh geometry={nodes.Object_13.geometry}>
          <meshStandardMaterial color={colors.indexYellow} />
        </mesh>
      )}
      {nodes.Object_14 && (
        <mesh geometry={nodes.Object_14.geometry}>
          <meshStandardMaterial color={colors.indexYellow} />
        </mesh>
      )}
      {/* Back */}
      {nodes.Object_15 && (
        <mesh geometry={nodes.Object_15.geometry}>
          <meshStandardMaterial color={colors.backPurple} />
        </mesh>
      )}
      {/* Straps */}
      {Array.from({ length: 4 }, (_, i) => (
        nodes[`Object_${16 + i}`] && (
          <mesh key={`strap-${i}`} geometry={nodes[`Object_${16 + i}`].geometry}>
            <meshStandardMaterial color={colors.strapsBrown} />
          </mesh>
        )
      ))}
      {/* Web */}
      {Array.from({ length: 7 }, (_, i) => (
        nodes[`Object_${20 + i}`] && (
          <mesh key={`web-${i}`} geometry={nodes[`Object_${20 + i}`].geometry}>
            <meshStandardMaterial color={colors.webOrange} />
          </mesh>
        )
      ))}
    </group>
  );
};

// Preload the model to improve performance
useGLTF.preload('/scene.gltf');

export default SceneModel;









// import React from 'react';
// import { useGLTF, useTexture } from '@react-three/drei';

// const SceneModel = (props) => {
//   const { nodes } = useGLTF('/scene.gltf'); 

//   return (
//     <group {...props} dispose={null}>
//       <group position={[14.987, 0, 10.464]} rotation={[-Math.PI / 2, 0, -0.994]}>
//         {nodes.Object_2 && (
//           <mesh geometry={nodes.Object_2.geometry}>
//             <meshStandardMaterial  />
//           </mesh>
//         )}
//         {nodes.Object_3 && (
//           <mesh geometry={nodes.Object_3.geometry}>
//             <meshStandardMaterial  color="red" />
//           </mesh>
//         )}
//         {nodes.Object_4 && (
//           <mesh geometry={nodes.Object_4.geometry}>
//             <meshStandardMaterial  color="red" />
//           </mesh>
//         )}
//         {nodes.Object_5 && (
//           <mesh geometry={nodes.Object_5.geometry}>
//             <meshStandardMaterial  color="blue" />
//           </mesh>
//         )}
//         {nodes.Object_6 && (
//           <mesh geometry={nodes.Object_6.geometry}>
//             <meshStandardMaterial  color="blue" />
//           </mesh>
//         )}
//         {nodes.Object_7 && (
//           <mesh geometry={nodes.Object_7.geometry}>
//             <meshStandardMaterial  color="green" />
//           </mesh>
//         )}
//         {nodes.Object_8 && (
//           <mesh geometry={nodes.Object_8.geometry}>
//             <meshStandardMaterial  color="black" />
//           </mesh>
//         )}
//         {nodes.Object_9 && (
//           <mesh geometry={nodes.Object_9.geometry}>
//             <meshStandardMaterial  color="black" />
//           </mesh>
//         )}
//         {nodes.Object_10 && (
//           <mesh geometry={nodes.Object_10.geometry}>
//             <meshStandardMaterial  color="black" />
//           </mesh>
//         )}
//         {nodes.Object_11 && (
//           <mesh geometry={nodes.Object_11.geometry}>
//             <meshStandardMaterial  color="black" />
//           </mesh>
//         )}
//         {nodes.Object_12 && (
//           <mesh geometry={nodes.Object_12.geometry}>
//             <meshStandardMaterial  color="black" />
//           </mesh>
//         )}
//         {nodes.Object_13 && (
//           <mesh geometry={nodes.Object_13.geometry}>
//             <meshStandardMaterial  color="yellow" />
//           </mesh>
//         )}
//         {nodes.Object_14 && (
//           <mesh geometry={nodes.Object_14.geometry}>
//             <meshStandardMaterial  color="yellow" />
//           </mesh>
//         )}
//         {nodes.Object_15 && (
//           <mesh geometry={nodes.Object_15.geometry}>
//             <meshStandardMaterial  color="purple" />
//           </mesh>
//         )}
//         {nodes.Object_16 && (
//           <mesh geometry={nodes.Object_16.geometry}>
//             <meshStandardMaterial  color="brown" />
//           </mesh>
//         )}
//         {nodes.Object_17 && (
//           <mesh geometry={nodes.Object_17.geometry}>
//             <meshStandardMaterial  color="brown" />
//           </mesh>
//         )}
//         {nodes.Object_18 && (
//           <mesh geometry={nodes.Object_18.geometry}>
//             <meshStandardMaterial  color="brown" />
//           </mesh>
//         )}
//         {nodes.Object_19 && (
//           <mesh geometry={nodes.Object_19.geometry}>
//             <meshStandardMaterial  color="brown" />
//           </mesh>
//         )}
//         {nodes.Object_20 && (
//           <mesh geometry={nodes.Object_20.geometry}>
//             <meshStandardMaterial  color="orange" />
//           </mesh>
//         )}
//         {nodes.Object_21 && (
//           <mesh geometry={nodes.Object_21.geometry}>
//             <meshStandardMaterial  color="orange" />
//           </mesh>
//         )}
//         {nodes.Object_22 && (
//           <mesh geometry={nodes.Object_22.geometry}>
//             <meshStandardMaterial  color="orange" />
//           </mesh>
//         )}
//         {nodes.Object_23 && (
//           <mesh geometry={nodes.Object_23.geometry}>
//             <meshStandardMaterial  color="orange" />
//           </mesh>
//         )}
//         {nodes.Object_24 && (
//           <mesh geometry={nodes.Object_24.geometry}>
//             <meshStandardMaterial  color="orange" />
//           </mesh>
//         )}
//         {nodes.Object_25 && (
//           <mesh geometry={nodes.Object_25.geometry}>
//             <meshStandardMaterial  color="orange" />
//           </mesh>
//         )}
//         {nodes.Object_26 && (
//           <mesh geometry={nodes.Object_26.geometry}>
//             <meshStandardMaterial  color="orange" />
//           </mesh>
//         )}
//       </group>
//     </group>
//   );
// };

// // Preload the model to improve performance
// useGLTF.preload('/scene.gltf');

// export default SceneModel; // Make sure this is the default export
