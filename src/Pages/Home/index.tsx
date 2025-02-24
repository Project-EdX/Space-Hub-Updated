import { useEffect, useState } from "react";
import {
  Rocket,
  User,
  Code2,
  Globe,
  Atom,
  Zap,
  Space as Peace,
  Brain,
  Trophy,
  Bug,
} from "lucide-react";
import TypewriterComponent from "../../components/TypewriterComponent";
import FloatingLogos from "../../components/FloatingLogos";
import CourseCard from "../../components/CourseCard";
import AchievementCard from "../../components/AchievementCard";
import StarryBackground from "../../components/StarryBackground";
import JourneySection from "../../components/JourneySection";
import ContactSection from "../../components/ContactSection";
import { useNavigate } from "react-router-dom";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      const sections = document.querySelectorAll(".section-fade");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <StarryBackground />
      <FloatingLogos />

      <nav
        className={`fixed top-0 w-full z-50 transition-all ${
          scrollY > 50 ? "nav-scrolled" : ""
        } ${isNavVisible ? "" : "nav-hidden"}`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="font-mono cursor-pointer text-xl font-bold"
          >
            Space Hub
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/profile");
            }}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-all"
          >
            <User size={18} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 mt-20">
          <TypewriterComponent
            text="Welcome to Space Hub"
            className="text-6xl font-mono font-bold mb-6 glitch-text"
          />
          <p className="text-gray-400 mb-8 text-xl">
            Level up your coding game! 🚀
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105"
          >
            <Code2 className="inline mr-2" size={20} />
            Start Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative section-fade">
        <h2 className="text-4xl font-mono text-center mb-12 glitch-text">
          !!! Must-Play Hits !!!
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <CourseCard
            // icon={<Globe className="text-blue-400" size={32} />}
            title="Treasure Hunt"
            description="Level up your skills finding treasure!"
          />
          <CourseCard
            // icon={<Globe className="text-blue-400" size={32} />}
            title="Grid Space"
            description="Level up your Grid skills!"
          />
          <CourseCard
            // icon={<Globe className="text-blue-400" size={32} />}
            title="Find the Imposter"
            description="Level up your debugging skills!"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 relative section-fade">
        <h2 className="text-4xl font-mono text-center mb-12 glitch-text">
          Game ON: Elite-Mode 
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <CourseCard
            icon={<Globe className="text-blue-400" size={32} />}
            title="HTML"
            description="Master HTML basics real quick!"
            duration="4 weeks"
            level="Newbie Vibes"
          />
          <CourseCard
            icon={<Atom className="text-green-400" size={32} />}
            title="Tailwind CSS"
            description="Build sick websites that'll make everyone go sheesh!"
            duration="8 weeks"
            level="Mid Journey"
          />
          <CourseCard
            icon={<Rocket className="text-purple-400" size={32} />}
            title="JavaScript"
            description="Create amazing Webpages!"
            duration="6 weeks"
            level="Based Dev"
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative section-fade">
        <h2 className="text-4xl font-mono text-center mb-12 glitch-text">
          Flex Your Wins 
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <AchievementCard
            icon={<Trophy className="text-yellow-400" size={32} />}
            title="Treasure Hunt"
            description="Complete 5 missions"
            progress={85}
          />
          <AchievementCard
            icon={<Bug className="text-red-400" size={32} />}
            title="Find the Imposter"
            description="Fix 10+ bugs"
            progress={65}
          />
          <AchievementCard
            icon={<Rocket className="text-blue-400" size={32} />}
            title="Space Explorer"
            description="Finish all tutorials"
            progress={40}
          />
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

export default Home;
