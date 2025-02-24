/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Rocket, User, Lock, Code, Trophy, Star, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../App";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [activeFeature, setActiveFeature] = useState(0);
  const [floatingIcons, setFloatingIcons] = useState<
    { icon: JSX.Element; style: any }[]
  >([]);

  async function loginUser(email: string, password: string) {
    try {
      console.log("Login details: ", email, " ", password);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) {
        console.error("Login failed:", error.message);
        return { success: false, error: error.message };
      }

      console.log("Login successful:", data);
      return { success: true, data: data };
    } catch (error: any) {
      console.error("Login error:", error.message);
      return { success: false, error: error.message };
    }
  }

  const navigate = useNavigate();
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Challenges",
      description: "Battle through 1000+ coding challenges",
      stat: "1000+",
      statLabel: "Challenges",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Skill Progression",
      description: "Level up your coding abilities",
      stat: "42",
      statLabel: "Skills",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Achievement System",
      description: "Earn badges and rewards",
      stat: "100+",
      statLabel: "Achievements",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Learning Paths",
      description: "Structured learning journeys",
      stat: "24",
      statLabel: "Paths",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Create floating icons
    const newIcons = Array.from({ length: 5 }, (_, i) => ({
      icon: features[i % features.length].icon,
      style: {
        position: "absolute",
        animation: `float ${5 + i * 2}s ease-in-out infinite`,
        animationDelay: `${i * 0.5}s`,
        opacity: 0.2,
        transform: `scale(${0.5 + Math.random() * 0.5})`,
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`,
      },
    }));
    setFloatingIcons(newIcons);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser(formData.email, formData.password);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="stars" />

      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="flex items-center space-x-2"
            >
              <Rocket className="w-8 h-8 text-white" />
              <span className="text-xl font-bold">SpaceHub</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Login Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-8 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold">Login to Your Quest</h2>
                <p className="mt-2 text-gray-400">
                  Continue your coding adventure
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-white/10 bg-white/5 text-white focus:ring-white/20"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-400"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-white hover:text-gray-300">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 transition-all duration-200"
                >
                  Start Your Quest
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-gray-400">
                Not a member?{" "}
                <a href="#" className="text-white hover:text-gray-300">
                  Join the Adventure
                </a>
              </p>
            </div>
          </div>

          {/* Interactive Theme Section */}
          <div className="hidden md:block relative overflow-hidden">
            <div className="absolute inset-0">
              {floatingIcons.map((item, index) => (
                <div key={index} style={item.style}>
                  {item.icon}
                </div>
              ))}
            </div>

            <div className="relative h-full flex items-center justify-center">
              <div className="space-y-12 text-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-white/10 blur-xl animate-pulse"></div>
                  <Rocket className="w-24 h-24 mx-auto relative animate-float" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Welcome to SpaceHub
                  </h2>
                  <p className="text-xl text-gray-400">
                    Your Coding Adventure Awaits!
                  </p>
                </div>

                {/* Feature Carousel */}
                <div className="relative h-48">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 transform ${
                        index === activeFeature
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-full"
                      }`}
                    >
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="flex items-center justify-center mb-4">
                          <div className="p-3 bg-white/10 rounded-lg">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {feature.description}
                        </p>
                        <div className="flex justify-center items-center space-x-2">
                          <span className="text-2xl font-bold">
                            {feature.stat}
                          </span>
                          <span className="text-sm text-gray-400">
                            {feature.statLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Navigation Dots */}
                <div className="flex justify-center space-x-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeFeature ? "bg-white w-4" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
