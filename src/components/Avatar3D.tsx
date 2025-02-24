import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { Mesh } from "three";

interface AvatarProps {
  stats: {
    level: number;
    xp: number;
    nextLevelXp: number;
    challenges: number;
    streak: number;
  };
}

function AvatarModel() {
  const group = useRef<Mesh>();

  return (
    <group ref={group}>
      <Box args={[1, 2, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#888888" metalness={0.5} roughness={0.5} />
      </Box>
    </group>
  );
}

function Avatar3D({ stats }: AvatarProps) {
  return (
    <div className="space-y-6">
      {/* 3D Avatar */}
      <div className="w-full h-[400px] bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} />
          <AvatarModel />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>

        {/* Instructions Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-white/60">
          Drag to rotate
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-1">Level {stats.level}</h3>
          <div className="text-sm text-gray-400">Code Explorer</div>
        </div>

        {/* XP Bar */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Experience</span>
            <span>
              {stats.xp} / {stats.nextLevelXp} XP
            </span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all"
              style={{ width: `${(stats.xp / stats.nextLevelXp) * 100}%` }}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">{stats.challenges}</div>
            <div className="text-sm text-gray-400">Challenges</div>
          </div>
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">{stats.streak}</div>
            <div className="text-sm text-gray-400">Day Streak</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar3D;
