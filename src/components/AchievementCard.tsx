import React from 'react';

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, description, progress }) => {
  return (
    <div className="bg-[#1A1A2E] p-6 rounded-xl">
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-800">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
        <div className="text-right text-sm text-gray-500">{progress}%</div>
      </div>
    </div>
  );
};

export default AchievementCard;