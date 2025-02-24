import React, { useState, useEffect } from "react";
import {
  Rocket,
  ChevronRight,
  ChevronLeft,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Zap,
} from "lucide-react";
import { supabase } from "../../App";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    interests: [] as string[],
    acceptTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < challenges.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // const interestOptions = [
  //   "Web Development",
  //   "Mobile Development",
  //   "Data Science",
  //   "Machine Learning",
  //   "Game Development",
  //   "Cloud Computing",
  // ];

  const challenges = [
    {
      title: "Code Challenges",
      description: "Battle through 1000+ coding challenges",
      count: "1000+ Challenges",
      icon: <Zap className="w-8 h-8 mb-4 text-indigo-400" />,
    },
    {
      title: "Learning Paths",
      description: "Master different programming languages",
      count: "50+ Paths",
      icon: <Shield className="w-8 h-8 mb-4 text-indigo-400" />,
    },
    {
      title: "Projects",
      description: "Build real-world applications",
      count: "100+ Projects",
      icon: <Rocket className="w-8 h-8 mb-4 text-indigo-400" />,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "interests") {
        const updatedInterests = checked
          ? [...formData.interests, value]
          : formData.interests.filter((interest) => interest !== value);
        setFormData((prev) => ({ ...prev, interests: updatedInterests }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  async function registerUser() {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      await supabase.from("users").insert({
        fullname: formData.fullName,
        username: formData.username,
        email: formData.email,
      });

      if (error) {
        console.error("Registration failed:", error.message);
        return { success: false, error: error.message };
      }

      console.log("Registration successful:", data);
      return { success: true, data: data };
    } catch (error: any) {
      console.error("Registration error:", error.message);
      return { success: false, error: error.message };
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !formData.acceptTerms ||
      formData.password != formData.confirmPassword
    ) {
      return;
    }
    await registerUser();
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated stars background */}
      <div className="stars" />
      {/* Navigation */}
      <nav className="fixed w-full bg-black/20 backdrop-blur-md z-50 p-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-full bg-white/5">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-['Press_Start_2P',monospace]">
                SpaceHub
              </span>
            </div>
            <a
              href="/login"
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Already have an account?
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Registration Form */}
          <div className="glass-card p-8 animate-pulse-slow">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block p-3 rounded-full bg-white/5 mb-4 animate-pulse-slow">
                  <Rocket className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-['Press_Start_2P',monospace] mb-2 bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
                  Join SpaceHub
                </h1>
                <p className="text-gray-400 text-sm">
                  Begin your coding adventure
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Full Name */}
                  <div className="form-group flex flex-col ">
                    <label className="form-label">Full Name</label>
                    <div className="relative">
                      <User className="form-icon" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  {/* Username */}
                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <div className="relative">
                      <User className="form-icon" />
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Choose a username"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <div className="relative">
                      <Mail className="form-icon" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <div className="relative">
                      <Lock className="form-icon" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Create a password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <div className="relative">
                      <Lock className="form-icon" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="custom-checkbox"
                      required
                    />
                    <label className="ml-2 text-sm text-gray-400">
                      I accept the{" "}
                      <a
                        href="#"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="primary-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Launching...
                    </span>
                  ) : (
                    "Launch Your Journey"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Interactive Challenges Preview */}
          <div className="hidden lg:block">
            <div className="glass-card p-8 h-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-['Press_Start_2P',monospace] mb-4 bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
                  Welcome to SpaceHub
                </h2>
                <p className="text-gray-400">Your Coding Adventure Awaits!</p>
              </div>

              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {challenges.map((challenge, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="glass-effect rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                          <div className="text-center">{challenge.icon}</div>
                          <h3 className="text-xl font-['Press_Start_2P',monospace] mb-4 text-center">
                            {challenge.title}
                          </h3>
                          <p className="text-gray-400 mb-4 text-center">
                            {challenge.description}
                          </p>
                          <div className="text-2xl font-['Press_Start_2P',monospace] text-indigo-400 text-center">
                            {challenge.count}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev > 0 ? prev - 1 : challenges.length - 1,
                      )
                    }
                    className="slider-nav"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev < challenges.length - 1 ? prev + 1 : 0,
                      )
                    }
                    className="slider-nav"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  {challenges.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`slider-dot ${currentSlide === index ? "active" : "bg-white/20"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Additional Feature Preview */}
              <div className="mt-8 p-6 glass-effect rounded-xl border border-white/10">
                <h3 className="text-lg font-['Press_Start_2P',monospace] mb-4 text-center">
                  Featured Benefits
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-indigo-400" />
                    <p className="text-sm text-gray-400">Secure Progress</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                    <Zap className="w-6 h-6 mx-auto mb-2 text-indigo-400" />
                    <p className="text-sm text-gray-400">Real-time Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
