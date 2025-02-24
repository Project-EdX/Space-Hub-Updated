import {
  Trophy,
  Zap,
  Code,
  Brain,
  Rocket,
  Terminal,
  Github,
} from "lucide-react";
import Avatar3D from "../../components/Avatar3D";
import { useNavigate } from "react-router-dom";

function Profile() {
  // Mock user data
  const user = {
    name: "SpaceCoderX",
    level: 42,
    xp: 8750,
    nextLevelXp: 10000,
    title: "Code Explorer",
    joinDate: "2024-01-15",
    stats: {
      challenges: 156,
      projects: 23,
      contributions: 89,
      streak: 15,
    },
    badges: [
      { id: 1, name: "First Mission", icon: <Rocket />, rarity: "common" },
      { id: 2, name: "Bug Hunter", icon: <Terminal />, rarity: "rare" },
      { id: 3, name: "Code Master", icon: <Trophy />, rarity: "legendary" },
    ],
    interests: ["Web Development", "AI/ML", "Game Dev", "Mobile Apps"],
  };

  // Generate mock contribution data
  const generateContributions = () => {
    const days = 7;
    const weeks = 12;
    const contributions = [];

    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        week.push(Math.floor(Math.random() * 5));
      }
      contributions.push(week);
    }
    return contributions;
  };

  const contributionData = generateContributions();
  const weekDays = ["Mon", "Wed", "Fri"];

  // Floating elements data
  const floatingElements = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      size: 30,
      top: "10%",
      left: "5%",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      size: 40,
      top: "30%",
      left: "15%",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      size: 35,
      top: "50%",
      left: "8%",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      size: 25,
      top: "70%",
      left: "12%",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      size: 45,
      top: "15%",
      left: "85%",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      size: 30,
      top: "35%",
      left: "90%",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      size: 35,
      top: "55%",
      left: "88%",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      size: 40,
      top: "75%",
      left: "92%",
    },
    // Astronaut images from public space-related URLs
    {
      src: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=100",
      size: 50,
      top: "20%",
      left: "40%",
    },
    {
      src: "https://images.unsplash.com/photo-1614726365952-510103b1bbb4?q=80&w=100",
      size: 45,
      top: "60%",
      left: "45%",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="stars">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="floating-element"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              top: element.top,
              left: element.left,
              animationDelay: `${index * -2}s`,
            }}
          >
            <img src={element.src} alt="" />
          </div>
        ))}
      </div>

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
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 3D Avatar */}
          <div>
            <Avatar3D
              stats={{
                level: user.level,
                xp: user.xp,
                nextLevelXp: user.nextLevelXp,
                challenges: user.stats.challenges,
                streak: user.stats.streak,
              }}
            />

            {/* User Info */}
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-400">{user.title}</p>
            </div>
          </div>

          {/* Middle Column - Activity & Learning */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: <Code />,
                  label: "Challenges",
                  value: user.stats.challenges,
                },
                {
                  icon: <Github />,
                  label: "Projects",
                  value: user.stats.projects,
                },
                {
                  icon: <Brain />,
                  label: "Contributions",
                  value: user.stats.contributions,
                },
                {
                  icon: <Zap />,
                  label: "Streak",
                  value: `${user.stats.streak} days`,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="inline-block p-2 bg-white/5 rounded-lg mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contribution Chart */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Contribution Chart</h3>
                <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm">
                  <option>Last 12 months</option>
                  <option>Last 6 months</option>
                  <option>Last 3 months</option>
                </select>
              </div>

              <div className="flex">
                <div className="pr-4 space-y-8 pt-2">
                  {weekDays.map((day) => (
                    <div key={day} className="text-xs text-gray-400">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="flex-1">
                  <div className="grid grid-cols-12 gap-2">
                    {contributionData.map((week, weekIndex) => (
                      <div key={weekIndex} className="space-y-2">
                        {week.map((day, dayIndex) => (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className={`contribution-cell contribution-cell-${day}`}
                            title={`${day} contributions`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Achievement Badges</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {user.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="p-4 bg-white/5 rounded-lg text-center group hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <div
                      className={`
                      inline-block p-3 rounded-full mb-2 transition-all
                      ${
                        badge.rarity === "legendary"
                          ? "bg-yellow-500/20"
                          : badge.rarity === "rare"
                            ? "bg-blue-500/20"
                            : "bg-gray-500/20"
                      }
                    `}
                    >
                      {badge.icon}
                    </div>
                    <div className="font-bold">{badge.name}</div>
                    <div className="text-xs text-gray-400 capitalize">
                      {badge.rarity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Quest Interests</h3>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-all cursor-pointer"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
