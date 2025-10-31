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
import * as THREE from 'three';

// Typed mesh reference
type MeshWithMaterial = THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>;

// -----------------------------------------------------------
// Enhanced animated fallback with glow effect
// -----------------------------------------------------------
function CoolFallback() {
    const meshRef = useRef<MeshWithMaterial>(null);
    const time = useRef(0);

    useFrame(() => {
        time.current += 0.05;
        if (meshRef.current) {
            // Properly typed scaling
            const pulse = 1 + Math.sin(time.current) * 0.1;
            meshRef.current.scale.set(pulse, pulse, pulse);

            // Properly typed material access
            const glow = 0.5 + Math.sin(time.current * 2) * 0.5;
            meshRef.current.material.emissiveIntensity = glow;

            // Properly typed rotation
            meshRef.current.rotation.y = time.current * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <sphereGeometry args={[1, 16, 16]} />
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
// 3D Model component with proper typing
// -----------------------------------------------------------
function Model({ scale }: { scale: number }) {
    const [loadError, setLoadError] = useState<Error | null>(null);

    // Use useGLTF with proper error handling
    const gltf = useGLTF('/anshul.glb', undefined, undefined, (error) => {
        console.error('GLTF load error:', error);
        setLoadError(error as unknown as Error);
    });

    if (loadError) {
        throw new Error('Model failed to load');
    }

    // Dispose model when component unmounts
    useEffect(() => {
        return () => {
            if (gltf.scene) {
                gltf.scene.traverse((child) => {
                    // Properly typed child access
                    if ((child as THREE.Mesh).isMesh) {
                        const mesh = child as THREE.Mesh;
                        mesh.geometry.dispose();

                        if (mesh.material) {
                            if (Array.isArray(mesh.material)) {
                                mesh.material.forEach((mat: THREE.Material) => mat.dispose());
                            } else {
                                mesh.material.dispose();
                            }
                        }
                    }
                });
            }
        };
    }, [gltf]);

    return (
        <primitive
            object={gltf.scene}
            scale={scale}
            position={[0, -1, 0]}
            rotation={[0.05, 0, 0]}
        />
    );
}

// -----------------------------------------------------------
// Error fallback component
// -----------------------------------------------------------
function ModelError({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-lg font-bold text-orange-600 mb-2">3D Model Unavailable</h3>
                <p className="text-gray-600 mb-4">
                    {error.message === 'Model failed to load'
                        ? 'The 3D model file could not be loaded'
                        : error.message || 'Try refreshing the page'}
                </p>
                <button
                    onClick={resetErrorBoundary}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}

// -----------------------------------------------------------
// Main component
// -----------------------------------------------------------
export default function Model3D() {
    const [scale, setScale] = useState<number>(7);
    const [canvasKey, setCanvasKey] = useState<number>(0);
    const [showCanvas, setShowCanvas] = useState<boolean>(
        !/iPhone|iPad|iPod/i.test(navigator.userAgent)
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

    // Page visibility - remount Canvas when page becomes visible again
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                console.log('Remounting Canvas after page visibility change');
                setCanvasKey(prev => prev + 1);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    // Detect if the user is on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative">
            {/* Tap button – required on iOS Safari */}
            {!showCanvas && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <button
                        onClick={() => setShowCanvas(true)}
                        className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-sm transition"
                    >
                        Tap to Load 3D Model
                    </button>
                </div>
            )}

            {showCanvas && (
                <Canvas key={canvasKey} dpr={[1, 1.5]}>
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

                    <ErrorBoundary
                        FallbackComponent={ModelError}
                        onReset={() => setCanvasKey(prev => prev + 1)}
                        resetKeys={[canvasKey]}
                    >
                        <Suspense fallback={<CoolFallback />}>
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