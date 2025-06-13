import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

// === 3D Model Component with Animation Support ===
const Model = () => {
  const group = useRef(); // Ref to the model container

  // Load 3D model and animations from the GLTF file
  const { scene, animations } = useGLTF('/planet/scene.gltf');

  // Hook to control model's animation actions
  const { actions } = useAnimations(animations, group);

  // Auto-play the first animation once loaded
  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name].play(); // Trigger first animation
    }
  }, [actions, animations]);

  // Render the 3D model with scale, position and rotation
  return (
    <primitive
      ref={group}              // Attach reference to control animations
      object={scene}           // Inject loaded scene
      scale={0.3}              // Shrink model for view
      position={[0.4, -0.5, 2]} // Fine-tuned position: X, Y, Z
      rotation={[0.3, 1, 0.2]}  // Rotated slightly for visual depth
    />
  );
};

export default Model;
