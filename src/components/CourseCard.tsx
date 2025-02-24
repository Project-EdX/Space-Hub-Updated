import React from 'react';

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ icon, title, description, duration, level }) => {
  return (
    <div className="bg-[#1A1A2E] p-6 rounded-xl hover:transform hover:scale-105 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{level}</span>
        <span>{duration}</span>
      </div>
      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all">
        Start Mission
      </button>
    </div>
  );
};

export default CourseCard;