import React from 'react';

const JourneySection: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glitch-text">
            Ready to Launch?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Your coding journey starts here. Join our space crew and level up your dev skills!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105">
            Start Your Mission
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80"
            alt="Astronaut"
            className="w-96 h-96 object-cover float-astronaut"
          />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;