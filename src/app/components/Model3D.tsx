'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';

function Model({ scale }: { scale: number }) {
    const { scene } = useGLTF('/anshul.glb');
    return <primitive object={scene} scale={scale} position={[0, -1, 0]} rotation={[0.05, 0, 0]} />;
}

export default function Model3D() {
    const [scale, setScale] = useState(7);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setScale(7);
            } else if (window.innerWidth < 1024) {
                setScale(7);
            } else {
                setScale(7);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />

                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                <spotLight position={[0, 10, 0]} intensity={0.3} />

                <Environment files="/hdr/studio_small_09_1k.hdr" background={false} />

                <Suspense fallback={null}>
                    <Model scale={scale} />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={2}
                    minDistance={3}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    maxDistance={10}
                />
            </Canvas>
        </div>
    );
}
