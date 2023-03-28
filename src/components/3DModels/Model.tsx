// import * as THREE from "three"
import { Environment, OrbitControls, useGLTF} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import "../../scss/model.scss";

const Model = () => {
  const gltf = useGLTF("./public/test.glb");
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.25}
        rotation-y={4}
        position-x={0.7}
      />
    </>
  );
};

function ModelRen() {
  return (
    <div className="home-page">
      <Canvas camera={{ position: [0, 1.5, 6] }}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls enableZoom={true} maxZoom={2} minZoom={10}/>
          <Environment preset="sunset" blur={0} >
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}
export default ModelRen;
