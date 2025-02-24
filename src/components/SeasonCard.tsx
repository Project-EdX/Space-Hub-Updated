import React from "react";
import { motion } from "framer-motion";

interface SeasonCardProps {
  number: number;
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const SeasonCard: React.FC<SeasonCardProps> = ({
  number,
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glow-card relative overflow-hidden rounded-xl cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 p-6">
        <div className="font-orbitron text-neon-pink mb-2">Season {number}</div>
        <h3 className="font-orbitron text-xl mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <button className="neon-button bg-neon-pink bg-opacity-10 hover:bg-opacity-20 text-neon-pink py-2 px-4 rounded-lg font-medium transition-all">
          Explore Season
        </button>
      </div>
    </motion.div>
  );
};

export default SeasonCard;
