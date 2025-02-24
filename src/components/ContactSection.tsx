import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-mono text-center mb-12 glitch-text">
          Mission Control
        </h2>
        <div className="max-w-2xl mx-auto bg-[#1A1A2E] p-8 rounded-xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                <Mail className="inline-block mr-2" size={16} />
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-[#0A0A0F] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="astronaut@spacehub.dev"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                <MessageSquare className="inline-block mr-2" size={16} />
                Your Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-[#0A0A0F] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Send us a transmission..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <Send size={18} />
              <span>Send Transmission</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;