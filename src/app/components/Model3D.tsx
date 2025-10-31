'use client';

import {
    Suspense,
    useEffect,
    useState,
    useRef
} from 'react';
import {
    Canvas,
    useFrame
} from '@react-three/fiber';
import {
    OrbitControls,
    useGLTF,
    Environment,
    PerspectiveCamera,
} from '@react-three/drei';
import { ErrorBoundary } from 'react-error-boundary';

// -----------------------------------------------------------
// Enhanced animated fallback with glow effect
// -----------------------------------------------------------
function CoolFallback() {
    const meshRef = useRef();
    const time = useRef(0);

    useFrame(() => {
        time.current += 0.05;
        if (meshRef.current) {
            // Pulsing effect: scale and emissive intensity
            const pulse = 1 + Math.sin(time.current) * 0.1;
            const glow = 0.5 + Math.sin(time.current * 2) * 0.5;
            meshRef.current.scale.set(pulse, pulse, pulse);
            meshRef.current.material.emissiveIntensity = glow;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color="#1a1a2e"
                emissive="#0ff"
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={0.9}
                transparent={true}
                opacity={0.9}
            />
        </mesh>
    );
}

// -----------------------------------------------------------
// Fallback UI when the model fails to load
// -----------------------------------------------------------
function ModelError({ error }: { error: Error }) {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 p-4 text-center bg-black bg-opacity-50 backdrop-blur-sm rounded-xl">
            ❌ Failed to load 3D model: {error.message}
        </div>
    );
}

// -----------------------------------------------------------
// 3D Model component 
// The second argument `true` tells drei to **preload** the model
// -----------------------------------------------------------
function Model({ scale } : { scale: number }) {
    // Preload the model so it is cached and does not disappear
    const { scene } = useGLTF('/anshul.glb', true);
    return (
        <primitive
            object={scene}
            scale={scale}
            position={[0, -1, 0]}
            rotation={[0.05, 0, 0]}
        />
    );
}

export default function Model3D() {
    const [scale, setScale] = useState(7);

    // On iOS we do NOT render the Canvas until the user taps.
    // This respects Safari’s rule that a WebGL context can be created only
    // after a user interaction.
    const [showCanvas, setShowCanvas] = useState(
        !/iPhone|iPad|iPod/i.test(navigator.userAgent) // false on iOS → show button
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setScale(6);
            } else if (window.innerWidth < 1024) {
                setScale(6.5);
            } else {
                setScale(7);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Detect if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
            {/* -----------------------------------------------------------
       // Tap button – required on iOS Safari
       // ----------------------------------------------------------- */}
            {!showCanvas && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <button
                        onClick={() => setShowCanvas(true)}
                        className="bg-rich-black hover:bg-midnight-green text-white font-medium py-3 px-6 rounded-sm transition shadow-md"
                    >
                        Tap to Load 3D Model
                    </button>
                </div>
            )}

            {showCanvas && (
                <Canvas>
                    {/* Increase the far plane so the model stays visible when it rotates */}
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} far={10000} />

                    {/* Lights */}
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                    <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                    <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.15} penumbra={1} castShadow />
                    <pointLight position={[0, -10, 0]} intensity={0.5} />

                    <Environment
                        files="/hdr/studio_small_09_1k.hdr"
                        background={false}
                        blur={0.5}
                    />

                    {/* -----------------------------------------------------------
           // Error handling + loading indicator
           // ----------------------------------------------------------- */}
                    <ErrorBoundary FallbackComponent={ModelError}>
                        <Suspense
                            fallback={<CoolFallback />}
                        >
                            <Model scale={scale} />
                        </Suspense>
                    </ErrorBoundary>

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate={!isMobile}
                        autoRotateSpeed={2}
                        minDistance={3}
                        maxDistance={10}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 2}
                        dampingFactor={0.05}
                    />
                </Canvas>
            )}
        </div>
    );
}